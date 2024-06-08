import { RiMastodonLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

const Tasks = ({ data }) => {
  return (
    <div className="tasks">
      {data?.map((item) => (
        <div className="tasks__card" key={uuidv4()}>
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
