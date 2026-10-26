/**
 * 件数オブジェクトを「キー: 値」形式の文字列配列へ変換する。
 *
 * @param {Record<string, number>} counts
 * @returns {string[]}
 */
function formatCounts(counts) {
  // ここに実装してください。[[], [], []]
  return Object.entries(counts).map(([key, value]) => {
    return `${key}: ${value}`;
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
