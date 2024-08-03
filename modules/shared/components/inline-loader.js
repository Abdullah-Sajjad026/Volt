// @ts-check

import Box from "@mui/material/Box";
import { twMerge } from "tailwind-merge";
import Spinner from "./spinner";

/**
 * @param {React.ComponentPropsWithoutRef<'div'> & {size: number}} props
 */
export default function InlineLoader({ className = "", size = 48, ...rest }) {
  return (
    <Box
      {...rest}
      role="status"
      aria-busy="true"
      aria-label="Loading..."
      className={twMerge("h-40 grid place-items-center", className)}
    >
      <span className="sr-only">Loading...</span>
      <Spinner size={size} color="var(--color-blue-500)" />
    </Box>
  );
}
