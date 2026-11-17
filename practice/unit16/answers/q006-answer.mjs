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
  return getUsers(shouldSucceed).then((users) => {
    const activeUsers = users.filter((user) => {
      return user.active;
    })
    logs.push("filtered");
    return activeUsers;
  }).then((activeUsers) => {
    const activeUserNames = activeUsers.map((user) => {
      return user.name.trim();
    })
    logs.push("mapped");
    return activeUserNames;
  }).catch((error) => {
    logs.push(`error: ${error.message}`);
    return [];
  }).finally(() => {
    logs.push("end");
  })
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
