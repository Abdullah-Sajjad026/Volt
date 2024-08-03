import { Alert } from "@mui/material";
import { getStandardErrorMessage } from "modules/shared/shared.utils";
import InlineLoader from "../inline-loader";

/**
 * A loader to be used with `next/dynamic`
 *
 * @param { Object } props
 * @param { boolean } props.error If there's an error. `next/dynamic` passes this prop.
 * @param { React.Component } [props.loader] The loader component to use, defaults to `InlineLoader`
 *
 *
 * @example const Component = dynamic(() => import("some-component.jsx"), {
 *  loading: LazyLoader,
 * });
 */
export function LazyLoader({ error, loader }) {
  if (error) {
    return (
      <Alert severity="error">
        {getStandardErrorMessage("loading the page")}
      </Alert>
    );
  }

  if (loader) {
    return loader;
  }

  return <InlineLoader />;
}
