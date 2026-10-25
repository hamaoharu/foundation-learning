/**
 * 商品価格の合計と、価格の昇順に並べた新しい配列を返す。
 *
 * @param {{id: number, name: string, price: number}[]} products
 * @returns {{
 *   totalPrice: number,
 *   sortedProducts: {id: number, name: string, price: number}[]
 * }}
 */
function createPriceSummary(products) {
  // ここに実装してください。
  const totalPrice = products.reduce((price, product) => {
    return price + product.price;
  }, 0)
  const sortedProducts = products.slice().sort((a,b) => {
    return a.price - b.price;
  })
  return {
    totalPrice,
    sortedProducts,
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
