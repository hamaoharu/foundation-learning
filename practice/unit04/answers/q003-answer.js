/**
 * 連絡先を表示用に整形する。
 *
 * @param {{name: string, email: string, note?: string | null}} contact
 * @returns {{name: string, email: string, username: string, note: string}}
 */
function createContactSummary(contact) {
  // ここに実装してください。
  const name = contact.name.trim();
  const email = contact.email.trim().toLowerCase();
  const username = email.split("@")[0];
  const note = contact.note?.trim() || "メモなし";

  return {
    name,
    email,
    username,
    note,
  }
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:

