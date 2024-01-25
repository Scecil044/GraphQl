# Graphql | NODE | REACT | EXPRESS | TAILWINDCSS
- This application demonstrates my knowledge and skills in making API calls with GRQPHQL
- The frontend part of the application in the client folder makes extensive use of @apollo/client
- Also, note that on the backend (server) folder. All mutations and Types are explicitly declared in the schema.js file
### Tailwindcss
- Alongside React, the front end part of this demo app is designed using Tailwindcss

*Specific Reference*
- The code snippets used in this demo app are an extension of the lesson available at [Travesy media Graphql](https://www.youtube.com/watch?v=BcLNfwF04Kw&t=1692s)

> On schema.js and clientRow.jsx, more refinement should be done on these lines of code
`  deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        Project.find({ clientId: args.id }).then(project => {
          project.forEach(project => {
            project.remove();
          });
        });
        return Client.findByIdAndDelete(args.id);
      }
    },`
> ClientRow.jsx
` refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],`
*Note how the projectMutation for adding project uses $status: ProjectStatus!, which is declared as the name in schema.js*