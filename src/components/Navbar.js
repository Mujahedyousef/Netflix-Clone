import { Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {
  return (


    <>


      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/favList">Favorite List</Link>
        </ul>
      </nav>

    </>
  );
}