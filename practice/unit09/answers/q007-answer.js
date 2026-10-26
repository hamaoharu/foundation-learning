/**
 * 投票内容ごとの件数と表示文字列を返す。
 *
 * @param {string[]} votes
 * @returns {{counts: Record<string, number>, labels: string[]}}
 */
function createVoteSummary(votes) {
  // ここに実装してください。
  const counts = votes.reduce((counts, vote) => {
    counts[vote] = (counts[vote] ?? 0) + 1;
    return counts;
  }, {});

  const labels = Object.entries(counts).map(([key,value]) => {
    return `${key}: ${value}`;
  })

  return {
    counts,
    labels,
  };
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
