// 入力される値:
// 戻す値:
// 条件を確認する順番:

/**
 * 点数に応じた評価を返す。
 *
 * @param {number} score
 * @returns {"A" | "B" | "C"}
 */
function getGrade(score) {
  // ここに実装してください。
  if(score >= 80){
    return "A";
  }else if(score>=60){
    return "B";
  }else {
    return "C";
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

