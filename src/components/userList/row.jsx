import { useState } from "react";
import { TableRow, TableCell, IconButton, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
import makeTitleCase from "../../helpers/makeTitleCase";
import useUsers from "../../hooks/useUsers";

export default function Row(props) {
  const { user, index } = props;
  const { users } = useUsers();

  const handleEditClick = (event) => {
    event.stopPropagation();
  };

  if (users.length > 0) {
    return (
      <>
        <TableRow key={index}>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            {users[user].id}
          </TableCell>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            {makeTitleCase(users[user].first_name)}
          </TableCell>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
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
      </>
    );
  }
  return <></>;
}
