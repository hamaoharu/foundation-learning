function getScore(shouldSucceed) {
  if (shouldSucceed) {
    return Promise.resolve(80);
  }

  return Promise.reject(new Error("score unavailable"));
}

/**
 * スコアを取得し、表示用文字列を成功値に持つPromiseを返す。
 *
 * @param {boolean} shouldSucceed
 * @param {string[]} logs
 * @returns {Promise<string>}
 */
export async function formatScore(shouldSucceed, logs) {
  // async/awaitとtry/catch/finallyで実装してください。
  try {
    const score = await getScore(shouldSucceed);
    logs.push("success");
    return `Score: ${score}`;
  }catch (error){
    logs.push(`error: ${error.message}`);
    return "Score: unavailable";
  }finally {
    logs.push("end");
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
