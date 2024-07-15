import React from "react";
import "./Posts.css";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import Table from "../Table/Table";

const data = [
  {
    name: "John", // key "name" matches `accessorKey` in ColumnDef down below
    age: 30, // key "age" matches `accessorKey` in ColumnDef down below
  },
  {
    name: "Sara",
    age: 25,
  },
];

function Posts() {
  return (
    <><div className="Posts">Posts</div><Table /></>
  );
}

export default Posts;
