/**
 * 注文件数と合計金額を表示用文字列にして返す。
 *
 * @param {number} count
 * @param {number} total
 * @returns {string}
 */
export default function createOrderReport(count, total) {
  // ここに実装してください。
  return `支払い済み: ${count}件 / 合計: ${total}円`;
}

// createOrderReportをdefault exportしてください。
