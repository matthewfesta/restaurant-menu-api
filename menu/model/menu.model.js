import db from '../../db/db.js';
import { ValidationError, NotFoundError } from '../../utils/errors.js';

const validateId = (id) => {
    const numId = parseInt(id);
    if (isNaN(numId) || numId < 1) {
        throw new ValidationError('Invalid ID format');
    }
    return numId;
};

const validateType = (type) => {
    const validTypes = ['APPETIZERS', 'ENTREES', 'SANDWICHES_HOT', 'SANDWICHES_COLD', 'TACOS', 'GREEN_SALADS'];
    if (!validTypes.includes(type)) {
        throw new ValidationError('Invalid menu type');
    }
    return type;
};

export const getItem = (id) => {
    const validId = validateId(id);
    const item = db.menu.find(item => item.id === validId);
    if (!item) {
        throw new NotFoundError(`Menu item with id ${id} not found`);
    }
    return item;
};

export const listItems = () => {
    return db.menu;
};

export const listItemsByType = (type) => {
    const validType = validateType(type);
    return db.menu.filter(item => item.type === validType);
};
