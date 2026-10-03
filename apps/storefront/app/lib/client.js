import { HttpLink, ApolloLink } from "@apollo/client";
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";

const endpointURI = process.env.GRAPHQL_URL ?? "http://localhost:9000/graphql";

const authLink = new ApolloLink((operation, forward) => {
	//console.log("OPERATION", operation);
	/* let token = getCookie("user");
	//console.log("[AUTHLINK]", token);
	operation.setContext(({ headers }) => {
		//console.log("HEADERS", headers);
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : "",
			},
		};
	}); */

	return forward(operation);
});
const link = new HttpLink({ uri: endpointURI, credentials: "include" });

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: ApolloLink.from([authLink, link]),
	});
});
