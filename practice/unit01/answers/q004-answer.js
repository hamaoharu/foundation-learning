/**
 * 表示名を返す。
 *
 * @param {string} name
 * @param {boolean} isGuest
 * @returns {string}
 */
function getDisplayName(name, isGuest) {
  // ここに実装してください。
  if(isGuest){
    return "ゲスト";
  }else {
    return name;
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

