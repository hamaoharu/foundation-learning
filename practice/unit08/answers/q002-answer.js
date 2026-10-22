/**
 * ステータスごとの登場件数を返す。
 *
 * @param {string[]} statuses
 * @returns {Record<string, number>}
 */
function countStatuses(statuses) {
  // ここに実装してください。
  return statuses.reduce((counts, status) => {
    const currentCount = counts[status] ?? 0;
    counts[status] = currentCount + 1;

    return counts;
  }, {});
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
