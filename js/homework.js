
// 1. Перевірка текстових полів
let field1 = "Привіт";
let field2 = "Світ";

if (field1 !== "" && field2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// 2. Перевірка суми двох чисел
let num1 = 5;
let num2 = 7;
let sum = num1 + num2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

// 3. Перевірка наявності слова "JavaScript"
let text = "Мова програмування JavaScript дуже популярна.";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

// 4. Перевірка чи число входить у діапазон
let number = 15;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

// 5. Перевірка полів ім’я, email, пароль
let name = "Іван";
let email = "ivan@example.com";
let password = "qwerty";

let isNameValid = name.length >= 3;
let isEmailValid = email.includes("@") && email.indexOf(".") > email.indexOf("@");
let isPasswordValid = password.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}

