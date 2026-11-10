const course = {
  prefix: "Lesson",
  lessons: ["HTML", "CSS", "JavaScript"],
  getLessonLabels() {
    // ここに実装してください。
    return this.lessons.map((lesson) => {
      return `${this.prefix}: ${lesson}`;
    })
  },
};

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
