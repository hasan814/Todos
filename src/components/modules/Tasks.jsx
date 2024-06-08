import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { RiMastodonLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

const Tasks = ({ data, next, back, fetchTodos }) => {
  // ============ function =============
  const changeStatus = async (id, status) => {
    const response = await fetch("/api/todos", {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data.message === "success") fetchTodos();
  };

  // ============ Rendring =============
  return (
    <div className="tasks">
      {data?.map((item) => (
        <div className="tasks__card" key={uuidv4()}>
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4>{item.title}</h4>
          <div>
            {back ? (
              <button
                className="button-back"
                onClick={() => changeStatus(item._id, back)}
              >
                <BiLeftArrow />
                Back
              </button>
            ) : null}
            {next ? (
              <button
                className="button-next"
                onClick={() => changeStatus(item._id, next)}
              >
                <BiRightArrow />
                Next
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
