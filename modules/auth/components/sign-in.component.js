import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { columnSpacingPx } from "constants/theme";
import { getApiErrorMessage } from "modules/shared";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { useSignInMutation } from "../api/sign-in/sign-in.api";

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

const SignInComponent = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const signInMutation = useSignInMutation({
		onError: error => {
			toast.error(
				getApiErrorMessage(
					error,
					"There was an error while logging you in, please try again later or contact support",
				),
			);
		},
		onSuccess: res => {
			localStorage.setItem("token", res.data.token);
			localStorage.setItem("user", true);
			if (router.query.redirect) {
				setTimeout(() => {
					router.push(router.query.redirect);
				}, 1000);

				return;
			}

			// Pass to homepage and that will take care of further redirections.
			router.push("/");
		},
	});

	const onSubmit = data => {
		signInMutation.mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: columnSpacingPx,
				}}
			>
				<Typography variant="h2" sx={{ marginBottom: "1rem" }}>
					Sign In
				</Typography>
				<TextField
					label="Email"
					type="email"
					{...register("email")}
					error={!!errors.email}
					helperText={errors.email?.message}
					sx={{ marginBottom: "1rem" }}
				/>
				<TextField
					label="Password"
					type="password"
					{...register("password")}
					error={!!errors.password}
					helperText={errors.password?.message}
					sx={{ marginBottom: "1rem" }}
				/>
				<Button type="submit" variant="contained" color="primary">
					Sign In
				</Button>
			</Box>
		</form>
	);
};

export default SignInComponent;
