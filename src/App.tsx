import React from "react";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import Link from "@mui/joy/Link";
import "./App.css";
import Posts from "./Components/Posts/Posts";
import CreatePost from "./Components/CreatePost/CreatePost";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Dropdown>
        <MenuButton>Actions</MenuButton>
        <Menu>
          <MenuItem>
            <Link href={"/posts"}>Table Posts</Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/create"}>Create post</Link>
          </MenuItem>
          <MenuItem>Add item</MenuItem>
        </Menu>
      </Dropdown>
      <Routes>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
