import db from '../../db/db.js';


export const getItem = async (id) => {
    try {
        const item = await db?.menu?.filter((item) => item?.id === id);
        return item;
    } catch (error) {
        console.error(`Error fetching menu item with id ${id}: ${error}`);
        return error;
    }
};

export const listItems = async () => {
    try {
        return db?.menu;
    } catch (error) {
        console.error(`Error fetching all menu items: ${error}`);
        return error;
    }
};

export const listItemsByType = async (type) => {
    try {
        return db?.menu?.filter((item) => item?.type === type);
    } catch (error) {
        console.error(`Error fetching menu items by type ${type}: ${error}`);
        return error;
    }
};
