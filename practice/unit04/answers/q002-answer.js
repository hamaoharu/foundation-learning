/**
 * 入力文字列を整形し、アカウント情報を返す。
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} emailInput
 * @returns {{displayName: string, email: string, domain: string}}
 */
function createAccountInfo(firstName, lastName, emailInput) {
  // ここに実装してください。
  const displayName = `${firstName.trim()} ${lastName.trim()}`;
  const email = emailInput.trim().toLowerCase();
  const domain = email.split("@")[1];

  return {
    displayName,
    email,
    domain,
  };
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

