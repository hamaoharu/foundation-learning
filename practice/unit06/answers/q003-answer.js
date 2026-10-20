/**
 * タスク名を1から始まる順番付き文字列へ変換する。
 *
 * @param {string[]} tasks
 * @returns {string[]}
 */
function createNumberedTasks(tasks) {
  // ここに実装してください。
  return tasks.map((task,index) => {
    return `${index + 1}. ${task.trim()}`
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
