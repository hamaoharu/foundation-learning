# Unit 17 / Q005 回答

## 問1
遂時実行
userが帰ってくる前に実行するとエラーになるため


## 問2
並行実行できる
どちらが先に実行終わっても互いに影響を及ばさない


## 問3

```js
const [user, settings] = await Promise.all([
    fetchUser(),
    fetchSettings(),
])
```

## 問4
ID一覧を取得してから商品取得を始める部分は逐次実行。
取得した各IDの商品詳細は互いに依存しないため並行実行できる。


## 問5

```js
const productPromises = ids.map((id) => {
    return fetchProduct(id);
})

const products = await Promise.all(productPromises);
```

## 自己申告

- 資料を参照したか：
- 確信がない箇所：

