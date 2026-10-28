/**
 * 重複を除いた新しいタグ配列を返す。
 *
 * @param {string[]} tags
 * @returns {string[]}
 */
function getUniqueTags(tags) {
  // ここに実装してください。
  const set = new Set(tags);
  return [...set];
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
