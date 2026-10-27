/**
 * 指定されたTodoを完了状態にした新しい配列を返す。
 *
 * @param {{ id: number, title: string, completed: boolean }[]} todos
 * @param {number} targetId
 * @returns {{ id: number, title: string, completed: boolean }[]}
 */
function completeTodo(todos, targetId) {
  // ここに実装してください。
  return todos.map((todo) => {
    if(todo.id === targetId){
      return {
        ...todo,
        completed: true,
      };
    };
    return todo;
  });
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
