<<<<<<< HEAD
import HomePage from "@/templates/HomePage";

const Home = () => {
  // ========== Rendering ==========
  return <HomePage />;
=======
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
>>>>>>> bc3a421198fef7ffd0a7ebaea44c056980afb76f
};

export default Home;
