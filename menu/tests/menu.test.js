import request from 'supertest';

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
        request(url)
            .post('?')
            .send(postData)
            .expect(200)
            .end((error, response) => {
                if (error) console.error(error);
                const res = JSON.parse(response.text);

                expect(res.data.AllMenuItems).toEqual(db.menu);
            });
    });
});
