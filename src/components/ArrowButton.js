import { Stack, Box, Typography } from "@mui/material";

function ArrowButton({ title, color, sx }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        width: 200,
        height: 48,
        background: `url(/${color}_arrow.png)`,
        backgroundSize: "100% 100%",
        ...sx,
      }}
    >
      <Typography variant="festivo" fontSize={18}>
        {title}
      </Typography>
    </Stack>
  );
}

export default ArrowButton;
