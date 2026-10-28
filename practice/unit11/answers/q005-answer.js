/**
 * Mapの各要素を「キー: 値」形式の文字列へ変換する。
 *
 * @param {Map<string, number>} counts
 * @returns {string[]}
 */
function formatCounts(counts) {
  // ここに実装してください。
  const result = [];
  for(const count of counts){
    const [key, value] = count;
    result.push(`${key}: ${value}`);
  }
  return result;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
