import Container from "@mui/material/Container";
import { rootLayoutPaddingX, rootLayoutPaddingY } from "modules/shared/layouts";
import { mainContainerId } from "./main-container.config";

/**
 * @param { import("@mui/material").ContainerProps } props
 */
export function MainContainer({ sx = {}, ...props }) {
  return (
    <Container
      maxWidth="lg"
      id={mainContainerId}
      sx={{
        ...sx,
        marginLeft: 0,
        paddingX: rootLayoutPaddingX,
        paddingY: rootLayoutPaddingY,
      }}
      {...props}
    />
  );
}
