/**
 * ユーザー名と権限を表示用文字列にする。
 *
 * @param {{name: string, role?: string}} user
 * @returns {string}
 */
function createUserLabel(user) {
  // ここに実装してください。
  const {name, role = "guest"} = user;
  return `${name.trim()} (${role})`;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
