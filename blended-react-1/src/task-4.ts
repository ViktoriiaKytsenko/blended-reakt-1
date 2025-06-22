// Опис: Є масив, який містить розміри екрана у пікселях.

// const dimensions = [1920, 1080];

// Завдання:

// Додайте до змінної dimensions явну типізацію.
// Переконайтеся, що TypeScript не дозволяє додавати до масиву значення інших типів (наприклад, рядки).

type Dimensions = [number, number];

const dimensions: Dimensions = [1920, 1080];

console.log(dimensions);
