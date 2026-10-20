// 入力される値:在庫数
// 戻す値:文字列
// 条件と、それぞれで返す値: 1以上なら在庫あり0なら在庫なしと出力

/**
 * 在庫数に応じたメッセージを返す。
 *
 * @param {number} stock
 * @returns {string}
 */
function getStockMessage(stock) {
  // ここに実装してください。
  if(stock>0){
    return "在庫あり"
  }else {
    return "在庫なし"
  }
}

// 自己申告:
// 資料を参照したか:なし
// 確信がない箇所:
// 実行して修正した箇所:

