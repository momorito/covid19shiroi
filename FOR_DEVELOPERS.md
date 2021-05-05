# 開発者向け情報

## 1. 環境構築

以下のアプリケーション開発をおこなう環境へインストールします。

| アプリケーション名 | バージョン(指定がある場合のみ、記載する) | インストール条件 |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/ja/)|14.16.0以上|必須|
|[Visual Studio Code](https://code.visualstudio.com/)| |[Visual Studio Codeを利用する場合](#1-1-visual-studio-codeの拡張機能)|
|[yarn](https://classic.yarnpkg.com/ja/)| |[本プログラムをyarnで実行する場合](#2-1-yarn-を使う場合)|
|[docker compose](https://docs.docker.com/compose/install/)| |[本プログラムをdocker composeで実行する場合](#2-2-docker-compose-を使う場合)|
|[Vagrant](https://www.vagrantup.com/)| |[本プログラムをVagrantで実行する場合](#2-3-vagrant-を使う場合)|
|[Visual Studio Code](https://code.visualstudio.com/) + [Remote Containers](https://code.visualstudio.com/docs/remote/remote-overview) | |[Visual Studio Code + Remote Containersで開発する場合](#2-4-visual-studio-code--remote-containersで開発する場合)|
|[Gitpod](https://www.gitpod.io/)| |[Gitpodで開発する場合](#2-5-gitpodで開発する場合)|

### 1-1. Visual Studio Codeの拡張機能

Visual Studio Codeを利用する場合は、以下の拡張機能をインストールします。

| 拡張機能 | インストール条件 |
| ------- | ------- |
|[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)|任意|
|[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)|任意|
|[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)|任意|
|[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)|任意|
|[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)|Visual Studio CodeでRemote Developmentを利用する場合|

---

## 2. 実行

コマンドの実行は、WorkingCopyのルートディレクトリでおこないます。

### 2-1. `yarn` を使う場合

#### 2-1-1. 依存関係を構築する

```bash
# install dependencies
$ yarn install
```

#### 2-1-2. プログラムを実行する

以下のコマンドを実行した後、 http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。

##### 2-1-2-1. 通常

```bash
# serve with hot reload at localhost:3000
$ yarn dev
```

##### 2-1-2-2. 軽量モード

開発用ローカルサーバが重い場合、以下のようにアクセシビリティチェック(vue-axe)を無効にして、起動できます。

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

#### 2-1-3. トラブルシュート

##### 2-1-3-1. `Cannot find module ****` と怒られた時

再度、依存関係を構築し直し、プログラムを実行します。

### 2-2. `docker compose` を使う場合

#### 2-2-1. 依存関係を構築し、プログラムを実行する

以下のコマンドを実行した後、 http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

#### 2-2-2. トラブルシュート

##### 2-2-2-1. `Cannot find module ****` と怒られた時

プログラムを止め、以下のコマンドを実行します。
```bash
# serve with hot reload at localhost:3000
$ docker-compose run --rm app yarn install
```

### 2-3. `Vagrant` を使う場合

#### 2-3-1. 依存関係を構築し、プログラムを実行する

以下のコマンドを実行した後、 http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。
```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. Visual Studio Code + Remote Containersで開発する場合

#### 2-4-1. 依存関係を構築し、プログラムを実行する

[Quick start: Try a dev containerの画像 (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように、左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば、環境構築が始まります。

環境を構築した後に http://localhost:3000 にアクセスすると、開発中のプログラムを確認する事ができます。

#### 2-4-2. Topic

- 設定を変更したい場合は、[devcontainer.json reference (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照し、`.devcontainer/devcontainer.json`を変更してください。
- Remote Container実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて`.devcontainer/devcontainer.json`の`extensions`に追加してください。
詳細な手順は、[Managing extensions (外部サイト)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

### 2-5. Gitpodで開発する場合

以下のボタンを押し、GitHubアカウント認証をすると、自動的にリモート開発環境のセットアップが行われます。

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/tokyo-metropolitan-gov/covid19)

無償ユーザーは月50時間まで利用できます。

---

## 3. 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。
テスト環境のみで実行したい処理がある場合は、こちらの値をご利用ください。

---

## 4. 各数値の格納場所
# (1) 最新のお知らせ
   基本的な項目　→　data/news.jsonに記載。
   最終更新　→　data/data.json中の"lastUpdate"に記載
   ・記載例（基本的な項目）
   ```
{
    "newsItems": [
        {
            "date": "2021\/04\/30",
            "url": "https:\/\/www.city.shiroi.chiba.jp\/kenko\/covid19\/jokyo/8420.html",
            "text": "市内における感染者の発生について｜4月30日更新"
        },
        {
            "date": "2021\/04\/30",
            "url": "https:\/\/www.city.shiroi.chiba.jp\/kenko/covid19\/info\/8404.html",
            "text": "千葉県からのお願い【新型コロナ】"
        },
        {
            "date": "2021\/04\/30",
            "url": "https:\/\/www.city.shiroi.chiba.jp\/kenko/covid19\/jokyo/8421.html",
            "text": "市内小中学校の感染状況について｜4月30日更新"
        },
        
        {
            "date": "2021\/04\/27",
            "url": "https:\/\/www.city.shiroi.chiba.jp\/kenko\/covid19\/vaccine\/9121.html",
            "text": "ワクチン接種時に利用できるタクシー券を交付（要介護2以上・重度心身障がいの方向け）"
        },
        {
            "date": "2021\/04\/23",
            "url": "https:\/\/www.city.shiroi.chiba.jp\/kenko\/covid19\/jokyo\/8562.html",
            "text": "市職員の感染について｜4月23日更新"
        }
        
    ]
}

   ```

・記載例（最終更新）
```
"lastUpdate": "2021\/05\/05 21:00",
```

# (2) 検査要請車の状況
