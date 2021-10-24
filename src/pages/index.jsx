import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div>COMP4462 Project Group 1</div>
      <p>
        <Link to={"/about"}>About</Link>
      </p>
      <p>
        <Link to={"/404"}>404</Link>
      </p>
    </>
  );
}
