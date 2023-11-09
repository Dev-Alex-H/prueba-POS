/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BallTriangle } from "react-loader-spinner";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ rows }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (rows.length !== 0) {
      setIsLoading(false);
    }
  }, [rows]);

  if (isLoading) {
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />;
  } else {
    let titles = Object.keys(rows[0]);
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {titles.map((el) => {
                return <StyledTableCell key={el}>{el}</StyledTableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.product_name}>
                {Object.values(row).map((val, i) => (
                  <StyledTableCell key={i} component="th" scope="row">
                    {typeof val === "boolean" && val === true
                      ? "Active"
                      : typeof val === "boolean" && val === false
                      ? "Inactive"
                      : typeof val === "object" && val !== null
                      ? val.join(", ")
                      : val}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
