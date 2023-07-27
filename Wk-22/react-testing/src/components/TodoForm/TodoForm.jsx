const TodoForm = ({ onSubmit }) => {
  return (
    <form data-testid="todo-form" onSubmit={onSubmit}>
      <input type="text" name="title" role="textbox" placeholder="Todo Title" />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
