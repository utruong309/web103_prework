import { Navigate } from "react-router-dom";

/** Form lives on Home (`#add-creator`). `/add` keeps bookmarks working. */
function AddCreator() {
  return <Navigate to="/#add-creator" replace />;
}

export default AddCreator;