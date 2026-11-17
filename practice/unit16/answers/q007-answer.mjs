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
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
