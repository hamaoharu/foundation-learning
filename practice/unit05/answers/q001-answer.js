/**
 * 数値配列の合計・最大値・正数の個数を返す。
 *
 * @param {number[]} numbers
 * @returns {{total: number, max: number | null, positiveCount: number}}
 */
function summarizeNumbers(numbers) {
  // ここに実装してください。
  let total = 0;
  let max = null;
  let positiveCount = 0;

  for (const number of numbers){
    total += number;
    if(max === null || max < number){
      max = number;
    }
    if(number > 0){
      positiveCount++;
    }
  }

  return {
    total,
    max,
    positiveCount
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

