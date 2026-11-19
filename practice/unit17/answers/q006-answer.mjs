function fetchUser() {
  return Promise.resolve({
    id: 1,
    name: "Haru",
  });
}

function fetchSettings(shouldSucceed) {
  if (!shouldSucceed) {
    return Promise.reject(new Error("settings unavailable"));
  }

  return Promise.resolve({
    theme: "dark",
  });
}

/**
 * ユーザーと設定を並行取得し、ダッシュボード用データを返す。
 *
 * @param {boolean} shouldSucceed
 * @param {string[]} logs
 * @returns {Promise<
 *   | { userName: string, theme: string }
 *   | { userName: string, theme: string, error: string }
 * >}
 */
export async function loadDashboard(shouldSucceed, logs) {
  // Promise.allとtry/catch/finallyを使って実装してください。
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
