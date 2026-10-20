/**
 * 気温の合計・最小値・0以下の個数を返す。
 *
 * @param {number[]} temperatures
 * @returns {{total: number, min: number | null, freezingCount: number}}
 */
function analyzeTemperatures(temperatures) {
  // ここに実装してください。
  let total = 0;
  let min = null;
  let freezingCount = 0;

  for (const temperature of temperatures){
    total += temperature;
    if(min === null || min > temperature){
      min = temperature;
    }
    if(temperature <= 0){
      freezingCount++;
    }
  }

  return {total, min, freezingCount};
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
