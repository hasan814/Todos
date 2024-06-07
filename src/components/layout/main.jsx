import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";

import Link from "next/link";

const Main = ({ children }) => {
  return (
    <main className="container--main">
      <aside>
        <p>Welcome</p>
        <ul>
          <li>
            <VscListSelection />
            <Link href={"/"}>Todos</Link>
          </li>
          <li>
            <BiMessageSquareAdd />
            <Link href={"/add-todo"}>Add Todos</Link>
          </li>
          <li>
            <RxDashboard />
            <Link href={"/profile"}>Profiles</Link>
          </li>
        </ul>
      </aside>
      <section>{children}</section>
    </main>
  );
};

export default Main;
