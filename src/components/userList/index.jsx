import {
  Box,
  Card,
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

export default function UserList(props) {
  const { users, updateUsers } = useUsers();

  const usersList = Object.keys(users).map((key, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{users[key].id}</TableCell>
        <TableCell>{makeTitleCase(users[key].first_name)}</TableCell>
        <TableCell>{makeTitleCase(users[key].last_name)}</TableCell>
        <TableCell>edit</TableCell>
      </TableRow>
    );
  });

  return (
    <Card sx={{ m: 2 }}>
      <Typography variant="h4">Users</Typography>
      <TableContainer component={Box}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{usersList}</TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
