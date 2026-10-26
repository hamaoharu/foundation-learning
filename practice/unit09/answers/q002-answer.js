/**
 * fieldNameの中身をキーとする新しいオブジェクトを返す。
 *
 * @param {string} fieldName
 * @param {unknown} value
 * @returns {Record<string, unknown>}
 */
function createFieldObject(fieldName, value) {
  // ここに実装してください。
  return {
    [fieldName]: value,
  };
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
