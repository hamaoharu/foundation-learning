/**
 * 注文をstatusごとの配列へグループ化する。
 *
 * @param {{id: number, status: string}[]} orders
 * @returns {Record<string, {id: number, status: string}[]>}
 */
function groupOrdersByStatus(orders) {
  return orders.reduce((groups, order) => {
    const status = order.status;

    if (groups[status] === undefined) {
      groups[status] = [];
    }

    groups[status].push(order);

    return groups;
  }, {});
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
