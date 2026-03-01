// TYPES
export type MenuTag =
  | "Promo"
  | "Nouveau"
  | "Populaire"
  | "Spicy"
  | "Veggie"
  | "Gazeux";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string[];
  tags?: MenuTag[];
  available: boolean;
}

export interface MenuData {
  burgers: MenuItem[];
  drinks: MenuItem[];
  pizzas: MenuItem[];
}

// CONSTANTS
export const PLACEHOLDER_IMAGE = "/assets/placeholder-image.jpg";

// DATA
export const burgerDatas: MenuItem[] = [
  {
    id: "burger-1",
    name: "Le Classic",
    price: 9.9,
    image: "/assets/burgers/burger-classic.png",
    ingredients: [
      "1x Steack boeuf",
      "Salade",
      "Tomate",
      "Cheddar",
      "Sauce burger",
    ],
    tags: ["Promo", "Nouveau"],
    available: true,
  },
  {
    id: "burger-2",
    name: "Le BBQ Smoky",
    price: 11.9,
    image: "/assets/burgers/burger-bbq.png",
    ingredients: [
      "1x Steack boeuf",
      "Bacon",
      "Oignons",
      "Cheddar",
      "Sauce BBQ",
    ],
    tags: ["Populaire", "Spicy"],
    available: true,
  },
  {
    id: "burger-3",
    name: "Le Double",
    price: 12.9,
    image: "/assets/burgers/burger-double.png",
    ingredients: [
      "2x Steack boeuf",
      "Salade",
      "Cornichons",
      "Cheddar",
      "Sauce maison",
    ],
    tags: ["Nouveau"],
    available: true,
  },
  {
    id: "burger-4",
    name: "Le Veggie",
    price: 11.9,
    image: "/assets/burgers/burger-veggie.png",
    ingredients: [
      "Galette légumes",
      "Avocat",
      "Salade",
      "Tomate",
      "Sauce yaourt",
    ],
    tags: ["Veggie"],
    available: false,
  },
  {
    id: "burger-5",
    name: "Le Crispy Chicken",
    price: 12.9,
    image: "/assets/burgers/burger-chicken.png",
    ingredients: [
      "Poulet pané",
      "Coleslaw",
      "Cheddar",
      "Cornichons",
      "Sauce ranch",
    ],
    tags: ["Populaire"],
    available: true,
  },
  {
    id: "burger-6",
    name: "Le Truffe",
    price: 14.9,
    image: "/assets/burgers/burger-truffe.png",
    ingredients: ["1x Steack boeuf", "Champignons", "Emmental", "Sauce truffe"],
    available: false,
  },
];

export const drinkDatas: MenuItem[] = [
  {
    id: "drink-3",
    name: "Milkshake Vanille",
    price: 4.5,
    image: PLACEHOLDER_IMAGE,
    ingredients: ["Lait entier", "Glace vanille", "Chantilly"],
    tags: ["Populaire"],
    available: true,
  },
  {
    id: "drink-4",
    name: "Jus d'Orange Pressé",
    price: 4.5,
    image: PLACEHOLDER_IMAGE,
    ingredients: ["25cl", "Oranges fraîches", "Pressé à la commande"],
    available: true,
  },
  {
    id: "drink-6",
    name: "Smoothie Fruits Rouges",
    price: 5,
    image: PLACEHOLDER_IMAGE,
    ingredients: ["Fraises", "Framboises", "Myrtilles", "Yaourt"],
    tags: ["Nouveau"],
    available: false,
  },
  {
    id: "drink-2",
    name: "Limonade Maison",
    price: 3,
    image: PLACEHOLDER_IMAGE,
    ingredients: [
      "33cl",
      "Citron frais",
      "Menthe",
      "Eau gazeuse",
      "Sucre de canne",
    ],
    tags: ["Gazeux"],
    available: true,
  },
  {
    id: "drink-5",
    name: "Badoit",
    price: 2.5,
    image: PLACEHOLDER_IMAGE,
    ingredients: ["50cl", "Eau gazeuse"],
    tags: ["Gazeux"],
    available: true,
  },
  {
    id: "drink-1",
    name: "Sodas",
    price: 2.5,
    image: PLACEHOLDER_IMAGE,
    ingredients: ["33cl", "Coca-Cola", "Ice Tea", "Fanta", "Sprite"],
    tags: ["Populaire", "Gazeux"],
    available: true,
  },
];

export const pizzaDatas: MenuItem[] = [
  {
    id: "pizza-1",
    name: "Margherita",
    price: 10.0,
    image: "/assets/pizzas/pizza-margherita.png",
    ingredients: ["Sauce tomate", "Mozzarella", "Basilic frais"],
    tags: ["Populaire"],
    available: true,
  },
  {
    id: "pizza-2",
    name: "4 Fromages",
    price: 12.5,
    image: "/assets/pizzas/pizza-4fromages.png",
    ingredients: ["Mozzarella", "Gorgonzola", "Emmental", "Chèvre"],
    tags: [],
    available: true,
  },
  {
    id: "pizza-3",
    name: "Reine",
    price: 12.5,
    image: "/assets/pizzas/pizza-reine.png",
    ingredients: ["Sauce tomate", "Mozzarella", "Jambon", "Champignons"],
    tags: ["Populaire", "Promo"],
    available: true,
  },
  {
    id: "pizza-4",
    name: "Calzone",
    price: 13.5,
    image: "/assets/pizzas/pizza-calzone.png",
    ingredients: ["Sauce tomate", "Mozzarella", "Jambon", "Ricotta", "Oeuf"],
    available: false,
  },
  {
    id: "pizza-5",
    name: "Végétarienne",
    price: 13.5,
    image: "/assets/pizzas/pizza-vegetarienne.png",
    ingredients: [
      "Sauce tomate",
      "Mozzarella",
      "Poivrons",
      "Pommes de terre",
      "Olives",
      "Tomates cerises",
    ],
    tags: ["Nouveau", "Veggie"],
    available: true,
  },
  {
    id: "pizza-6",
    name: "Texane",
    price: 15.0,
    image: "/assets/pizzas/pizza-texane.png",
    ingredients: [
      "Sauce tomate",
      "Fromage",
      "Chorizo",
      "Steack haché",
      "Merguez",
      "Oignons",
    ],
    tags: [],
    available: false,
  },
];

export const menuData: MenuData = {
  burgers: burgerDatas,
  drinks: drinkDatas,
  pizzas: pizzaDatas,
};
