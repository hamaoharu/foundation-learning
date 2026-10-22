/**
 * 商品を価格の降順に並べ替えた新しい配列を返す。
 *
 * @param {{id: number, name: string, price: number}[]} products
 * @returns {{id: number, name: string, price: number}[]}
 */
function sortProductsByPriceDescending(products) {
  // ここに実装してください。
  return products.slice().sort((a,b) => {
    return b.price - a.price;
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
