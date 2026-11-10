/**
 * predicateがtrueを返す要素だけを集めた新しい配列を返す。
 *
 * @param {unknown[]} values
 * @param {(value: unknown) => boolean} predicate
 * @returns {unknown[]}
 */
function selectValues(values, predicate) {
  // ここに実装してください。
  const newValues = [];
  for(const value of values){
    if(predicate(value)){
      newValues.push(value);
    }
  }
  return newValues;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
