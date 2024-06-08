"use client";

import { useEffect, useState } from "react";

import Tasks from "@/modules/Tasks";

const HomePage = () => {
  // ========== State ==========
  const [todos, setTodos] = useState([]);

  // ========== Effect ==========
  useEffect(() => {
    fetchData();
  }, []);
  // ========== Function ==========
  const fetchData = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();

    if (data) setTodos(data.data);
  };

  // ========== Rendering ==========
  return (
    <div className="home-page">
      <div className="home-page--todo">
        <p>Todo</p>
        <Tasks data={todos.todo} />
      </div>
      <div className="home-page--inProgress">
        <p>In Progress</p>
        <Tasks data={todos.inProgress} />
      </div>
      <div className="home-page--review">
        <p>Review</p>
        <Tasks data={todos.review} />
      </div>
      <div className="home-page--done">
        <p>Done</p>
        <Tasks data={todos.done} />
      </div>
    </div>
  );
};

export default HomePage;
