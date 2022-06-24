import { useRef, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem, Typography, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
// ----------------------------------------------------------------------

export default function MoreMenuButton() {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <IconButton ref={menuRef} onClick={handleOpen}>
          <MoreVertIcon />
        </IconButton>
      </>

      <Menu
        open={open}
        anchorEl={menuRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>
          <AddIcon />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Add
          </Typography>
        </MenuItem>
        <MenuItem>
          <ShareIcon />
          <Typography variant="body2" sx={{ ml: 2 }}>
            Share
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
