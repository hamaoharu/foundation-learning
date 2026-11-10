/**
 * 指定されたamountを加える関数を返す。
 *
 * @param {number} amount
 * @returns {(number: number) => number}
 */
function createAdder(amount) {
  // ここに実装してください。
  return function add(number){
    return number + amount;
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
