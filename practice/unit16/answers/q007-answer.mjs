function getOrders(mode) {
  if (mode === "failure") {
    return Promise.reject(new Error("orders unavailable"));
  }

  if (mode === "invalid") {
    return Promise.resolve({ message: "invalid data" });
  }

  return Promise.resolve([
    { id: 1, status: "paid", price: 1200 },
    { id: 2, status: "pending", price: 800 },
    { id: 3, status: "paid", price: 2300 },
  ]);
}

/**
 * 支払い済み注文を検証・抽出・集計するPromiseを返す。
 *
 * @param {"success" | "invalid" | "failure"} mode
 * @param {string[]} logs
 * @returns {Promise<
 *   | { count: number, total: number }
 *   | { count: number, total: number, error: string }
 * >}
 */
export function summarizePaidOrders(mode, logs) {
  // getOrdersからPromise chainを組み立ててください。
  return getOrders(mode).then((value) => {
    if(Array.isArray(value)){
      logs.push("validated");
      return value;
    }
    throw new TypeError("orders must be an array");
  }).then((orders) => {
    const paidOrders = orders.filter((order) => {
      return order.status === "paid";
    })
    logs.push("filtered");
    return paidOrders;
  }).then((paidOrders) => {
    const total = paidOrders.reduce((total, order) => {
      return total + order.price;
    }, 0)
    logs.push("summarized");
    return {
      count: paidOrders.length,
      total,
    }
  }).catch((error) => {
    logs.push("error");
    return {
      count: 0,
      total: 0,
      error: `${error.name}: ${error.message}`,
    };
  }).finally(() => {
    logs.push("end");
  })
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
