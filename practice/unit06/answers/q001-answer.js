/**
 * 商品名を空白削除・小文字化した新しい配列を返す。
 *
 * @param {string[]} names
 * @returns {string[]}
 */
function normalizeProductNames(names) {
  // ここに実装してください。
  return names.map((name) => {
    return name.trim().toLowerCase();
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
