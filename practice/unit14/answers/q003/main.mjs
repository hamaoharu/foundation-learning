// default exportをcreateProductLabelという名前で受け取り、
// taxRateも同じimport文で名前付きimportしてください。

const product = {
  name: "Keyboard",
  price: 5000,
};

const label = createProductLabel(product);

console.log(label);
console.log(taxRate);

// 期待する出力:
// Keyboard: 5500円
// 0.1

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
