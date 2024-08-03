// @ts-check

import { MenuItem } from "@mui/material";
import { SelectWithPlaceholder } from "modules/shared/components";

/**
 * @template T
 * @param { Partial<React.ComponentProps<typeof SelectWithPlaceholder>> & {
 * 	label?: string;
 * 	filter: import('@/modules/shared').Filter<T>;
 * } } props
 */
export function SelectFilter({ filter, label, ...props }) {
  return (
    <SelectWithPlaceholder
      placeholder={label}
      value={filter.value}
      onChange={(e) => filter.setValue(e.target.value)}
      {...props}
    >
      {filter.options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SelectWithPlaceholder>
  );
}
