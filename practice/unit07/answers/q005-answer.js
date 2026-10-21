/**
 * roleが許可された権限名に含まれていればtrueを返す。
 *
 * @param {string[]} allowedRoles
 * @param {string} role
 * @returns {boolean}
 */
function isAllowedRole(allowedRoles, role) {
  // ここに実装してください。
  return allowedRoles.includes(role);
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
