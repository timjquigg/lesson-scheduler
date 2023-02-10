import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Row from "./row";
import useUsers from "../../hooks/useUsers";
import { Fragment } from "react";

export default function UserTable(props) {
  const { users } = props;

  const usersList = users
    .sort((a, b) => {
      return a.id - b.id;
    })
    .map((user, index) => {
      return <Row key={user.id} index={index} user={user} />;
    });

  return (
    <TableContainer component={Box}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
              User ID
            </TableCell>
            <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
              First Name
            </TableCell>
            <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
              Last Name
            </TableCell>
            <TableCell align="center" sx={{ m: 0, p: 0 }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{usersList}</TableBody>
      </Table>
    </TableContainer>
  );
}
