/**
 * 対象ユーザーのskillsへ値を追加した新しいユーザー配列を返す。
 *
 * @param {{ id: number, name: string, profile: { city: string, skills: string[] } }[]} users
 * @param {number} targetId
 * @param {string} newSkill
 * @returns {{ id: number, name: string, profile: { city: string, skills: string[] } }[]}
 */
function addUserSkill(users, targetId, newSkill) {
  // ここに実装してください。
  return users.map((user) => {
    if(user.id === targetId){
      return {
        ...user,
        profile: {
          ...user.profile,
          skills: [...user.profile.skills, newSkill],
        },
      };
    }
    return user;
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
