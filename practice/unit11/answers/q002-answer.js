/**
 * 選択済みIDの状態をSetで調べる。
 *
 * @param {number[]} selectedIds
 * @param {number} targetId
 * @returns {{ hasTarget: boolean, uniqueCount: number }}
 */
function analyzeSelection(selectedIds, targetId) {
  // ここに実装してください。
  const set = new Set(selectedIds);
  const hasTarget = set.has(targetId);
  const uniqueCount = set.size;
  return {
    hasTarget,
    uniqueCount,
  };
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
