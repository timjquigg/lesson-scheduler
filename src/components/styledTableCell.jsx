import { TableCell } from "@mui/material";

export default function StyledTableCell(props) {
  return (
    <TableCell
      variant={props.variant}
      align="center"
      sx={{
        width: "5rem",
        height: "5rem",
        border: 1,
        borderRadius: "16px",
        p: 0,
      }}
    >
      {props.children}
    </TableCell>
  );
}
