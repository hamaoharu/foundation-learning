/**
 * 価格に10%の税を加えた数値を返す。
 *
 * @param {number} price
 * @returns {number}
 */
export function addTax(price) {
  // ここに実装してください。
  return price * 1.1;
}

/**
 * 数値を「○○円」という文字列にして返す。
 *
 * @param {number} price
 * @returns {string}
 */
export function formatYen(price) {
  // ここに実装してください。
  return `${price}円`;
}

