"use client";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
	SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
const endpointURI =
	process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:9000/graphql";

function makeClient() {
	const httpLink = new HttpLink({ uri: endpointURI });

	return new ApolloClient({
		cache: new InMemoryCache(),
		link:
			typeof window === "undefined"
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true,
						}),
						httpLink,
					])
				: httpLink,
	});
}

export function ApolloWrapper({ children }) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
}
