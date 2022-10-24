import { getSession } from "next-auth/react";

export default function HomePage() {
	return (
		<main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
			<h1 className="text-6xl font-bold">
				Welcome to <span className="text-blue-600">Uptime Monitor</span>
			</h1>
		</main>
	);
}

export async function getServerSideProps(context) {
	const { req } = context;
	const session = await getSession({ req });

	if (session) {
		return {
			redirect: { destination: "/dashboard" },
		};
	}

	return {
		props: {},
	};
}
