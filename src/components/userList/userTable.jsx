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

export default function UserTable(props) {
  const { users, updateUsers } = useUsers();
  const usersList = Object.keys(users).map((key, index) => {
    return users[key][props.filter] ? (
      <Row key={key} index={index} user={key} />
    ) : (
      <></>
    );
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
