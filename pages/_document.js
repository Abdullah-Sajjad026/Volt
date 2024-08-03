import {
	documentGetInitialProps,
	DocumentHeadTags,
} from "@mui/material-nextjs/v13-pagesRouter";
import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument(props) {
	return (
		<Html lang="en">
			<Head>
				<DocumentHeadTags />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

MyDocument.getInitialProps = async ctx => {
	const finalProps = await documentGetInitialProps(ctx);
	return finalProps;
};
