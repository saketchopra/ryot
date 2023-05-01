import { graphql } from "@trackona/generated/graphql/backend";

export const REGISTER_USER = graphql(`
  mutation RegisterUser($input: UserInput!) {
    registerUser(input: $input){
      __typename
      ... on RegisterError {
        error
      }
      ... on IdObject {
        id
      }
    }
  }
`);

export const LOGIN_USER = graphql(`
  mutation LoginUser($input: UserInput!) {
    loginUser(input: $input) {
      __typename
      ... on LoginError {
        error
      }
      ... on LoginResponse {
        apiKey
      }
    }
  }
`);

export const LOGOUT_USER = graphql(`
  mutation LogoutUser {
    logoutUser
  }
`);

export const COMMIT_BOOK = graphql(`
  mutation CommitBook($identifier: String!, $input: BookSearchInput!, $index: Int!) {
    commitBook(identifier: $identifier, input: $input, index: $index) {
      id
    }
  }
`);

export const COMMIT_MOVIE = graphql(`
  mutation CommitMovie($identifier: String!) {
    commitMovie(identifier: $identifier) {
      id
    }
  }
`);

export const COMMIT_SHOW = graphql(`
  mutation CommitShow($identifier: String!) {
    commitShow(identifier: $identifier) {
      id
    }
  }
`);

export const PROGRESS_UPDATE = graphql(`
  mutation ProgressUpdate($input: ProgressUpdate!) {
    progressUpdate(input: $input) {
      id
    }
  }
`);

export const DELETE_SEEN_ITEM = graphql(`
  mutation DeleteSeenItem($seenId: Int!) {
    deleteSeenItem(seenId: $seenId) {
      id
    }
  }
`);