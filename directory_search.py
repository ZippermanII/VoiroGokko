import glob
import re
import os
import pprint
import xml.etree.ElementTree as ET
import html

loop = 0
start = 0
end = 0

collection = glob.glob('skins/**/000.png', recursive=True)
pprint.pprint(collection)
os.system('PAUSE')


try:
    with open ("ignore/skins_collection.xml",mode='x') as f:
        s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><log></log>'
        f.write(s)
except FileExistsError:
    pass
# xmlデータを読み込みます
tree = ET.parse(os.path.join('ignore', 'skins_collection.xml'))
# ツリーを取得
root = tree.getroot()
# XMLファイルの生成
# element = ET.fromstring(come)
# root.append(element)
# print(come)
# tree.write(os.path.join('ignore', 'skins_collection.xml'))



for aaaaaaaaaa in collection:
    r = aaaaaaaaaa.count('\\')
    parent = root
    for i in range(r):
        m = re.search(r'\\+', aaaaaaaaaa)
        end = m.span()[0]
        s = m.span()[1]
        bbbbbbbbbb = aaaaaaaaaa[0:end]
        print(bbbbbbbbbb)
        if bbbbbbbbbb.isdecimal():
            bbbbbbbbbb = 'series' + bbbbbbbbbb
        child = ET.SubElement(parent,bbbbbbbbbb)
        print(child)
        print('parent.tag = ' + parent.tag)
        print('child.tag = ' + child.tag)
        parent = child
        start = s
        aaaaaaaaaa = aaaaaaaaaa[start:len(aaaaaaaaaa)]

print (root)
tree.write(os.path.join('ignore', 'skins_collection.xml'), encoding="UTF-8")
os.system('PAUSE')

# def make_xml(self,come):
#     # xmlデータを読み込みます
#     tree = ET.parse(os.path.join('ignore', 'skins_collection.xml'))
#     # ツリーを取得
#     root = tree.getroot()
#     # XMLファイルの生成
#     element = ET.fromstring(come)
#     root.append(element)
#     print(come)
#     tree.write(os.path.join('ignore', 'skins_collection.xml'))