/**
 * 元配列を変更せず、末尾の要素と残りの配列を返す。
 *
 * @param {unknown[]} items
 * @returns {{taken: unknown | null, remaining: unknown[]}}
 */
function takeLastSafely(items) {
  // ここに実装してください。
  const copyItems = items.slice(0);
  let taken = null;
  if(copyItems.length > 0){
    taken = copyItems.pop();
  }

  return {
    taken,
    remaining: copyItems,
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
