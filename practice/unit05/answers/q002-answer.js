/**
 * 前後の空白を取り除いた結果が3文字以上の名前を返す。
 *
 * @param {string[]} names
 * @returns {string[]}
 */
function collectDisplayNames(names) {
  // ここに実装してください。
  const displayNames = [];

  for (const name of names){
    const normalizedName = name.trim();
    if(normalizedName.length >= 3){
      displayNames.push(normalizedName);
    }
  }

  return displayNames;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
