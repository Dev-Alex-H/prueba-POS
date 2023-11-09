// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getData } from "../../services/app.service";
  import CustomizedTables from "../../../components/table/table";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData("http://localhost:8000/api/product/").then((data) => {
      setProducts(data);
    });
  }, []);

  return <CustomizedTables rows={products} />;
}
