let balance = 0;

function createBankAccount(name, amount, callback) {
    console.log(`Welcome, ${name}. You have ${balance} balance in your account.`);
    callback(name, amount);
}

function depositAmount(name, amount) {
    balance = balance + amount;
    console.log(`${name}, you have successfully deposited ${amount} in your account. Available balance is ${balance}.`);
}

function withdrawAmount(name, amount) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log(`Congratulations! You have successfully withdrawn ${amount}. Remaining balance is ${balance}.`);
    } else {
        console.log(`Sorry, ${name}. You do not have enough balance to withdraw.`)
    }
}

createBankAccount("Aly_09", 1000, depositAmount);
createBankAccount("Aly_09", 1000, withdrawAmount);