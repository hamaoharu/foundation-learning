/**
 * すべての注文金額の合計を返す。
 *
 * @param {{id: number, amount: number}[]} orders
 * @returns {number}
 */
function calculateTotalAmount(orders) {
  // ここに実装してください。
  return orders.reduce((sum, order) => {
    return sum + order.amount;
  }, 0);
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
