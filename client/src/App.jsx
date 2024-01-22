import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache()
});
export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div>
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}
