import { v4 as uuid } from "uuid";

export const recipes = [
  {
    id: uuid(),
    name: "Spaghetti Bolognese",
    image:
      "https://www.ocado.com/cmscontent/recipe_image_large/33362787.png?awck",
    ingredients: [
      "300g spaghetti",
      "400g ground beef",
      "1 onion, chopped",
      "2 cloves of garlic, minced",
      "400g canned tomatoes",
      "1 tablespoon tomato paste",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "Grated Parmesan cheese for serving",
    ],
    instructions: [
      "Cook the spaghetti according to package instructions. Drain and set aside.",
      "In a large skillet, cook the ground beef over medium heat until browned. Add the chopped onion and minced garlic, and cook until the onion is translucent.",
      "Add the canned tomatoes, tomato paste, dried oregano, dried basil, salt, and pepper to the skillet. Stir well and simmer for 15-20 minutes.",
      "Serve the Bolognese sauce over the cooked spaghetti. Sprinkle with grated Parmesan cheese.",
      "Enjoy your delicious Spaghetti Bolognese!",
    ],
    cuisine: "Italian",
  },
  {
    id: uuid(),
    name: "Chicken Tikka Masala",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala.jpg",
    ingredients: [
      "500g boneless chicken, cut into pieces",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "1 tablespoon vegetable oil",
      "1 onion, finely chopped",
      "2 cloves of garlic, minced",
      "1 teaspoon grated ginger",
      "1 can (400g) crushed tomatoes",
      "1 cup heavy cream",
      "1 teaspoon garam masala",
      "Salt to taste",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "In a bowl, mix the yogurt and tikka masala paste. Add the chicken pieces and marinate for at least 1 hour.",
      "Heat the vegetable oil in a large skillet over medium heat. Add the chopped onion, minced garlic, and grated ginger. Cook until the onion is golden brown.",
      "Add the marinated chicken to the skillet and cook until browned on all sides.",
      "Pour in the crushed tomatoes and simmer for 15 minutes. Stir in the heavy cream, garam masala, and salt. Cook for an additional 5 minutes.",
      "Garnish with fresh cilantro and serve with rice or naan bread.",
      "Enjoy your flavorful Chicken Tikka Masala!",
    ],
    cuisine: "Indian",
  },
  {
    id: uuid(),
    name: "Caprese Salad",
    image:
      "https://www.foodnetwork.com/content/dam/images/food/fullset/2003/9/22/0/tm1a35_caprese_salad.jpg",
    ingredients: [
      "2 large tomatoes, sliced",
      "250g fresh mozzarella cheese, sliced",
      "1 bunch of fresh basil leaves",
      "2 tablespoons extra virgin olive oil",
      "1 tablespoon balsamic vinegar",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Arrange the tomato and mozzarella slices on a serving platter, alternating between them.",
      "Tuck the fresh basil leaves between the tomato and mozzarella slices.",
      "Drizzle the extra virgin olive oil and balsamic vinegar over the salad.",
      "Season with salt and pepper to taste.",
      "Serve the Caprese salad immediately and enjoy!",
    ],
    cuisine: "Italian",
  },
];
