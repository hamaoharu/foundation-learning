/**
 * JSON文字列を解析し、有効なユーザー名の配列を返す。
 *
 * @param {string} jsonText
 * @returns {string[]}
 */
export function parseActiveUserNames(jsonText) {
  // ここに実装してください。
  const parse = JSON.parse(jsonText);
  if(!Array.isArray(parse)){
    throw new TypeError("users must be an array");
  }
  return parse.filter((user) => {
    return user.active;
  }).map((user) => {
    return user.name.trim();
  })
}
