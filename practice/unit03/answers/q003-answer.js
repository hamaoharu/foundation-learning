/**
 * ユーザーから表示用のプロフィール概要を作る。
 *
 * @param {{
 *   profile?: null | {
 *     name?: string | null,
 *     score?: number | null,
 *     bio?: string | null
 *   }
 * }} user
 * @returns {{name: string, score: number, bio: string}}
 */
function createProfileSummary(user) {
  // ここに実装してください。
  return {
    name: user.profile?.name ?? "ゲスト",
    score: user.profile?.score ?? 0,
    bio: user.profile?.bio ?? "未設定"
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

