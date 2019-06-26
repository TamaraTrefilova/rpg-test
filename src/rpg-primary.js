export class Player {
  constructor(name, role){
    this.name = name;
    this.role = role;
    this.xp = 0;
    this.inventory = [];
  }

}


export class Role {
  constructor(name, strength, intelligence, agility){
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.agility = agility;
  }

}
