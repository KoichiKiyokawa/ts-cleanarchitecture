# ts-cleanarchitecture
クリーンアーキテクチャの勉強がてら、Deno + TypeScriptで簡単なREST APIを作ってみました。

## モデル
タイトル(title)と本文(body)からなる投稿(post)モデルだけのシンプル構成です。

## API
エンドポイント|METHOD|例|説明
--|--|--|--
/posts|GET|`curl localhost:3000/posts`|投稿一覧を取得
/posts|POST|`curl localhost:3000/posts -X POST  -H "Content-Type: application/json" -d '{"title":"test","body":"body"}'`|投稿を追加
/post/:postId/comments|GET|`curl localhost:3000/posts/1/comments`|投稿1のコメント一覧を取得
/post/:postId/comments|POST|`curl localhost:3000/posts/1/comments -X POST  -H "Content-Type: application/json" -d '{"text":"post1 is nice"}'`|投稿1にコメントを追加

## 実行方法
### 依存関係
- Deno >= 1.0.0
- SQLite3

### はじめかた
```shell
git clone https://github.com/KoichiKiyokawa/ts-cleanarchitecture.git
cd ts-cleanarchitecture
# Run migration
ls -d db/migrate/* | xargs -L 1 -IX sh -c 'sqlite3 test.db < X'
deno run --allow-net --allow-read --allow-write src/server.ts
# 別のタブにて
curl localhost:3000/<endpoint>
```

### テスト方法
```shell
deno test
```
