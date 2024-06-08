"use client";

import { useEffect, useState } from "react";

import HomePage from "@/templates/HomePage";

const Home = () => {
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
  return <HomePage data={todos} />;
};

export default Home;
