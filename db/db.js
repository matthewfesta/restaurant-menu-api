const db = {
    menu: [
        // APPETIZERS
        {
            id: 1,
            name: 'Iceberg Wedge Salad with House Cured Bacon',
            type: 'APPETIZERS',
            description: 'tomato salsa gorgonzola',
            price: 7.50
        },
        {
            id: 2,
            name: 'Sautéed Shredded Brussels Sprouts',
            type: 'APPETIZERS',
            description: 'bacon hazelnuts gorgonzola',
            price: 6.95
        },
        {
            id: 3,
            name: 'Kale Salad',
            type: 'APPETIZERS',
            description: 'parmesan crisp corn radish garlic-lemon vinaigrette',
            price: 7.50
        },
        {
            id: 4,
            name: 'Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto',
            type: 'APPETIZERS',
            description: 'grilled tomato salsa crostini',
            price: 6.95
        },
        {
            id: 5,
            name: 'Chicken and Cabbage Eggrolls',
            type: 'APPETIZERS',
            description: 'hot & sour dipping sauce',
            price: 6.95
        },

        // ENTREES
        {
            id: 6,
            name: 'Farfalle Pasta with Braised Pork in Tomato Cream',
            type: 'ENTREES',
            description: 'capers butternut squash kale',
            price: 12.95
        },
        {
            id: 7,
            name: 'Stout Braised Bratwurst',
            type: 'ENTREES',
            description: 'horseradish mashed potatoes roasted root veggies grilled onion',
            price: 13.95
        },
        {
            id: 8,
            name: 'Salmon & Crispy Tofu in Yellow Curry Sauce',
            type: 'ENTREES',
            description: 'vegetable sauté golden raisin chutney',
            price: 15.95
        },
        {
            id: 9,
            name: 'Sesame Shrimp',
            type: 'ENTREES',
            description: 'udon noodles ramen broth shiitake mushrooms bean sprouts scallions',
            price: 13.95
        },

        // SANDWICHES - COLD
        {
            id: 10,
            name: 'Turkey & Avocado',
            type: 'SANDWICHES_COLD',
            description: 'with tomato on choice of sourdough, whole wheat, or rye bread',
            price: 9.25
        },
        {
            id: 11,
            name: 'Pub Club',
            type: 'SANDWICHES_COLD',
            description: 'turkey, bacon, lettuce, tomato on choice of sourdough, whole wheat, or rye bread',
            price: 9.25
        },

        // SANDWICHES - HOT
        {
            id: 12,
            name: 'Southwest Chicken Breast',
            type: 'SANDWICHES_HOT',
            description: 'Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese',
            price: 9.50
        },
        {
            id: 13,
            name: 'Bacon Burger',
            type: 'SANDWICHES_HOT',
            description: 'Swiss, Lettuce, Tomato',
            price: 9.25
        },

        // TACOS
        {
            id: 14,
            name: 'Beer Battered Fish Tacos',
            type: 'TACOS',
            description: 'with Jalapeño Remoulade, Roasted Salsa, Cabbage, served with red rice, black beans, corn & romaine salad, tortilla chips',
            price: 9.95
        },

        // GREEN SALADS
        {
            id: 15,
            name: 'Grilled Red Trout Salad',
            type: 'GREEN_SALADS',
            description: 'Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette',
            price: 10.95
        }
    ],
};

export default db;
