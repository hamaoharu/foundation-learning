/**
 * 支払い済み注文だけを新しい配列で返す。
 *
 * @param {Array<{ id: number, status: string, price: number }>} orders
 * @returns {Array<{ id: number, status: string, price: number }>}
 */
export function getPaidOrders(orders) {
  // ここに実装してください。
  return orders.filter((order) => {
    return order.status === "paid";
  });
}

/**
 * 注文の合計金額を返す。空配列の場合は0を返す。
 *
 * @param {Array<{ price: number }>} orders
 * @returns {number}
 */
export function calculateTotal(orders) {
  // ここに実装してください。
  let price = 0;
  for(const order of orders){
    price += order.price;
  }
  return price;
}

