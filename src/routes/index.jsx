import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import PostIndex from "../views/posts/Index";
import PostCreate from "../views/posts/Create";
import PostEdit from "../views/posts/Edit";

function RoutesIndex() {
  return (
    <Routes>
      {/* Route "/" */}
      <Route path="/" element={<Home />} />

      {/* Route "/posts/index" */}
      <Route path="/posts" element={<PostIndex />} />

      {/* Route "/posts/create" */}
      <Route path="/posts/create" element={<PostCreate />} />

      {/* Route "/posts/edit" */}
      <Route path="/posts/edit" element={<PostEdit />} />
    </Routes>
  );
}

export default RoutesIndex;
