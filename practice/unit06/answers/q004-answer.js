/**
 * 60点以上の点数だけを残した新しい配列を返す。
 *
 * @param {number[]} scores
 * @returns {number[]}
 */
function collectPassingScores(scores) {
  // ここに実装してください。
  return scores.filter((score) => {
    return score >= 60
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
