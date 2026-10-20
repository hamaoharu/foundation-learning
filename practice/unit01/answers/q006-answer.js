/**
 * 注文条件に応じた送料を返す。
 *
 * @param {number} amount
 * @param {boolean} isPremium
 * @returns {number}
 */
function calculateShippingFee(amount, isPremium) {
  // ここに実装してください。
  if(isPremium){
    return 0;
  }else if(amount >= 5000){
    return 0;
  }else {
    return 500;
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

