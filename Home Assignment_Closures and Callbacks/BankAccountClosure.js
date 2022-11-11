
function createBankAccount(name) {

    let balance = 0;
    console.log(`Welcome, ${name}. You have ${balance} balance in your account.`);

    function depositAmount(amount) {

        balance = balance + amount;
        console.log(`${name}, you have successfully deposited ${amount} in your account. Available balance is ${balance}.`);

    }

    function withdrawAmount(amount) {

        if (balance >= amount) {
            balance = balance - amount;
            console.log(`Congratulations! You have successfully withdrawn ${amount}. Remaining balance is ${balance}.`);
        }
        else {
            console.log(`Sorry, ${name}. You do not have enough balance to withdraw.`)
        }
    }
    return {
        depositAmount,
    withdrawAmount
    }

}

let bankAccount = createBankAccount("Aly_09");
bankAccount.depositAmount(1000)
bankAccount.withdrawAmount(1200)