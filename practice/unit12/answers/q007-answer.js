/**
 * 各要素をtransformで変換した新しい配列を返す。
 *
 * @param {unknown[]} values
 * @param {(value: unknown) => unknown} transform
 * @returns {unknown[]}
 */
function transformValues(values, transform) {
  // ここに実装してください。
  const newValues = [];
  for(const value of values){
    newValues.push(transform(value));
  }
  return newValues;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
