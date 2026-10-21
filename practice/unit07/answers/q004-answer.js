/**
 * すべてのユーザーが認証済みならtrueを返す。
 *
 * @param {{id: number, isVerified: boolean}[]} users
 * @returns {boolean}
 */
function areAllUsersVerified(users) {
  // ここに実装してください。
  return users.every((user) => {
    return user.isVerified === true;
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
