import { listAllMenuItems,listMenuItemsByType,getMenuItem } from './queries/menu.js';

export const typeDefs = `
    # GraphQL

    # OBJECT TYPES

    # The "MenuItem" type represents a menu item in the restaurant menu.
    type MenuItem {
        id: ID!
        name: String!
        type: String!
        description: String!
        price: Float!
    }

    # QUERY TYPES

    # The "AllMenuItems" query returns a list of all menu items.
    type Query {
        AllMenuItems: [MenuItem!]!
    }

    # The "MenuItemsByType" query returns a list of menu items by type.
    type Query {
        MenuItemsByType(type: String!): [MenuItem!]!
    }
`;

export const resolvers = {
    Query: {
        AllMenuItems: async () => await listAllMenuItems(),
        MenuItemsByType: async (_, { type }) => await listMenuItemsByType(type),
        MenuItem: async (_, { id }) => await getMenuItem(id),
    },
};
