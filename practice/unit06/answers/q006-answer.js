/**
 * 空白を無視した文字数が3以上の名前を、元の文字列のまま残す。
 *
 * @param {string[]} names
 * @returns {string[]}
 */
function collectValidNames(names) {
  // ここに実装してください。
  return names.filter((name) => {
    return name.trim().length >= 3
  })
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
