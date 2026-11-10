/**
 * min以上max以下かを判定する関数を返す。
 *
 * @param {number} min
 * @param {number} max
 * @returns {(value: number) => boolean}
 */
function createRangeChecker(min, max) {
  // ここに実装してください。
  return function checker(num){
    return min <= num && num <= max;
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
