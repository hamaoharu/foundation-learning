/**
 * メールアドレスを整形して返す。
 * 不正な入力では例外をthrowする。
 *
 * @param {unknown} email
 * @returns {string}
 */
export function normalizeEmail(email) {
  // ここに実装してください。
  if(typeof email !== "string"){
    throw new TypeError("email must be a string");
  }
  if(email.trim() === ""){
    throw new Error("email is required");
  }

  return email.trim().toLowerCase();
}

// 自己申告:
// 資料を参照したか: あり
// 確信がない箇所:
// 実行して修正した箇所:
