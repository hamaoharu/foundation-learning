/**
 * アクティブユーザーの集計結果を返す。
 * 元の入力データは変更しないこと。
 *
 * @param {Array<{
 *   id: number,
 *   name: string,
 *   isActive: boolean,
 *   scores: number[]
 * }>} users
 * @returns {Array<{id: number, name: string, averageScore: number}>}
 */
function createActiveUserSummaries(users) {
  // ここに実装してください。
  const activeUsers = users.filter(isActive==true)
}

// 自己申告:
// 確信がない箇所:
// 調べたくなった構文・メソッド:
// 実行して発見・修正した問題:

