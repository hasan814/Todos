"use client";

import { AiOutlineFileSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { BsAlignStart } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdDoneAll } from "react-icons/md";

import RadioBtn from "@/elements/RadioBtn";
import Loader from "@/elements/Loader";

const AddTodoPage = () => {
  // =========== Router ==========
  const router = useRouter();

  // =========== Session ==========
  const session = useSession();

  // =========== Effect ==========
  useEffect(() => {
    if (session.status === "unauthenticated") router.push("/signin");
  }, [router, session.status]);

  // =========== State ==========
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  const [loader, setLoader] = useState("");

  // =========== Function ==========
  const addHandler = async () => {
    setLoader(true);
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title, status }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setLoader(false);
    if (data.message === "Todo created!")
      toast.success("Todo Add"), setTitle(""), setStatus("todo");
  };

  // =========== Rendering ==========
  if (session.status === "unauthenticated") return null;

  return (
    <div className="add-form">
      <Toaster />
      <h2>
        <GrAddCircle />
        Add New Todo
      </h2>
      <div className="add-form__input">
        <div className="add-form__input--first">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="add-form__input--second">
          <RadioBtn
            status={status}
            setStatus={setStatus}
            value="todo"
            title="Todo"
          >
            <BsAlignStart />
          </RadioBtn>
          <RadioBtn
            status={status}
            setStatus={setStatus}
            value="inProgress"
            title="In Progress"
          >
            <FiSettings />
          </RadioBtn>
          <RadioBtn
            status={status}
            setStatus={setStatus}
            value="review"
            title="Review"
          >
            <AiOutlineFileSearch />
          </RadioBtn>
          <RadioBtn
            status={status}
            setStatus={setStatus}
            value="done"
            title="Done"
          >
            <MdDoneAll />
          </RadioBtn>
        </div>
        {loader ? <Loader /> : <button onClick={addHandler}>Add</button>}
      </div>
    </div>
  );
};

export default AddTodoPage;
