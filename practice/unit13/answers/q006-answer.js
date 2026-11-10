class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  getIntroduction() {
    return `${this.name} (${this.role})`;
  }
}

class AdminUser extends User {
  // ここに実装してください。
  constructor(name, role, permissions) {
    super(name, role);
    this.permissions = permissions;
  }

  canManageUsers() {
    return this.permissions.includes("users:write");
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
