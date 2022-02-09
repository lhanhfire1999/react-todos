import { useStore } from "./Store";
import { Footer, Header, TodoList } from "./Component";

function App() {
  const [state] = useStore();
  return (
    <section class="todoapp">
      <Header />
      {state.todos.length > 0 && (
        <>
          <TodoList />
          <Footer />
        </>
      )}
    </section>
  );
}

export default App;
