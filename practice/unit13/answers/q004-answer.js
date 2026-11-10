const user = {
  name: "Haru",
  role: "frontend",
  getIntroduction() {
    return `${this.name} (${this.role})`;
  },
};

const boundIntroduction = user.getIntroduction.bind(user);

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
