# Restaurant Menu GraphQL API

A Node.js and GraphQL API that serves restaurant menu data.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Quick Start

1. Clone the repository:

```bash
git clone <repository-url>
cd restaurant-menu-api

```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

The server will be running at `http://localhost:4000`

## Testing

Run the test suite:

```bash
npm test
```

## API Documentation

### GraphQL Endpoint
`POST http://localhost:4000/`

### Available Queries

1. Get all menu items:

```graphql
query {
    AllMenuItems {
        id
        name
        type
        description
        price
    }
}
```

2. Get menu items by type:

```graphql
query($type: String!) {
    MenuItemsByType(type: $type) {
        id
        name
        type
        description
        price
    }
}
```

3. Get a specific menu item:

```graphql
query($id: ID!) {
    MenuItem(id: $id) {
        id
        name
        type
        description
        price
    }
}
```

4. Get available menu types:

```graphql
query {
    MenuTypes
}
```

### Available Menu Types
- APPETIZERS
- ENTREES
- SANDWICHES_HOT
- SANDWICHES_COLD
- TACOS
- GREEN_SALADS
- FAJITAS
- ENCHILADAS
- QUICHE
- SOUP_AND_SALAD

## Implementation Notes

- Built with Node.js and Apollo Server for GraphQL
- Uses in-memory database for menu items
- Includes input validation and error handling
- Test suite using Jest and Supertest
- Modular architecture with separate models, queries, and resolvers

## Error Handling

The API returns structured errors with appropriate status codes:
- 400: Validation errors (invalid input)
- 404: Resource not found
- 500: Internal server error

## Future Improvements

- Add persistence layer with a proper database
- Implement mutations for menu management
- Add authentication and authorization
- Add rate limiting
- Expand test coverage

This README provides:
1. Clear setup instructions
2. API documentation with example queries
3. Implementation notes
4. Error handling information
5. Future improvement suggestions

The implementation details reference the following files:
- Package.json (lines 1-26)
- App.js (lines 1-14)
- Menu/index.js (lines 1-48)
- Menu/model/menu.model.js (lines 1-30)
