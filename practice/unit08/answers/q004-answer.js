/**
 * 数値を昇順に並べ替えた新しい配列を返す。
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
function sortNumbersAscending(numbers) {
  // ここに実装してください。
  return numbers.slice().sort((a,b) => {
    return a-b;
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
