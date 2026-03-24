import { useRoutes, Navigate } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";

function App() {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { index: true, element: <Navigate to="/creators" replace /> },
        { path: "creators", element: <ShowCreators /> },
        { path: "add", element: <AddCreator /> }
      ]
    },
    { path: "/creator/:id", element: <ViewCreator /> },
    { path: "/edit/:id", element: <EditCreator /> }
  ]);
}

export default App;