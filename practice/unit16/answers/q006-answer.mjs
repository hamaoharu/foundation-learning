function getUsers(shouldSucceed) {
  if (!shouldSucceed) {
    return Promise.reject(new Error("users unavailable"));
  }

  return Promise.resolve([
    { id: 1, name: "  Haru  ", active: true },
    { id: 2, name: "Aki", active: false },
    { id: 3, name: "  Sora", active: true },
  ]);
}

/**
 * 有効ユーザーの名前を整形し、配列で返すPromiseを返す。
 *
 * @param {boolean} shouldSucceed
 * @param {string[]} logs
 * @returns {Promise<string[]>}
 */
export function getActiveUserNames(shouldSucceed, logs) {
  // getUsersからPromise chainを組み立ててください。
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
