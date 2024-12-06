import { listAllMenuItems,listMenuItemsByType,getMenuItem } from './queries/menu.queries.js';
import db from '../db/db.js';

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
        options: [String]
        variations: [PriceVariation]
    }

    type PriceVariation {
        name: String!
        price: Float!
    }

    # QUERY TYPES

    # The "AllMenuItems" query returns a list of all menu items.
    type Query {
        AllMenuItems: [MenuItem!]!
        MenuItemsByType(type: String!): [MenuItem!]
        MenuItem(id: ID!): MenuItem
        MenuTypes: [String!]!
    }
`;

export const resolvers = {
    Query: {
        AllMenuItems: () => listAllMenuItems(),
        MenuItemsByType: (_, { type }) => listMenuItemsByType(type),
        MenuItem: (_, { id }) => getMenuItem(id),
        MenuTypes: () => {
            const types = new Set();
            for (const item of db.menu) {
                types.add(item.type);
            }
            return Array.from(types);
        },
    },
};
