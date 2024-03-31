// string, number, boolean, undefined, null
var myName = null;
myName = "Eric";
//Arrays
var items = [5, "luis"];
var account = {
    name: "ERic",
    balance: 10,
};
var accounts;
//Class
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () { };
    return InvestmentAccount;
}());
