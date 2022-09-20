import React from "react";

import TodoInput from "./TodoInput";
import TodoPrivateList from "./TodoList";

const TodoPrivateWrapper = () => {
  return (
    <div className="todoWrapper">
      <div className="sectionHeader">GraphQL Todo List</div>
      <TodoInput />
      <TodoPrivateList />
    </div>
  );
};

export default TodoPrivateWrapper;
