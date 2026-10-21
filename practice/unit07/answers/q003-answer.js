/**
 * 在庫切れの商品が1つでもあればtrueを返す。
 *
 * @param {{id: number, stock: number}[]} products
 * @returns {boolean}
 */
function hasOutOfStockProduct(products) {
  // ここに実装してください。
  return products.some((product) => {
    return product.stock === 0;
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
