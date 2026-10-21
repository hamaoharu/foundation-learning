/**
 * 最初の未完了タスクの添字を返す。なければnullを返す。
 *
 * @param {{id: number, isDone: boolean}[]} tasks
 * @returns {number | null}
 */
function findFirstIncompleteIndex(tasks) {
  // ここに実装してください。
  const index = tasks.findIndex((task) => {
    return task.isDone === false;
  });
  return index === -1 ? null : index;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
