import Header from './Header';

// other imports here
import TodosLogic from './TodosLogic';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  </div>
);
export default TodoApp;
