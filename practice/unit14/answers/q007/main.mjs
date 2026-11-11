// createTaskSummaryだけを名前付きimportしてください。
import { createTaskSummary } from "./task-service.mjs";

const tasks = [
  { id: 1, title: "HTML", completed: true },
  { id: 2, title: "CSS", completed: false },
  { id: 3, title: "JavaScript", completed: true },
];

// createTaskSummaryを呼び出し、戻り値を表示してください。
const summary = createTaskSummary(tasks);
console.log(summary);

// 期待する出力:
// 完了: 2/3件 (67%)

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
