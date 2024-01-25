import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      title
      status
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      title
      status
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
`;



export { GET_PROJECTS, GET_PROJECT };
