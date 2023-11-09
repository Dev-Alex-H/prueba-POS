// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getData } from "../../services/app.service";
import CustomizedTables from "../../../components/table/table";

export default function Cotization() {
  const [cotizations, setCotizations] = useState([]);

  useEffect(() => {
    getData("http://localhost:8000/api/cotization/").then((data) => {
      setCotizations(data);
    });
  }, []);
  return <CustomizedTables rows={cotizations} />;
}
