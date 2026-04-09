import { Link, Routes, Route } from "react-router-dom";
import LocalUserList from "./LocalUserList";
import UserList from "./UserList";
import FakePostList from "./FakePostList";

function Dashboard() {
  return (
    <div>
      <h1>News Portal Dashboard</h1>

      <Link to="/local-users">Local Users</Link> |{" "}
      <Link to="/users-api">Users API</Link> |{" "}
      <Link to="/fake-posts">Fake API Posts</Link>

      <Routes>
        <Route path="/local-users" element={<LocalUserList />} />
        <Route path="/users-api" element={<UserList />} />
        <Route path="/fake-posts" element={<FakePostList />} />
      </Routes>
    </div>
  );
}

export default Dashboard;