export interface MenuCategory {
  title: string;
  items: string[];
  image?: string;
}

export interface MenuPackage {
  name: string;
  categories: MenuCategory[];
}

/**
 * SINGLE SOURCE OF TRUTH FOR ALL MENUS
 */
export const menuData: Record<string, MenuPackage> = {
  Basic: {
    name: "Basic Menu",
    categories: [
      {
        title: "Main Courses",
        image: "/assets/menu/main-course.jpg",
        items: [
          "Chicken Biriyani",
          "Lamb Biriyani",
          "Prawn Biriyani",
          "Fish Biriyani",
          "Fried Rice with Curry",
        ],
      },
      {
        title: "Dessert",
        image: "/assets/menu/dessert.jpg",
        items: ["Gulab Jamun", "Mango Pudding with Ice Cream"],
      },
    ],
  },

  Standard: {
    name: "Standard Menu",
    categories: [
      {
        title: "Starter",
        image: "/assets/menu/starter.jpg",
        items: [
          "Beef Cutlet",
          "Chicken 65",
          "Chicken Tikka",
          "Tandoori Chicken",
          "Gobi 65",
        ],
      },
      {
        title: "Main Courses",
        image: "/assets/menu/main-course.jpg",
        items: [
          "Chicken Biriyani",
          "Lamb Biriyani",
          "Prawn Biriyani",
          "Fish Biriyani",
          "Fried Rice with Curry",
        ],
      },
      {
        title: "Dessert",
        image: "/assets/menu/dessert.jpg",
        items: ["Gulab Jamun", "Mango Pudding", "Payasam"],
      },
    ],
  },

  Grand: {
    name: "Grand Menu",
    categories: [
      {
        title: "Starter",
        items: [
          "Beef Cutlet",
          "Chicken 65",
          "Samosa (Veg/Chicken)",
          "Fish Amritsari",
          "Onion Bajji",
        ],
      },
      {
        title: "First Course",
        items: [
          "Idiyappam with Stew/Curry",
          "Kaapa with Fish Curry / Any Curry",
        ],
      },
      {
        title: "Main Courses",
        items: [
          "Chicken Biriyani",
          "Lamb Biriyani",
          "Prawn Biriyani",
          "Fish Biriyani",
        ],
      },
      {
        title: "Dessert",
        items: ["Fruit Salad", "Gulab Jamun", "Mango Pudding", "Payasam"],
      },
    ],
  },

  Elegant: {
    name: "Elegant Menu",
    categories: [
      {
        title: "Welcome Drink",
        items: ["Mint Lime", "Lemon Soda", "Watermelon Juice"],
      },
      {
        title: "Starter",
        items: [
          "Sheesh Kebab",
          "Tandoori Chicken",
          "Malai Chicken",
          "Fish Pakora",
          "Vegetable Samosa",
        ],
      },
      {
        title: "First Course",
        items: ["Naan with Curry", "Idiyappam with Stew/Curry"],
      },
      {
        title: "Main Courses",
        items: [
          "Chicken Biriyani",
          "Lamb Biriyani",
          "Fried Rice with Curry",
          "Kerala Vegetarian Meals",
        ],
      },
      {
        title: "Dessert",
        items: ["Fruit Salad", "Gulab Jamun", "Mango Pudding", "Payasam"],
      },
    ],
  },

  Executive: {
    name: "Executive Menu",
    categories: [
      {
        title: "Welcome Drink",
        items: [
          "Mango Lassy",
          "Fruit Punch",
          "Mint Lime",
          "Lemon Soda",
        ],
      },
      {
        title: "Starter",
        items: [
          "Sheesh Kebab",
          "Tandoori Chicken",
          "Fish Pollichathu",
          "Vegetable Samosa",
        ],
      },
      {
        title: "First Course",
        items: [
          "Naan with Curry",
          "Idiyappam with Stew / Curry",
          "Kaapa with Fish Curry / Any Curry",
          "Kerala Parotta with Curry",
        ],
      },
      {
        title: "Side Fry",
        items: ["Pork Fry", "Beef Fry"],
      },
      {
        title: "Main Courses",
        items: [
          "Chicken Biriyani",
          "Lamb Biriyani",
          "Fried Rice with Curry",
          "Ghee Rice with Curry",
          "Kerala Vegetarian Meals",
        ],
      },
      {
        title: "Dessert",
        items: ["Payasam", "Kheer", "Panakotta", "Rasamalai"],
      },
    ],
  },
};
