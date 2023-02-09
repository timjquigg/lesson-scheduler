import {
  Box,
  Button,
  Card,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useUsers from "../../hooks/useUsers";
import makeTitleCase from "../../helpers/makeTitleCase";
import { useState } from "react";
import Row from "./row";

export default function UserList(props) {
  // const [open, setOpen] = useState(false);
  const { users, updateUsers } = useUsers();

  const usersList = Object.keys(users).map((key, index) => {
    return <Row key={key} index={index} user={key} />;
  });

  return (
    <Card sx={{ m: 2 }}>
      <Typography variant="h4">Users</Typography>
      <TableContainer component={Box}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ width: "1em", m: 0, p: 0 }}
              ></TableCell>
              <TableCell align="center">User ID</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center" sx={{ m: 0, p: 0 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{usersList}</TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
