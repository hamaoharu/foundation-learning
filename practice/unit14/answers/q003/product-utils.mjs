export const taxRate = 0.1;

/**
 * 商品名と税込価格を表示用文字列にして返す。
 *
 * @param {{ name: string, price: number }} product
 * @returns {string}
 */
export default function formatProduct(product) {
  // ここに実装してください。
  return `${product.name}: ${product.price * (1 + taxRate)}円`;
}

// formatProductをdefault exportしてください。

