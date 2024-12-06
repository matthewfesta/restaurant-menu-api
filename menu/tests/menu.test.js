import request from 'supertest';
import db from '../../db/db.js';

const url = 'http://localhost:4000/';

describe('GraphQL Menu API Tests', () => {
    describe('AllMenuItems Query', () => {
        const query = `
            query {
                AllMenuItems {
                    id
                    name
                    type
                    description
                    price
                    options
                    variations {
                        name
                        price
                    }
                }
            }
        `;

        it('should return all menu items with complete data structure', async () => {
            const response = await request(url)
                .post('/')
                .send({ query })
                .expect(200);
            
            const res = JSON.parse(response.text);
            const expectedMenu = db.menu.map(item => ({
                ...item,
                id: item.id.toString(),
                options: item.options || null,
                variations: item.variations || null
            }));
            expect(res.data.AllMenuItems).toEqual(expectedMenu);
        });
    });

    describe('MenuItemsByType Query', () => {
        const query = `
            query($type: String!) {
                MenuItemsByType(type: $type) {
                    id
                    name
                    type
                    description
                    price
                    options
                }
            }
        `;

        it('should return menu items of type SANDWICHES_COLD', async () => {
            const variables = { type: 'SANDWICHES_COLD' };
            const response = await request(url)
                .post('/')
                .send({ query, variables })
                .expect(200);
            
            const res = JSON.parse(response.text);
            const sandwichItems = db.menu
                .filter(item => item.type === 'SANDWICHES_COLD')
                .map(item => ({
                    ...item,
                    id: item.id.toString(),
                    options: item.options || null
                }));
            expect(res.data.MenuItemsByType).toEqual(sandwichItems);
        });
    });

    describe('MenuItem Query', () => {
        const query = `
            query($id: ID!) {
                MenuItem(id: $id) {
                    id
                    name
                    type
                    description
                    price
                    options
                    variations {
                        name
                        price
                    }
                }
            }
        `;

        it('should return a specific menu item by ID', async () => {
            const variables = { id: "1" };
            const response = await request(url)
                .post('/')
                .send({ query, variables })
                .expect(200);
            
            const res = JSON.parse(response.text);
            const expectedItem = {
                ...db.menu.find(item => item.id === 1),
                id: "1",
                options: null,
                variations: null
            };
            expect(res.data.MenuItem).toEqual(expectedItem);
        });

        it('should return null for non-existent ID', async () => {
            const variables = { id: "999" };
            const response = await request(url)
                .post('/')
                .send({ query, variables })
                .expect(200);
            
            const res = JSON.parse(response.text);
            expect(res.data.MenuItem).toBeNull();
        });
    });
});
