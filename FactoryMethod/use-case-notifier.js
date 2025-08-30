// product interface
class Notifier {
  send() {
    throw new "send method must be implement..."();
  }
}

class SmsNotifier extends Notifier {
  send() {
    console.log("sending sms...");
    setTimeout(() => {
      console.log("sms sucessfully sended.");
    }, 2000);
  }
}

class EmailNotifier extends Notifier {
  send() {
    console.log("email sms...");
    setTimeout(() => {
      console.log("email sucessfully sended.");
    }, 200);
  }
}

// factory interface
class NotifierFactory {
  createNotifier() {
    throw new "createNotifier method must be implement..."();
  }
}

class EmailNotifierFactory extends NotifierFactory {
  createNotifier() {
    const emailNotifier = new EmailNotifier();
    return emailNotifier;
  }
}

class SmsNotifierFactory extends NotifierFactory {
  createNotifier() {
    const smsNotifier = new SmsNotifier();
    return smsNotifier;
  }
}

// client code
function clientCode(notifierCreator) {
  const notifier = notifierCreator.createNotifier();
  notifier.send();
}

clientCode(new SmsNotifierFactory());