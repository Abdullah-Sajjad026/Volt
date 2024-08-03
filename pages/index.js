import { Typography } from "@mui/material";
import { MainContainer, RootLayout } from "modules/shared";

function PageContent() {
	// const { user } = useUserContext();
	// const router = useRouter();

	// Redirect to the dashboard
	// if (user.role === userTypeStudent)
	// 	router.push(sharedRoutes.applications.myApplications.path);
	// else router.push(sharedRoutes.clients.index.path);

	return (
		<>
			<Typography variant="h1">Volt</Typography>
			<Typography variant="h2">Next.js + MUI + React Query</Typography>
			<Typography variant="h3">
				Starter Kit with User Module for Dashboards
			</Typography>
		</>
	);
}

function Page() {
	return (
		<RootLayout>
			<MainContainer>
				<PageContent />
			</MainContainer>
		</RootLayout>
	);
}

export default Page;
