// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getData } from "../../services/app.service";
import CustomizedTables from "../../../components/table/table";

export default function Client() {
  const [clients, setclients] = useState([]);

  useEffect(() => {
    getData("http://localhost:8000/api/client/").then((data) => {
      setclients(data);
    });
  }, []);
  return <CustomizedTables rows={clients} />;
}
