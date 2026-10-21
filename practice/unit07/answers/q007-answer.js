/**
 * 商品一覧について、対象商品・在庫切れの有無・全件公開状態を返す。
 *
 * @param {{id: number, name: string, stock: number, isPublished: boolean}[]} products
 * @param {number} targetId
 * @returns {{
 *   targetProduct: {id: number, name: string, stock: number, isPublished: boolean} | null,
 *   hasOutOfStock: boolean,
 *   allPublished: boolean
 * }}
 */
function inspectProducts(products, targetId) {
  // ここに実装してください。
  const targetProduct = products.find((product) => {
    return product.id === targetId;
  }) ?? null;
  const hasOutOfStock = products.some((product) => {
    return product.stock === 0;
  });
  const allPublished = products.every((product) => {
    return product.isPublished === true;
  });

  return {
    targetProduct,
    hasOutOfStock,
    allPublished,
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
