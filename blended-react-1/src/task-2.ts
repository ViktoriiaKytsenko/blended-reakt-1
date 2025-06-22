// Опис: Є функція, яка приймає суму (число) та тип валюти.

// function convertCurrency({amount, currency}) {
//   console.log(`Converting ${amount} to ${currency}`);
// }

// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.
type Currency = "USD" | "EUR" | "UAH";

type Converting = {
  amount: number;
  currency: Currency;
};

function convertCurrency({ amount, currency }: Converting): void {
  console.log(`Converting ${amount} to ${currency}`);
}

const currency: Currency = "EUR";

convertCurrency({ amount: 100, currency });
