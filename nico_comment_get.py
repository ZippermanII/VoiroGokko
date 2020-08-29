import http.cookiejar
import urllib.request

import socket
import struct
import re
import os
import json
import time
from datetime import datetime
from xml.dom import minidom
import sys
import xml.etree.ElementTree as ET
import pprint

#os.system('PAUSE')
# 放送のIDをいれる



class NicoliveCommentReceiver:


    def get_lv(self,coNo):
        self.community_URL = 'http://com.nicovideo.jp/community/' + coNo
        html = urllib.request.urlopen(self.community_URL).read().decode('utf-8')
        nowLive = re.search('now_live_inner', html)
        if nowLive is not None:
            m = re.search('watch/(lv[0-9]+)', html)
            if m is None:
                print(" m is none")
                os.system('PAUSE')
                return None
            else:
                return m.group(1)
        else:
            print("nowLive is none")
            return None

    def make_xml(self,come):
        # xmlデータを読み込みます
        tree = ET.parse(os.path.join('ignore', 'commentlog.xml'))
        # ツリーを取得
        root = tree.getroot()
        # XMLファイルの生成
        element = ET.fromstring(come)
        root.append(element)
        print(come)
        tree.write(os.path.join('ignore', 'commentlog.xml'))


ncr = NicoliveCommentReceiver()

try:
    with open ("ignore/commentlog.xml",mode='x') as f:
        s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><log></log>'
        f.write(s)
except FileExistsError:
    pass
tree = ET.parse(os.path.join('ignore', 'commentlog.xml'))
root = tree.getroot()
chat = root.find('chat')
if chat is not None:
    date = chat.get('date')
    starttime = datetime.fromtimestamp(int(date))
    timestr = starttime.strftime("%Y%m%d%H%M%S")
    tree.write(os.path.join('ignore', timestr + 'commentlog.xml'))

    for chats in root.findall('chat'):
        root.remove(chats)
        tree.write(os.path.join('ignore', 'commentlog.xml'))
else:
    print('FileExistsError commentlog.xml')
    os.system("PAUSE")

loopnum = 0

while True:
    if loopnum % 3 == 0:        
        comunity = "ぼいろごっこ"
        lvno = ncr.get_lv('co5008727')
    elif loopnum % 3 == 1:
        comunity = "こばわんわ！！！"
        lvno = ncr.get_lv('co3097203')
    else:
        comunity = "テスト配信用コミュ"
        lvno = ncr.get_lv('co3584440')
    loopnum += 1
    if lvno is not None:
        break
    if loopnum == 6:
        lvno = input("配信中のURLのlvから始まる番号をlvも含めて入力")
        break
    print(comunity + " is not streaming.")
    time.sleep(5)
        
print(comunity)


# ニコ生にログインしてるブラウザからクッキー"user_session"の値を持ってきてsidに入れる
config_json_path = os.path.join(os.path.abspath(os.path.dirname(__file__)) + "/ignore", 'config.json')
CONFIG = json.load(open(config_json_path))
sid = CONFIG['user_session_sid']

# 放送の情報を取得するurl。ここから、コメントを取得するサーバのアドレス,ポート番号と、スレッドidを取得する
apistat_url = "http://watch.live.nicovideo.jp/api/getplayerstatus?v=%s"

# 取得時に設定するuser-agent
uagent = "test test"

# まずはアクセス時のクッキーを作る(user_sessionを設定するだけ)
cj = http.cookiejar.CookieJar()
ck = http.cookiejar.Cookie(version=0, name='user_session', value=sid, port=None, port_specified=False,
                           domain='.live.nicovideo.jp', domain_specified=False, domain_initial_dot=False, path='/',
                           path_specified=True, secure=False, expires=None, discard=True, comment=None,
                           comment_url=None, rest={'HttpOnly': None}, rfc2109=False)
cj.set_cookie(ck)
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

# user-agent設定
opener.addheaders = [('User-agent', uagent)]

# url生成してアクセス
target_url = apistat_url % lvno
r = opener.open(target_url)
data = r.read()  # GETのレスポンス取得(xml形式)
r.close()

# XMLのデータからサーバのアドレス,ポート番号と、スレッドidを取り出す
doc = minidom.parseString(data)
child = doc.getElementsByTagName('getplayerstatus')[0]
status = child.getAttribute('status')
if status == 'ok':
    mstag = child.getElementsByTagName('ms')[0]
    addr = mstag.getElementsByTagName('addr')[0].firstChild.data.strip()
    port = mstag.getElementsByTagName('port')[0].firstChild.data.strip()
    threadid = mstag.getElementsByTagName('thread')[0].firstChild.data.strip()
else:
    print('getplayerstatus error')
    os.system('PAUSE')

# ソケット生成し、取得したアドレス、ポートで接続
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((addr, int(port)))

# スレッドIDを埋め込んだ文字列を送信(末尾に"0"を付ける)
#sd = '' % threadid
sd = threadid
#os.system('PAUSE')
#sock.send(sd.encode())
sock.send(bytes('<thread thread="{thread}" version="20061206" res_from="-1"/>\0'.format(thread=threadid),"utf-8"))
sock.send(struct.pack('b', 0))
# 一回目の受信データは無視
data = sock.recv(2048)
# コメントを取得して表示
while True:
    print("l127")
    try:
        data = sock.recv(2048)[:-1]
        come = re.sub(r'', '', data.decode())
        ncr.make_xml(come)
    except:
        import traceback
        traceback.print_exc()