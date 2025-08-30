// product interface
class PaymentMethod {
  process() {
    throw new Error("process method must be implemented");
  }
}

class PayPalMethod extends PaymentMethod {
  process(amount, userId) {
    console.log(`processing ${amount}$ for ${userId} user...`);
    setTimeout(() => {
      console.log("payment successfully processed, by using paypal method");
    }, 2000);
  }
}

class CreditCardMethod extends PaymentMethod {
  process(amount, userId) {
    console.log(`processing ${amount}$ for ${userId} user...`);
    setTimeout(() => {
      console.log(
        "payment successfully processed, by using credit card method"
      );
    }, 2000);
  }
}

// factory interface
class PaymentMethodFactory {
  createPaymentMethod() {
    throw new Error("createPaymentMethod method must be implemented");
  }
}

class PayPalMethodFactory extends PaymentMethodFactory {
  createPaymentMethod() {
    return new CreditCardMethod();
  }
}

class CreditCardMethodFactory extends PaymentMethodFactory {
  createPaymentMethod() {
    return new PayPalMethod();
  }
}

// client
function clientCode(paymentMethodCreator) {
  const paymentMethod = paymentMethodCreator.createPaymentMethod();
  paymentMethod.process(1500, 125);
}
clientCode(new PayPalMethodFactory());