/**
 * JSON文字列を解析し、処理経過をlogsへ記録する。
 *
 * @param {string} jsonText
 * @param {string[]} logs
 * @returns {unknown | null}
 */
export function parseJsonWithLog(jsonText, logs) {
  // try/catch/finallyを使って実装してください。
  try {
    logs.push("start");
    const parse = JSON.parse(jsonText);
    logs.push("success");
    return parse;
  }catch (error){
    logs.push(`error: ${error.name}`);
    return null;
  }finally {
    logs.push("end");
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
