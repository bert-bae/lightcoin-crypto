let balance = 500.00;

class account {
  constructor(name) {
    this.name = name;
    this.transactions = [];
    this.log = [];
    this.balance = 0;
  }
  getBalance() {
    return this.transactions.reduce((a, b) => { return a + b; });
  }
}

class transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    let today = new Date().toDateString();
    let response = `on ${today}: ${this.value}`;
    if (this.value > 0) {
      if (this.account.balance) {
        this.account.transactions.push(this.value);
        this.account.balance += this.value;
        this.account.log.push(`Deposit confirmed ${response}. Account balance ${this.account.balance}`);
      } else {
        this.account.transactions.push(this.value);
        this.account.balance = this.value;
        this.account.log.push(`Deposit confirmed ${response}. Account balance ${this.account.balance}`);
      }
    } else {
      if ((this.account.balace - this.value) > 0) {
        this.account.transactions.push(this.value);
        this.account.balance += this.value;
        this.account.log.push(`Withdrawal confirmed ${response}. Account balance ${this.account.balance}`);
      } else {
        this.account.log.push(`Withdrawal denied ${response}. Account balance ${this.account.balance}`);
      }
    }
  }
}

class withdrawal extends transaction {

  get value() {
    return -this.amount;
  }
}

class deposit extends transaction {

  get value() {
    return this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const bertAccount = new account('bertAccount');

let t1 = new deposit(150, bertAccount);
t1.commit();
let t2 = new withdrawal(500, bertAccount);
t2.commit();
let t3 = new deposit(1200, bertAccount);
t3.commit();
let t4 = new withdrawal(2000, bertAccount);
t4.commit();
let t5 = new deposit(1.50, bertAccount);
t5.commit();
let t6 = new withdrawal(700, bertAccount);
t6.commit();

console.log(bertAccount.log);
