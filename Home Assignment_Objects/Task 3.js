const userAccount = {
    "bankAccount" : [
        {
        bankAccountID: "aleezus",
        accountNumber: "0-6092-022",
        credentials:
        { 

            "username" : "aleezus", 
            "password" : "ittehgaps1", 
            "pin" : "6465", 

        },
        balance : 1000,
        createdAt : "20/10/2022",
        }
    ],

    debitCard : "1234 5678 1011 1213",
    firstName : "Aly",
    lastName : "Macabenta",
    validID : [
        { 

        "typeID" : "passport", 
        "idNumber" : "P9876544Z" 

        },
    ],
    address : "Singapore",

    "getaccountNumber": function () {
        for (detail of this.bankAccount) {
            return (detail.accountNumber);
    }
},

    "getbalance": function () {
        for (detail of this.bankAccount) {
            return (detail.balance);
    }
}
}

function getAccountDetails(username, password) {

        if (username == "aleezus" && password == "ittehgaps1") {
            console.log(`Login successful. \n Account number: ${userAccount.getaccountNumber()} \n Balance: ${userAccount.getbalance()}`); 
        }

        else {
        console.log("Sorry! Please try again.")
        }

        function withdrawMoney(amount) {

            if (username == "aleezus" && password == "ittehgaps1") {
                balance = userAccount.getbalance() - amount;
                console.log(`Login successful. \n Account number: ${userAccount.getaccountNumber()} \n Withdraw amount: ${amount} \n Available balance: ${balance}`)
            }

            else {
                console.log("Sorry! Please try again.")
            }

        }

        function depositMoney(amount) {

            if (username == "aleezus" && password == "ittehgaps1") {
                balance = userAccount.getbalance() + amount;
                console.log(`Login successful. \n Account number: ${userAccount.getaccountNumber()} \n Deposit amount: ${amount} \n Available balance: ${balance}`)
            }

            else {
                console.log("Sorry! Please try again.")
            }
        
        }

        return {
            withdrawMoney, depositMoney
        }
    }


let bankDetails = getAccountDetails("aleezus", "ittehgaps1");
bankDetails.withdrawMoney(500)
bankDetails.depositMoney(500)