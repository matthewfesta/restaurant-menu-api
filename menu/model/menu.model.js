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
        throw new ValidationError(`Invalid menu type. Must be one of: ${validTypes.join(', ')}`);
    }
    return type;
};

export const getItem = async (id) => {
    try {
        const validId = validateId(id);
        const item = await db?.menu?.find((item) => item?.id === validId);
        if (!item) {
            throw new NotFoundError(`Menu item with id ${id} not found`);
        }
        return item;
    } catch (error) {
        throw error;
    }
};

export const listItems = async () => {
    try {
        return db?.menu;
    } catch (error) {
        throw error;
    }
};

export const listItemsByType = async (type) => {
    try {
        const validType = validateType(type);
        const items = await db?.menu?.filter((item) => item?.type === validType);
        return items;
    } catch (error) {
        throw error;
    }
};
