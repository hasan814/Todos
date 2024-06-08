import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { RiMastodonLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

const Tasks = ({ data, next, back, fetchTodos }) => {
  return (
    <div className="tasks">
      {data?.map((item) => (
        <div className="tasks__card" key={uuidv4()}>
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4>{item.title}</h4>
          <div>
            {back ? (
              <button className="button-back">
                <BiLeftArrow />
                Back
              </button>
            ) : null}
            {next ? (
              <button className="button-next">
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
