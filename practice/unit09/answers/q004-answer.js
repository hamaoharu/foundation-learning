/**
 * nameとplanを別名の変数へ取り出して、新しいオブジェクトを返す。
 *
 * @param {{name: string, plan?: string}} user
 * @returns {{displayName: string, planName: string}}
 */
function createDisplayUser(user) {
  // ここに実装してください。
  const {name: displayName, plan: planName = "free"} = user;
  return {
    displayName,
    planName,
  };
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
