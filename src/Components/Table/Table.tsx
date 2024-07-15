import React, { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { time } from "console";
import axios from "axios";

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Table() {
  const [data, setData] = useState<Props[]>([]);
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(
    //         "https://jsonplaceholder.typicode.com/posts"
    //       );
    //       setData(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }

    //     fetchData();
    //   };
    // }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "userId",
        header: "UserID",
      },
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "body",
        header: "Body",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table} />;
}
