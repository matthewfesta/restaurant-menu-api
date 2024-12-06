import { getItem, listItems, listItemsByType } from '../model/menu.model.js';

export const getMenuItem = (id) => {
    return getItem(id);
};

export const listAllMenuItems = () => {
    return listItems();
};

export const listMenuItemsByType = (type) => {
    return listItemsByType(type);
};
