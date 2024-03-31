// string, number, boolean, undefined, null
let myName: string | null = null;
myName = "Eric";

//Arrays
let items = [5, "luis"];

//Objects
interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposit?: () => void;
}

const account: IAccount = {
  name: "ERic",
  balance: 10,
};

let accounts: IAccount[];

//Class
class InvestmentAccount implements IAccount {
  constructor(public name, public balance) {}
  private withdraw() {}
}
