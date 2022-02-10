import React from "react";
import { useStore } from "./Store";
import { Footer, Header, TodoList } from "./Component";

function App() {
  const [state, dispatch] = useStore();

  return (
    <section className="todoapp">
      <Header dispatch={dispatch} />
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
