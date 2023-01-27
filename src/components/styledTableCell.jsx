import { TableCell } from "@mui/material";

export default function StyledTableCell(props) {
  return (
    <TableCell
      variant={props.variant}
      align="center"
      sx={{ width: 1 / 7, maxWidth: 1 / 7, border: 1, borderRadius: "16px" }}
    >
      {props.children}
    </TableCell>
  );
}
