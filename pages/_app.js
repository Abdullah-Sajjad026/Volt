import { CssBaseline } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "constants/theme";
import { useLoadEnums } from "modules/general/api/load-enums/load-enums.api";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "styles/globals.css";

// Create a client
const queryClient = new QueryClient();

const GlobalThings = () => {
	useLoadEnums();

	return <>{/* Global things */}</>;
};

export default function App({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<AppCacheProvider {...pageProps}>
				<ThemeProvider theme={theme}>
					<ToastContainer
						hideProgressBar
						autoClose={3000}
						bodyStyle={{
							fontSize: "14px",
						}}
					/>
					<CssBaseline />
					<GlobalThings />
					{/* Actual page */}
					<Component {...pageProps} />
				</ThemeProvider>
			</AppCacheProvider>
		</QueryClientProvider>
	);
}
