/**
 * 在庫オブジェクトのキー・値・entriesを返す。
 *
 * @param {Record<string, number>} stockByProduct
 * @returns {{
 *   productNames: string[],
 *   stockCounts: number[],
 *   entries: [string, number][]
 * }}
 */
function analyzeStockObject(stockByProduct) {
  // ここに実装してください。
  return {
    productNames: Object.keys(stockByProduct),
    stockCounts: Object.values(stockByProduct),
    entries: Object.entries(stockByProduct),
  };
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
