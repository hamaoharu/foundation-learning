/**
 * profile.cityを変更した新しいユーザーオブジェクトを返す。
 *
 * @param {{ id: number, name: string, profile: { city: string, age: number } }} user
 * @param {string} newCity
 * @returns {{ id: number, name: string, profile: { city: string, age: number } }}
 */
function updateUserCity(user, newCity) {
  // ここに実装してください。
  return {
    ...user,
    profile: {
      ...user.profile,
      city: newCity,
    }
  };
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
