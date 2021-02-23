/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      category
      priority
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        category
        priority
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const todosByCategory = /* GraphQL */ `
  query TodosByCategory(
    $category: String
    $priority: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    todosByCategory(
      category: $category
      priority: $priority
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        category
        priority
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
