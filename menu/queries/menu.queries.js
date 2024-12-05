import { getItem, listItems, listItemsByType } from '../models/menu.models.js';

export const getMenuItem = async (id) => {
    try {
        const resp = await getItem(id);
        return resp;
    } catch (error) {
        return error;
    }
};

export const listAllMenuItems = async () => {
    try {
        const resp = await listItems();
        return resp;
    } catch (error) {
        return error;
    }
};

export const listMenuItemsByType = async (type) => {
    try {
        const resp = await listItemsByType(type);
        return resp;
    } catch (error) {
        return error;
    }
};
