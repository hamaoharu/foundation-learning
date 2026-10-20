/**
 * 会員なら割引後、非会員なら元の価格を返す。
 *
 * @param {number} price
 * @param {number} discountRate
 * @param {boolean} isMember
 * @returns {number}
 */
function calculateMemberPrice(price, discountRate, isMember) {
  // ここに実装してください。
  let finalPrice = price;
  if(isMember){
    finalPrice = price * (1-discountRate);
  }
  return finalPrice;
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

