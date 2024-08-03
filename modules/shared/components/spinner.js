import CircularProgress from "@mui/material/CircularProgress";

/**
 * @param {Omit<import("@mui/material").CircularProgressProps, 'color'> & { color?: string }} props
 */
export default function Spinner({
  sx = {},
  size = 24,
  color = "white",
  ...props
}) {
  return (
    <CircularProgress
      {...props}
      size={size}
      sx={{ ...sx, color: `${color} !important` }}
    />
  );
}
