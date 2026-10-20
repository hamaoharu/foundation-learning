/**
 * 有効なユーザーの名前を整形した文字列配列を返す。
 *
 * @param {{id: number, name: string, isActive: boolean}[]} users
 * @returns {string[]}
 */
function createActiveUserNames(users) {
  // ここに実装してください。
  return users.filter((user) => {
    return user.isActive;
  }).map((user) => {
    return user.name.trim().toUpperCase();
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
