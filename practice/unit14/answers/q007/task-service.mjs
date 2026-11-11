// getCompletedTasksを名前付きimportしてください。
// createProgressReportをdefault importしてください。
import { getCompletedTasks } from "./task-utils.mjs";
import createProgressReport from "./report-utils.mjs";

/**
 * タスク一覧から表示用の進捗レポートを作成して返す。
 *
 * @param {Array<{ id: number, title: string, completed: boolean }>} tasks
 * @returns {string}
 */
export function createTaskSummary(tasks) {
  // ここに実装してください。
  const completeTasks = getCompletedTasks(tasks);
  const completedCount = completeTasks.length;
  const totalCount = tasks.length;

  return createProgressReport(completedCount, totalCount);
}

