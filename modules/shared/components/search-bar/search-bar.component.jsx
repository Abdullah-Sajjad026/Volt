// @ts-check

import { SearchRounded } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useDebounce } from "@uidotdev/usehooks";
import { defaultDebounceDelay } from "modules/shared/shared.constants";
import { useEffect, useState } from "react";

/**
 * A search bar with built-in debouncing for search queries and a little icon for extra social credits.
 *
 * @param { import("@mui/material").TextFieldProps & { onChange?: (event: { target: { value: string } }) => void } } props
 */
export function SearchBar({ value, onChange = () => {}, ...props }) {
  const [query, setQuery] = useState(value);
  const debouncedQuery = useDebounce(query, defaultDebounceDelay);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Effect: Sync internal state with the value prop
  useEffect(() => {
    if (value !== query) {
      setQuery(value);
    }
    // React suggests that query should also be observed, but I disagree.
    // We are observing the value and setting the query if the value changes, not the other way around.
    // Doing what React suggests causes a small loop where the value ends up being what is was before, nullifying any external changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Effect: Call onChange when the debouncedQuery changes
  useEffect(() => {
    if (debouncedQuery !== value) {
      onChange({ target: { value: debouncedQuery } });
    }
    // React suggests that value and onChange should also be observed, but I disagree.
    // We are observing the debouncedQuery and calling onChange if the debouncedQuery changes, essentially doing what a debouncer is meant to do.
    // Same as above, doing what react suggests ends up setting the value back to what is was before, nullifying the effect of the debouncedQuery.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  return (
    <TextField
      value={query}
      onChange={handleChange}
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchRounded />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
