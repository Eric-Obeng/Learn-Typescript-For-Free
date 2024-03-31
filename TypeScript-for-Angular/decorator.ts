function MenuItems(itemID: string) {
  return function (value) {
    return class extends value {
      id = itemID;
    };
  };
}

@MenuItems("abc")
class Pizza {
  id: string;
}

@MenuItems("xyz")
class Hamburger {
  id: string;
}

console.log(new Pizza().id);
