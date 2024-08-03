import { Box, TextField } from "@mui/material";
import { inputBorder, inputPadding } from "constants/theme/form";

/**
 * @param { import('@mui/material').TextFieldProps & { currency: string } } props
 */
export function CurrencyTextField({ currency, ...props }) {
  return (
    <TextField
      {...props}
      type="number"
      placeholder="0.00"
      InputProps={{
        sx: { paddingY: "0 !important", paddingLeft: "0 !important" },
        startAdornment: (
          <Box
            padding={inputPadding}
            borderRight={inputBorder}
            marginRight={inputPadding}
          >
            {currency}
          </Box>
        ),
      }}
    />
  );
}
