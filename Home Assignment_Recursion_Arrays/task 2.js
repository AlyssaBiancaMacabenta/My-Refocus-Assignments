let invoiceList = [
 "Invoice 008",
 "Invoice 007", 
 "Invoice 006",
 "Invoice 005"];

 function insertToBottom() {
    if (invoiceList.length==0) {
    invoiceList.push();
    }

    else {
        let i = invoiceList.pop();
        insertToBottom();
        invoiceList.push(i);
    }
 }

 function reverseList() {
    invoiceList.reverse();
 };


invoiceList.push("Invoice 004");
invoiceList.push("Invoice 003");
invoiceList.push("Invoice 002");
invoiceList.push("Invoice 001");

console.log(invoiceList.join(" "));
reverseList();
console.log(invoiceList.join(" "));