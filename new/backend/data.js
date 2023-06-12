import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Admin Admin",
      email: "admin@mail.bg",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Blagovest Kabov",
      email: "kabov1@mail.bg",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Тениска Nike",
      category: "Тениски",
      image: "/images/p1.jpg",
      price: 47.99,
      countInStack: 10,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "100% памук, високо качество. Подходяща за спорт или ежедневно носене.",
    },

    {
      name: "Блуза Ellesse",
      category: "Блузи",
      image: "/images/p2.jpg",
      price: 77.31,
      countInStack: 20,
      brand: "Ellesse",
      rating: 4,
      numReviews: 17,
      description: "Високо качество. Произведено в Италия.",
    },

    {
      name: "Тениска HUGO",
      category: "Тениски",
      image: "/images/p3.jpg",
      price: 87.99,
      countInStack: 0,
      brand: "HUGO BOSS",
      rating: 3.2,
      numReviews: 2,
      description: "40% памук, 60% ликра",
    },

    {
      name: "Спортен Екип Nike",
      category: "Анцузи",
      image: "/images/p4.jpg",
      price: 247.99,
      countInStack: 15,
      brand: "Nike",
      rating: 5,
      numReviews: 4,
      description: "!00% памук, високо качество. Подходящ за спорт или ежедневно носене.",
    },
    

    {
      name: "Кецове Jordan Dub Zero",
      category: "Обувки",
      image: "/images/p5.jpg",
      price: 238.99,
      countInStack: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "Ергономични стелки, дебела подметка, дишащи мрежи, AIR технологии за по-удобно преживяване.",
    },

    {
      name: "Кецове Calvin Klein",
      category: "Обувки",
      image: "/images/p7.jpg",
      price: 145.68,
      countInStack: 20,
      brand: "Calvin Klein",
      rating: 3.8,
      numReviews: 12,
      description: "Стилни кецове за всякакви поводи",
    },

    {
      name: "Кецове Nike Air Max 97",
      category: "Обувки",
      image: "/images/p8.jpg",
      price: 297.38,
      countInStack: 22,
      brand: "Nike",
      rating: 4.3,
      numReviews: 14,
      description: "Стилни кецове за всякакви поводи",
    },

    {
      name: "Маратонки Adidas R1 PrimeBlue",
      category: "Обувки",
      image: "/images/p9.jpg",
      price: 245.99,
      countInStack: 2,
      brand: "Adidas",
      rating: 3.8,
      numReviews: 12,
      description: "Стилни кецове за всякакви поводи",
    },

    {
      name: "Шапка Adidas",
      category: "Аксесоари",
      image: "/images/p10.jpg",
      price: 27.99,
      countInStack: 3,
      brand: "Adidas",
      rating: 2.6,
      numReviews: 8,
      description: "Бейзболна шапка, подходяща за летния сезон.",
    },

    {
      name: "Шапка Riders",
      category: "Аксесоари",
      image: "/images/p11.jpg",
      price: 34.99,
      countInStack: 5,
      brand: "Riders",
      rating: 3.1,
      numReviews: 12,
      description: "Бейзболна шапка, подходяща за летния сезон.",
    },

    {
      name: "Шапка Nike",
      category: "Аксесоари",
      image: "/images/p12.jpg",
      price: 27.99,
      countInStack: 6,
      brand: "Nike",
      rating: 4.6,
      numReviews: 1,
      description: "Бейзболна шапка, подходяща за летния сезон.",
    },

    {
      name: "Шапка QuickSilver",
      category: "Аксесоари",
      image: "/images/p13.jpg",
      price: 30.23,
      countInStack: 9,
      brand: "QuickSilver",
      rating: 3.4,
      numReviews: 18,
      description: "Бейзболна шапка, подходяща за летния сезон.",
    },

    {
      name: "Къси панталонки Ellesse",
      category: "Шорти",
      image: "/images/p14.jpg",
      price: 47.99,
      countInStack: 30,
      brand: "Ellsse",
      rating: 3.3,
      numReviews: 19,
      description: "Удобни къси мъжки шорти, подходящи за ежедневието. ",
    },

    {
      name: "Къси панталонки Adidas",
      category: "Шорти",
      image: "/images/p15.jpg",
      price: 41.99,
      countInStack: 44,
      brand: "Adidas",
      rating: 4.3,
      numReviews: 21,
      description: "Удобни къси мъжки шорти, подходящи за ежедневието. ",
    },

    {
      name: "Къси панталонки Nike",
      category: "Шорти",
      image: "/images/p16.jpg",
      price: 47.99,
      countInStack: 55,
      brand: "Nike",
      rating: 5.0,
      numReviews: 9,
      description: "Удобни къси мъжки шорти, подходящи за ежедневието. ",
    },

    {
      name: "Къси панталонки Fila",
      category: "Шорти",
      image: "/images/p14.jpg",
      price: 17.99,
      countInStack: 10,
      brand: "Fila",
      rating: 3.6,
      numReviews: 20,
      description: "Удобни къси мъжки шорти, подходящи за ежедневието. ",
    },

  ],
};

export default data;
