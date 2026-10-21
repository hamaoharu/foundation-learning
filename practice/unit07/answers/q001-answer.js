/**
 * IDが一致する最初のユーザーを返す。見つからなければnullを返す。
 *
 * @param {{id: number, name: string}[]} users
 * @param {number} targetId
 * @returns {{id: number, name: string} | null}
 */
function findUserById(users, targetId) {
  // ここに実装してください。
  return users.find((user) => {
    return user.id === targetId;
  }) ?? null;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
