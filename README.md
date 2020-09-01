# VoiroGokko
ボイロごっこ


## 現状目標概要
ボイスロイド実況のような画面の配信を行いたい。

ライブ配信のチャットデータを元に配信画面上の絵を切り替えることができるOBS向けアプリ
つまり視聴者が画面内の絵の操作に関与できる。

pythonスクリプトでライブ配信に接続してチャットデータを取得、xmlファイルにデータを格納する。
このxmlファイルをajaxでOBSブラウザ上のjsに渡して画像操作コマンドを解析、表示。


## 取扱説明(仮) (※印は実装検討前段階)
・想定環境(＃印はインストール必須)
  javascript
  ＃python3系(3.6にて動作確認)
　ニコニコ生放送 (※)YoutubeLive Twitch
　＃OBS (Open Broadcaster Software)
  ＃AssistantSeika(https://hgotoh.jp/wiki/doku.php/documents/voiceroid/assistantseika)
　＃各種AssistanSeika対応の読上げアプリ(ex.棒読みちゃん、VOICEROID)
　＃xampp(バンドルされているapacheを使用)

・コマンド
　文末の##の後の文字列をコマンドとする。(##akane000)
　()の中身の漢字をコマンドとする。(ex.(困惑))
　絵文字をコマンドにする (ex.💃)
　(※)コマンドを必要としない自動差分切り替え。

・読み込み画像
　ファイル形式はcreate.jsで扱える形式に依存(PNG,JPEG,GIF,SVG 20200707現在)
　画像キャンバスサイズは縦長から正方形推奨。
　(※)ファイルデータサイズ制限

・NG設定
　(※)嵐対策

・画面上の仕様
　画面内に表示できるキャラの上限は6(※)+サムネ窓
　左右端に縦に3キャラまで
　(※)配置位置はカスタマイズ可能
　呼び出されたキャラ画像は削除コマンドか(※)時間経過によって削除
　字幕を表示



### Tips
OBS Studio ブラウザソース ショートカットを作成して --remote-debugging-port=9222 フラグをつけて起動後 http://localhost:9222 にアクセスするとコンソールでどのようなエラーが発生しているのかを確認できる。




# ＃＃＃＃＃＃＃＃＃＃ここから草案につき現状意味不明状態＃＃＃＃＃＃＃＃＃＃

立ち絵を準備する→フォーマット通りにリサイズしてもらう→
フォーマット通りのディレクトリにフォーマット通りのファイル名で配置してもらう

xampp起動→Apacheのconfig→Apache(httpd.conf)でメモ帳が開く→
ルートディレクトリをvoirogokko.htmlのある場所に変更→
FileEtag None
RequestHeader unset If-Modified-Since
Header set Cache-Control no-store
Header set Access-Control-Allow-Headers "Content-Type"
Header set Access-Control-Allow-Origin "http://localhost/"
Header set Access-Control-Allow-Origin "http://localhost:7180/"
を最後に書き加える→Start

各種読上げアプリを設定して起動

AssistantSeika起動→製品スキャン→http機能→ワークフォルダを設定→チェックボックスオン→起動

obs起動→ソースにブラウザを追加→ソースの描画順を適宜変更→プロパティを開く→
URLにApacheサーバ経由でのVoiroGokko.htmlへのURLを入力

ignoreフォルダ内にconfig.jsonを用意する→
user_session_sidの値をニコニコにログインしているブラウザのクッキーから持ってくる→
コミュニティ番号を入力しておく

ニコ生を開始する→nico_comment_get.pyを起動→OBSで読み込んだVoiroGokko.htmlをリロード

ニコ生でコメントが発生すると読上げと字幕が発生する

# ＃＃＃＃＃＃＃＃＃＃ここまで草案につき現状意味不明状態＃＃＃＃＃＃＃＃＃＃