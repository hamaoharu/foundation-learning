class User {
  // ここに実装してください。
  constructor(name, role){
    this.name = name;
    this.role = role;
  }

  getIntroduction(){
    return `${this.name} (${this.role})`;
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
