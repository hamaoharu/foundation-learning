/**
 * 販売条件を満たす商品を表示用オブジェクトへ変換する。
 *
 * @param {{id: number, name: string, price: number, stock: number}[]} products
 * @returns {{id: number, label: string}[]}
 */
function createSaleItems(products) {
  // ここに実装してください。
  return products.filter((product) => {
    return product.price >= 1000 && product.stock >= 1;
  }).map((product) => {
    return {id: product.id, label:`${product.name.trim()}：${product.price}円`}
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
