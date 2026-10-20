/**
 * アクティブユーザーのIDを新しい配列で返す。
 *
 * @param {Array<{id: number, name: string, isActive: boolean}>} users
 * @returns {number[]}
 */
function getActiveUserIds(users) {
  // ここに実装してください。
  let activeUsers = [];
  for(let i=0;i<users.length;i++){
    if(users[i].isActive){
      activeUsers.push(users[i].id);
    }
  }
  return activeUsers;
}

// 自己申告:
// 確信がない箇所:
// 実行して発見・修正した問題:

