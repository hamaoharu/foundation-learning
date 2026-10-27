/**
 * ユーザーの名前を変更した新しいオブジェクトを返す。
 *
 * @param {{ id: number, name: string, role: string }} user
 * @param {string} newName
 * @returns {{ id: number, name: string, role: string }}
 */
function renameUser(user, newName) {
  // ここに実装してください。
  return {
    ...user,
    name: newName,
  };
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
