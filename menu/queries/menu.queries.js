import { getItem, listItems, listItemsByType } from '../models/menu.models.js';

export const getMenuItem = async (id) => {
    try {
        return await getItem(id);
    } catch (error) {
        throw error;
    }
};

export const listAllMenuItems = async () => {
    try {
        return await listItems();
    } catch (error) {
        throw error;
    }
};

export const listMenuItemsByType = async (type) => {
    try {
        return await listItemsByType(type);
    } catch (error) {
        throw error;
    }
};
