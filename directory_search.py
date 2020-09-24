import glob
import re
import os
import pprint
import xml.etree.ElementTree as ET
import html
from xml.dom import minidom

loop = 0
start = 0
end = 0

os.remove('ignore/skins_collection.xml')
# pprint.pprint(collection)
# os.system('PAUSE')

try:
    with open ("ignore/skins_collection.xml",mode='x') as f:
        s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><log></log>'
        f.write(s)
except FileExistsError:
    pass

tree = ET.parse(os.path.join('ignore', 'skins_collection.xml'))
root = tree.getroot()

collection = glob.glob('skins/**/000.png', recursive=True)

for targetStr in collection:
    count = 0
    r = targetStr.count('\\')
    parent = root
    for i in range(r):
        count += 1
        m = re.search(r'\\+', targetStr)
        end = m.span()[0]
        s = m.span()[1]
        tagName = targetStr[0:end]   
        child = ET.SubElement(parent,tagName)
        parent = child
        start = s
        targetStr = targetStr[start:len(targetStr)]
        if count == r:
            child.text = targetStr
    
tree.write(os.path.join('ignore', 'skins_collection.xml'), encoding="UTF-8")
val = input('ディレクトリサーチ完了しました　Enter で終了 ')
# os.system('PAUSE')