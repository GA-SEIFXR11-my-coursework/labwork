const TodoItem = ({ id, title, completed, onComplete, onDelete }) => {
  const statusClass = completed ? "done" : "pending";
  return (
    <div data-testid={`todo-${id}`} className={`todo-item ${statusClass}`}>
      <h3>
        <span>{completed ? "✅" : "⬜"}</span>
        {title}
      </h3>
      <button
        type="button"
        aria-label={`Complete todo item ${title}`}
        onClick={onComplete}
      >
        Done
      </button>
      <button
        type="button"
        aria-label={`Delete todo item ${title}`}
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
