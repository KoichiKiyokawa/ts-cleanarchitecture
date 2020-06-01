# ts-cleanarchitecture
クリーンアーキテクチャの勉強がてら、Deno + TypeScriptで簡単なREST APIを作ってみました。

## モデル
タイトル(title)と本文(body)からなる投稿(post)モデルだけのシンプル構成です。

## API
エンドポイント|METHOD|説明
--|--|--
/posts|GET|投稿一覧を取得

## 実行方法
### 依存関係
- Deno >= 1.0.0

### はじめかた
```shell
git clone https://github.com/KoichiKiyokawa/ts-cleanarchitecture.git
cd ts-cleanarchitecture
deno run --allow-net --allow-read src/server.ts
# 別のタブにて
curl localhost:8080/<endpoint>
```
