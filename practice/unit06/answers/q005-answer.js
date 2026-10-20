/**
 * 在庫があり、公開中の商品だけを残した新しい配列を返す。
 *
 * @param {{id: number, name: string, stock: number, isPublished: boolean}[]} products
 * @returns {{id: number, name: string, stock: number, isPublished: boolean}[]}
 */
function collectAvailableProducts(products) {
  // ここに実装してください。
  return products.filter((product) => {
    return product.stock >= 1 && product.isPublished;
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
