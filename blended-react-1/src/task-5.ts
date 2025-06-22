// function createUser({name, age}) {
//   return {
//     name,
//     age,
//     isAdmin: false
//   };
// }

// createUser({ name: "Alice", age: 30 });

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.
type CreateUserParams = {
  name: string;
  age: number;
};

type CreatedUser = {
  name: string;
  age: number;
  isAdmin: boolean;
};

function createUser({ name, age }: CreateUserParams): CreatedUser {
  return {
    name,
    age,
    isAdmin: false,
  };
}
createUser({ name: "Alice", age: 30 });
