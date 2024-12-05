import request from 'supertest';
import db from '../../db/db.js';

const url = 'http://localhost:4000/';

describe('Get all menu items', () => {
    const postData = {
        query: `
            query {
                AllMenuItems {
                    id
                    name
                    type
                    description
                    price
                }
            }
        `
    }

    it('should return all menu items', async () => {
        const response = await request(url)
            .post('/')
            .send(postData)
            .expect(200);
            
        const res = JSON.parse(response.text);
        expect(res.data.AllMenuItems).toEqual(db.menu);
    });
});
