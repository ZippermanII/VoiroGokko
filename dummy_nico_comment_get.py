import http.cookiejar
import urllib.request

import socket
import struct
import re
import os
import json
import time
import random
from datetime import datetime
from xml.dom import minidom
import sys
import xml.etree.ElementTree as ET

#os.system('PAUSE')

class DummyNicoliveCommentReceiver:

    def make_xml(self,come):
        # xmlデータを読み込みます
        tree = ET.parse(os.path.join('ignore', 'dummycommentlog.xml'))
        # ツリーを取得
        root = tree.getroot()
        # XMLファイルの生成
        element = ET.fromstring(come)
        root.append(element)
        tree.write(os.path.join('ignore', 'dummycommentlog.xml'))

    def make_dummy_element(self,input_str,no):
        base1 = '<chat date="'
        base2 = '" no="'
        base3 = '" user_id="'
        base4 = '">'
        base5 = '</chat>'
        if input_str[0].isdecimal() is False:
            input_str = "1" + input_str
        dummy_command = input_str[1:]
        print(dummy_command)
        dummy_id = str(int(input_str[0]) * 111111111111111111)
        print(dummy_id)
        now = datetime.now()
        now_ts = int(now.timestamp())
        output_str = base1 + str(now_ts) + base2 + str(no) + base3 + dummy_id + base4 + dummy_command + base5
        return  output_str

    def machine_gun_loop(self,no):
        base1 = '<chat date="'
        base2 = '" no="'
        base3 = '" user_id="'
        base4 = '">'
        base5 = '</chat>'
        now = datetime.now()
        now_ts = int(now.timestamp()) 
        nowStr = str(now)
        dummy_id = str(int(nowStr[-1]) * 111111111111111111)
        output_str = base1 + str(now_ts) + base2 + str(no) + base3 + dummy_id + base4 + 'dummy_comment' + base5
        return  output_str

    def random_cast(self,no,id):
        base1 = '<chat date="'
        base2 = '" no="'
        base3 = '" user_id="'
        base4 = '">'
        base5 = '</chat>'
        chara = ["yukari","maki","akane","aoi","kiritan","zunko","itako","tsuina","seika","sora","akari"]
        dummy_id = str (id * 111111111111111111)
        now = datetime.now()
        now_ts = int(now.timestamp())
        output_str = base1 + str(now_ts) + base2 + str(no) + base3 + dummy_id + base4 + '##' + random.choice(chara) + base5
        return output_str

#
# # commentlog.xmlをバックアップし新たなxmlを生成
# try:
#     with open ("ignore/commentlog.xml",mode='x') as f:
#         s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><log></log>'
#         f.write(s)
# except FileExistsError:
#     pass
# tree = ET.parse(os.path.join('ignore', 'commentlog.xml'))
# root = tree.getroot()
# chat = root.find('chat')
# if chat is not None:
#     date = chat.get('date')
#     time = datetime.fromtimestamp(int(date))
#     timestr = time.strftime("%Y%m%d%H%M%S")
#     tree.write(os.path.join('ignore', timestr + 'commentlog.xml'))
#
#     for chats in root.findall('chat'):
#         root.remove(chats)
#         tree.write(os.path.join('ignore', 'dummycommentlog.xml'))

dncr = DummyNicoliveCommentReceiver()
no = 1
# ダミーコメントを取得して表示
while True:
    inp = input("ダミーコマンドを入力してください。")
    # 短時間でコメントを連投するモード
    if inp == 'machinegunmode':  
        while True:
            i = 0
            if i < 5:
                time.sleep(0.01)
                dummystr = dncr.machine_gun_loop(no)
                print(dummystr)
                try:
                    dncr.make_xml(dummystr)
                except:
                    import traceback
                    traceback.print_exc()
                    traceback.print_exc()
                    traceback.print_exc()
                    traceback.print_exc()
                    traceback.print_exc()
                no += 1
                i += 1
            else:
                time.sleep(5)
                i = 0
    elif inp == "randomcast":
        i = 0
        while i < 6:
            dummystr = dncr.random_cast(no,i)
            try:
                dncr.make_xml(dummystr)
            except:
                import traceback
                traceback.print_exc()
            no += 1
            i += 1
    else:
        dummystr = dncr.make_dummy_element(inp,no)
        print(dummystr)
        dncr.make_xml(dummystr)
        no += 1
