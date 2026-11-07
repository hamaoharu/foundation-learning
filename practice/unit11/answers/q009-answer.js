/**
 * JSONで渡されたタグ配列を分析する。
 *
 * @param {string} json
 * @returns {{ uniqueTags: string[], counts: Map<string, number>, labels: string[] }}
 */
function analyzeTagsJson(json) {
  // ここに実装してください。
  const tags = JSON.parse(json);
  const set = new Set(tags);
  const uniqueTags = [...set];

  const counts = new Map();
  for(const tag of tags){
    const currentCount = counts.get(tag) ?? 0;
    counts.set(tag, currentCount + 1);
  }

  const labels = [];
  for(const [tag, count] of counts){
    labels.push(`${tag}: ${count}`);
  }

  return {
    uniqueTags,
    counts,
    labels,
  }

}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
