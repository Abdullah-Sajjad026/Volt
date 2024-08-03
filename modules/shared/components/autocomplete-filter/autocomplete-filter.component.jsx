// @ts-check

import { Autocomplete, Badge } from "@mui/material";

/**
 * @template T
 * @param { import("@mui/material").AutocompleteProps & {
 *  filter: import("modules/shared/shared.types").Filter<T>
 * } } props
 */
export function AutocompleteFilter({ filter, ...props }) {
  return (
    <Autocomplete
      {...props}
      value={filter.value}
      options={filter.options}
      onChange={(_, value) => filter.setValue(value)}
      renderTags={
        props.renderTags ||
        ((value) =>
          Array.isArray(value) ? (
            <Badge
              sx={{ mr: 1 }}
              color="primary"
              position="relative"
              badgeContent={value.length}
            />
          ) : null)
      }
    />
  );
}
