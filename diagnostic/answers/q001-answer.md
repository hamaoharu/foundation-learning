# Q001 回答

## 出力と理由

- A:false
  - 理由:スペースの存在有無は別の文字列となる
- B:2
  - 理由:80,90の2つ
- C:false
  - 理由:定義されたまま
- D:false
  - 理由:nameがちがう
- E:false
  - 理由:copyに100がpushされてる
- F:わからない
  - 理由:Boolean() とは
- G:0
  - 理由:falsy関係ない
- H:10
  - 理由:?? はfalsyの0以外を採用

## 修正版コード

```js
const copied = {
  ...original,
  name: original.name.trim(),
  options: {
    notify: false,
  },
};
```

## 自己申告

- 確信がない箇所:DFGH
- 推測した箇所:DFGH

