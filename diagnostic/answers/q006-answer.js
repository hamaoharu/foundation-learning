/**
 * ユーザー情報を整形した新しいオブジェクトを返す。
 *
 * @param {{
 *   id: number,
 *   firstName: string,
 *   lastName: string,
 *   email: string
 * }} user
 * @returns {{id: number, displayName: string, email: string}}
 */
function formatUser(user) {
  // ここに実装してください。
  id = user.id;
  displayName = user.firstName.split() + " " + user.lastName.split()
  email = user.email.split().toLowerCase();
}

// 自己申告:
// 確信がない箇所:
// 実行して発見・修正した問題:

