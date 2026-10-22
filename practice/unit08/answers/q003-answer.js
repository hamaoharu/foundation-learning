/**
 * 商品カテゴリごとの件数を返す。
 *
 * @param {{id: number, category: string}[]} products
 * @returns {Record<string, number>}
 */
function countProductsByCategory(products) {
  // ここに実装してください。
  return products.reduce((counts, product) => {
    const category = product.category;
    const currentCount = counts[category] ?? 0;
    counts[category] = currentCount + 1;

    return counts;
  },{});
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
