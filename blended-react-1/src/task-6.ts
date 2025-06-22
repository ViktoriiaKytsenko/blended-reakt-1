// const user = {
//   name: "Alice",
//   address: {
//     city: "Kyiv"
//   }
// };

// console.log(user.address?.city);

// Завдання:

// Створіть тип для user.
// Зробіть address необов'язковим.
// Перевірте, що user.address?.city не викликає помилки.

type Address = {
  city: string;
};

type User = {
  name: string;
  address?: Address;
};

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user.address?.city);
