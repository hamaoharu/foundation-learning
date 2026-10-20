/**
 * 文字列で受け取った年齢を判定し、メッセージを返す。
 *
 * @param {string} ageInput
 * @returns {string}
 */
function getAgeMessage(ageInput) {
  // ここに実装してください。
  const age = Number(ageInput);
  if(age>=18){
    return "成人"
  }else {
    return "未成年"
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

