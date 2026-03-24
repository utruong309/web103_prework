import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Creatorverse</h1>

        <nav className="buttons" aria-label="Main">
          <Link to="/creators" role="button">
            View all creators
          </Link>
          <Link to="/add" role="button">
            Add a creator
          </Link>
        </nav>
      </header>

      <div className="home-layout-outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
