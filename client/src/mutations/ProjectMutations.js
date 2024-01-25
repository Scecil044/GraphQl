import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation addProject($title: String!, $status: ProjectStatus!, $description: String!, $clientId: ID!) {
    addProject(title: $title, status: $status, description: $description, clientId: $clientId) {
      id
      title
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $title: String!, $description: String!, $status: statusUpdateType!, $clientId: ID!) {
    updateProject(id: $id, title: $title, description: $description, status: $status, clientId: $clientId) {
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

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };
