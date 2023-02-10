import { TableRow, TableCell, IconButton, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
import makeTitleCase from "../../helpers/makeTitleCase";
import useUsers from "../../hooks/useUsers";
import UserDetailsForm from "../userDetailsForm";
import { useState } from "react";

export default function Row(props) {
  const { user, index } = props;
  const { users } = useUsers();
  const [open, setOpen] = useState(false);

  const handleEditClick = (event) => {
    setOpen(true);
  };

  if (users.length > 0) {
    return (
      <>
        <TableRow>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            {user.id}
          </TableCell>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            {makeTitleCase(user.first_name)}
          </TableCell>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            {makeTitleCase(user.last_name)}
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
            <UserDetailsForm open={open} setOpen={setOpen} user={user} />
          </TableCell>
        </TableRow>
      </>
    );
  }
  return <></>;
}
