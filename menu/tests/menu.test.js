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
                }
            }
        `;

        it('should return all menu items', async () => {
            const response = await request(url)
                .post('/')
                .send({ query })
                .expect(200);
            
            const res = JSON.parse(response.text);
            expect(res.data.AllMenuItems).toEqual(db.menu);
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
                }
            }
        `;

        it('should return menu items of type APPETIZERS', async () => {
            const variables = { type: 'APPETIZERS' };
            const response = await request(url)
                .post('/')
                .send({ query, variables })
                .expect(200);
            
            const res = JSON.parse(response.text);
            const appetizerItems = db.menu.filter(item => item.type === 'APPETIZERS');
            expect(res.data.MenuItemsByType).toEqual(appetizerItems);
        });

        it('should return empty array for non-existent type', async () => {
            const variables = { type: 'NON_EXISTENT' };
            const response = await request(url)
                .post('/')
                .send({ query, variables })
                .expect(200);
            
            const res = JSON.parse(response.text);
            expect(res.data.MenuItemsByType).toEqual([]);
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
            const expectedItem = db.menu.find(item => item.id === 1);
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
