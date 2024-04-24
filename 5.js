// Адаптер (Adapter) — це патерн програмування, який дозволяє об'єктам з інтерфейсом несумісним з іншими об'єктами працювати разом,
// перетворюючи інтерфейс одного об'єкта на інтерфейс, очікуваний іншим об'єктом.

// Клас BankTransfer представляє собою систему для здійснення банківських переказів
class BankTransfer {
  // Зробіть метод initiateTransfer, який приймає amount та відповідає за ініціювання банківського переказу
  // Він приймає суму переказу як параметр
  initiateTransfer(amount) {
    // Для ініціювання банківського переказу спершу обчислюється сума з урахуванням комісії calculatedAmount = this.calculateFee(amount)
    const calculatedAmount = this.calculateFee(amount);
    // Виводимо інформацію про ініціювання банківського переказу Ініціюємо банківський переказ: $${calculatedAmount}
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }

  // Зробіть метод calculateFee, який відповідає за розрахунок комісії за переказ
  // Він приймає amount переказу як параметр та повертає число після розрахування комісії
  calculateFee(amount) {
    // Логіка розрахунку комісії за переказ amount * 1.02
    // Припустимо, комісія становить 2% від суми переказу
    return amount * 1.02; // 2% комісія
  }
}

// Клас WalletTransfer представляє собою систему для здійснення переказів з гаманця
class WalletTransfer {
  // Створіть метод processTransfer, який відповідає за здійснення переказу з гаманця
  // Він приймає суму переказу як параметр
  processTransfer(amount) {
    // Виводимо інформацію про здійснення переказу з гаманця Здійснюємо переказ з гаманця: $${amount}
    console.log(`Здійснюємо переказ з гаманця: $${amount}`);
  }
}

// Клас TransferAdapter виступає адаптером, який дозволяє нам користуватися
// методами WalletTransfer так, ніби це BankTransfer.
class TransferAdapter {
  // Робимо конструктор, що приймає об'єкт transferSystem типу WalletTransfer
  constructor(transferSystem) {
    // Зберігаємо посилання на об'єкт WalletTransfer у властивості transferSystem
    this.transferSystem = transferSystem;
  }

  // Робимо метод initiateTransfer, який адаптує API WalletTransfer до API BankTransfer.
  // Він приймає amount як аргумент та повертає результат виконання переказу.
  initiateTransfer(amount) {
    // Викликаємо допоміжний метод calculateFee для обчислення комісії за переказ та результат записуєм в константу calculatedAmount
    const calculatedAmount = this.calculateFee(amount);
    // Викликаємо метод processTransfer об'єкту WalletTransfer з calculatedAmount.
    // В результаті повертаємо результат виконання переказу.
    return this.transferSystem.processTransfer(calculatedAmount);
  }

  // Створюємо метод calculateFee, що приймає amount та обчислює суму комісії за переказ amount * 1.2, засновуючись на вхідній сумі.
  calculateFee(amount) {
    // Повертаємо amount * 1.02
    return amount * 1.02;
  }
}
console.log("Завдання 5 ====================================");
// Після виконання розкоментуйте код нижче

// Створимо екземпляри BankTransfer
const purchase1 = new BankTransfer();
purchase1.initiateTransfer(1000);

const purchase2 = new BankTransfer();
purchase2.initiateTransfer(10);

// Створимо екземпляр WalletTransfer
const walletTransfer = new WalletTransfer();

// Створимо адаптер та використаємо його для виконання переказу з гаманця
const adapter = new TransferAdapter(walletTransfer);
adapter.initiateTransfer(500);
