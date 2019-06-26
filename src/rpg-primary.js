export class Player {
  constructor(name){
    this.name = name;
    // this.role = "";
    this.xp = 0;
    this.inventory = [];
  }

  setRole(selectedRole){
    if(selectedRole === "fighter"){
      this.role = new Role("fighter", 3, 1, 2);
    } else if(selectedRole === "mage"){
      this.role = new Role("mage", 1, 3, 2);
    } else if(selectedRole === "archer"){
      this.role = new Role("archer", 1, 2, 3);
    }
  }

  setXP(xpValue){
    this.xp = xpValue;
  }

  setInventory(inventoryValue){
    this.inventory.push(inventoryValue);
  }

  getItemPower(item){
    for (let i = 0; i < this.inventory.length; i++) {
      if(this.inventory[i]===item){
        return this[i][1];
      }
    }
  }
}

// export class InventoryItems {
//   this.items = [["sword", "strength"], ["sight stone", "agility"], ["book of wisdom", "intelligence"]];
//
// }

export class Role {
  constructor(name, strength, intelligence, agility){
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.agility = agility;
  }
}
