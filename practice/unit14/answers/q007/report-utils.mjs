/**
 * 完了件数・全件数・完了率を表示用文字列にして返す。
 *
 * @param {number} completedCount
 * @param {number} totalCount
 * @returns {string}
 */
export default function createProgressReport(completedCount, totalCount) {
  // ここに実装してください。
  const completeRate = totalCount !== 0 ? Math.round(completedCount / totalCount * 100) : 0;
  return `完了: ${completedCount}/${totalCount}件 (${completeRate}%)`;
}

// createProgressReportをdefault exportしてください。

