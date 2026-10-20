/**
 * IDが一致する商品の表示用文字列を返す。
 *
 * @param {{id: number, name: string, price: number}[]} products
 * @param {number} targetId
 * @returns {string}
 */
function findProductLabel(products, targetId) {
  // ここに実装してください。
  for (const product of products){
    if(product.id === targetId){
      return `${product.name}（${product.price}円）`;
    }
  }
  return "商品が見つかりません";
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
