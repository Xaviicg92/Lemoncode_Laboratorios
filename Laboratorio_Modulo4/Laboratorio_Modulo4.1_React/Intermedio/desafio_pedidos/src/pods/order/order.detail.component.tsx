import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface Props {
  orderDetails: {
    id: number;
    description: string;
    state: boolean;
    price: number;
  }[];
  changePrice: (id: number, value: string) => void;
  onChecked: (id: number) => void;
}

export const OrderDetail = (props: Props) => {
  const { orderDetails, changePrice, onChecked } = props;

  const columns = [
    { headerName: "Description" },
    { headerName: "State" },
    { headerName: "Price" },
  ];

  const rows = orderDetails.map((item) => {
    const myRows = {
      id: item.id,
      description: item.description,
      state: item.state,
      price: item.price,
    };
    return myRows;
  });

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.headerName} align="center">
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.description}
                </TableCell>
                <TableCell align="center">
                  <input
                    type="checkbox"
                    checked={row.state}
                    onChange={() => onChecked(row.id)}
                  />
                </TableCell>
                <TableCell align="center">
                  <input
                    type="number"
                    value={row.price}
                    onChange={(e) => changePrice(row.id, e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
