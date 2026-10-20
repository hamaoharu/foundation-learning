/**
 * ユーザーを表示用オブジェクトへ変換する。
 *
 * @param {{id: number, name: string}[]} users
 * @returns {{id: number, label: string}[]}
 */
function createUserLabels(users) {
  // ここに実装してください。
  return users.map((user) => {
    return {
      id: user.id,
      label: user.name.trim().toUpperCase(),
    };
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
