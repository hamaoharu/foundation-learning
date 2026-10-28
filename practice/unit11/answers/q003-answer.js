/**
 * Mapを使って対象IDのユーザー名を返す。
 * 対象が存在しない場合はnullを返す。
 *
 * @param {{ id: number, name: string }[]} users
 * @param {number} targetId
 * @returns {string | null}
 */
function getUserNameById(users, targetId) {
  // ここに実装してください。
  const map = new Map();
  for(const user of users){
    map.set(user.id, user.name);
  }
  return map.get(targetId) ?? null;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
