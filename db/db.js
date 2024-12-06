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
        },

        // Additional SANDWICHES_COLD
        {
            id: 16,
            name: 'Rare Roast Beef & Swiss',
            type: 'SANDWICHES_COLD',
            description: 'sweet-hot mustard, lettuce, red onion on choice of sourdough, whole wheat, or rye bread',
            price: 9.25,
            options: ['sourdough', 'whole wheat', 'rye bread']
        },
        {
            id: 17,
            name: 'Veggie',
            type: 'SANDWICHES_COLD',
            description: 'pepper jack, avocado, sprout, tomato on choice of sourdough, whole wheat, or rye bread',
            price: 9.25,
            options: ['sourdough', 'whole wheat', 'rye bread']
        },

        // Additional SANDWICHES_HOT
        {
            id: 18,
            name: 'Portobello Fresh Mozzarella',
            type: 'SANDWICHES_HOT',
            description: 'Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli',
            price: 9.50
        },
        
        // SOUP_AND_SALAD
        {
            id: 19,
            name: 'French Onion Soup',
            type: 'SOUP_AND_SALAD',
            description: 'Classic French Onion Soup',
            price: 4.95
        },
        {
            id: 20,
            name: 'Soup and Salad Combo',
            type: 'SOUP_AND_SALAD',
            description: 'with small green salad, fresh fruit or house pasta',
            price: 7.25
        },

        // FAJITAS
        {
            id: 21,
            name: 'Chicken Fajitas',
            type: 'FAJITAS',
            description: 'Onions, Poblano and Bell Peppers, Guacamole, Two Salsas. Served with red rice, black beans, grilled tomato salad',
            price: 10.95,
            options: ['corn tortillas', 'flour tortillas']
        },
        {
            id: 22,
            name: 'Sirloin Steak Fajitas',
            type: 'FAJITAS',
            description: 'Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas. Served with red rice, black beans, grilled tomato salad',
            price: 10.95,
            options: ['corn tortillas', 'flour tortillas']
        },

        // Additional TACOS
        {
            id: 23,
            name: 'Carne Asada Tacos',
            type: 'TACOS',
            description: 'marinated sirloin with Guacamole, Tomatillo Salsa. Served with red rice, black beans, corn & romaine salad, tortilla chips',
            price: 9.95
        },

        // ENCHILADAS
        {
            id: 24,
            name: 'Enchiladas',
            type: 'ENCHILADAS',
            description: 'with Southwestern Succotash, Black Beans with Chipotle Crema',
            price: 8.50,
            options: ['Beef', 'Chicken', 'Cheese', 'Veggie'],
            variations: [
                { name: 'uno', price: 8.50 },
                { name: 'dos', price: 9.95 },
                { name: 'tres', price: 11.50 }
            ]
        },

        // QUICHE
        {
            id: 25,
            name: 'Bacon, Swiss, Mushroom, Zucchini Quiche',
            type: 'QUICHE',
            description: 'Choice of Fresh Fruit or Green Salad',
            price: 8.95,
            options: ['Fresh Fruit', 'Green Salad']
        },

        // Additional GREEN_SALADS
        {
            id: 26,
            name: 'Smoked Turkey Cheese Tortellini',
            type: 'GREEN_SALADS',
            description: 'Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado',
            price: 9.95
        },
        {
            id: 27,
            name: 'Asian Grilled Chicken',
            type: 'GREEN_SALADS',
            description: 'Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing',
            price: 10.50
        },
        {
            id: 28,
            name: 'Southwest Grilled Chicken',
            type: 'GREEN_SALADS',
            description: 'Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette',
            price: 10.50
        },
        {
            id: 29,
            name: 'Mediterranean Italian Sausage',
            type: 'GREEN_SALADS',
            description: 'Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette',
            price: 9.95
        },
        {
            id: 30,
            name: 'Grilled Salmon',
            type: 'GREEN_SALADS',
            description: 'Artichoke tapenade, shredded kale, corn, radish, parmesan crisps',
            price: 11.50
        },

        // Additional HOT_SANDWICHES
        {
            id: 31,
            name: 'Chipotle BBQ Pork Sandwich',
            type: 'SANDWICHES_HOT',
            description: 'with Pickled Jalapeño Slaw',
            price: 9.50,
            options: ['whole wheat bun', 'cheese & onion bun']
        },
        {
            id: 32,
            name: 'Mexi Burger',
            type: 'SANDWICHES_HOT',
            description: 'Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole',
            price: 9.25,
            options: ['whole wheat bun', 'cheese & onion bun']
        },
        {
            id: 33,
            name: 'Herb Marinated Top Sirloin',
            type: 'SANDWICHES_HOT',
            description: 'Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia',
            price: 10.95
        },
        {
            id: 34,
            name: 'Roast Beef with Ancho Au Jus',
            type: 'SANDWICHES_HOT',
            description: 'Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette',
            price: 9.75
        },
        {
            id: 35,
            name: 'Blackened Catfish',
            type: 'SANDWICHES_HOT',
            description: 'Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough',
            price: 9.75
        },

        // Additional TACOS
        {
            id: 36,
            name: 'Citrus Marinated Chicken Tacos',
            type: 'TACOS',
            description: 'with Guacamole, Tomatillo Salsa. Served with red rice, black beans, corn & romaine salad, tortilla chips',
            price: 9.95
        },
        {
            id: 37,
            name: 'Grilled Veggie Tacos',
            type: 'TACOS',
            description: 'Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa. Served with red rice, black beans, corn & romaine salad, tortilla chips',
            price: 9.95
        },

        // Additional items from the menu
        {
            id: 38,
            name: 'Chili Relleno',
            type: 'ENTREES',
            description: 'Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce',
            price: 9.95
        },
        {
            id: 39,
            name: 'Pepita Crusted Salmon',
            type: 'ENTREES',
            description: 'with Chipotle Glaze – chevre whipped yams, jicama slaw, tomatillo sauce',
            price: 10.95
        },

        // Additional SOUP_AND_SALAD combo
        {
            id: 40,
            name: 'Premium Soup and Salad Combo',
            type: 'SOUP_AND_SALAD',
            description: 'with half pasta of the day',
            price: 8.75
        }
    ],
};

export default db;
