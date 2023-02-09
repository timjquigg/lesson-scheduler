import { useState } from "react";
import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Table,
  TableHead,
  TableBody,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  Edit,
  CheckBoxOutlined,
  CheckBoxOutlineBlankOutlined,
} from "@mui/icons-material";
import makeTitleCase from "../../helpers/makeTitleCase";
import useUsers from "../../hooks/useUsers";

export default function Row(props) {
  const { user, index } = props;
  const [open, setOpen] = useState(false);
  const { users } = useUsers();

  const handleEditClick = (event) => {
    event.stopPropagation();
  };

  if (users.length > 0) {
    return (
      <>
        <TableRow key={index}>
          <TableCell align="center" sx={{ width: "1em", m: 0, p: 0 }}>
            <Tooltip title={open ? "Hide" : "Show"}>
              <IconButton size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </Tooltip>
          </TableCell>
          <TableCell align="center">{users[user].id}</TableCell>
          <TableCell align="center">
            {makeTitleCase(users[user].first_name)}
          </TableCell>
          <TableCell align="center">
            {makeTitleCase(users[user].last_name)}
          </TableCell>
          <TableCell align="center" sx={{ m: 0, p: 0 }}>
            <Tooltip title="Edit">
              <IconButton
                color="primary"
                onClick={(event) => handleEditClick(event)}
              >
                <Edit />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center" colSpan={5}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ m: 1 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Student</TableCell>
                      <TableCell align="center">Teacher</TableCell>
                      <TableCell align="center">Admin</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        {users[user].student ? (
                          <CheckBoxOutlined />
                        ) : (
                          <CheckBoxOutlineBlankOutlined />
                        )}
                      </TableCell>
                      <TableCell align="center">
                        {users[user].teacher ? (
                          <CheckBoxOutlined />
                        ) : (
                          <CheckBoxOutlineBlankOutlined />
                        )}
                      </TableCell>
                      <TableCell align="center">
                        {users[user].admin ? (
                          <CheckBoxOutlined />
                        ) : (
                          <CheckBoxOutlineBlankOutlined />
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }
  return <></>;
}
