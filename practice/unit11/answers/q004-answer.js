/**
 * 文字列ごとの出現回数を保存したMapを返す。
 *
 * @param {string[]} words
 * @returns {Map<string, number>}
 */
function countWords(words) {
  // ここに実装してください。
  const map = new Map();
  for(const word of words){
    const count = map.get(word) ?? 0;
    map.set(word, count + 1);
  }
  return map;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
