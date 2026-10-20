/**
 * 記事情報を表示用に整形する。
 *
 * @param {string} title
 * @param {string} body
 * @param {string} keyword
 * @returns {{slug: string, preview: string, containsKeyword: boolean}}
 */
function createArticleSummary(title, body, keyword) {
  // ここに実装してください。
  const slug = title.trim().toLowerCase().replaceAll(" ","-");
  const trimedBody = body.trim();
  const preview = trimedBody.length <= 20 ? trimedBody : `${trimedBody.slice(0,20)}...`;
  const containsKeyword = trimedBody.toLowerCase().includes(keyword.toLowerCase());

  return {
    slug,
    preview,
    containsKeyword,
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

