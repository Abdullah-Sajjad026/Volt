import { Box, Typography } from "@mui/material";
import SignInComponent from "modules/auth/components/sign-in.component";
import {
  MainContainer,
  RootLayout,
  mainContainerSpacing,
} from "modules/shared";

export default function SignIn() {
  return (
    <RootLayout
      sidebarChildren={
        <Box className="space-y-4">
          <Typography variant="h4">Welcome</Typography>
          <Typography variant="h6">
            Please sign in to access the dashboard.
          </Typography>
        </Box>
      }
    >
      <MainContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: mainContainerSpacing,
        }}
      >
        <SignInComponent />
      </MainContainer>
    </RootLayout>
  );
}
