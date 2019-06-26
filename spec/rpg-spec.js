import { Player, Role } from './../src/rpg-primary.js';

describe('Player and Role', function() {

  var testRole, testPlayer;

  beforeEach(function() {
    testRole = new Role("fighter", 3, 1, 2);
    testPlayer = new Player("Knight");

  });

  it('should test that a role can be made', function() {

    expect(testRole.name).toEqual("fighter");
    console.log(testRole.name + " compare " + "fighter");

    expect(testRole.strength).toEqual(3);
    console.log(testRole.strength + " compare " + 3);

    expect(testRole.intelligence).toEqual(1);
    console.log(testRole.intelligence + " compare " + 1);

    expect(testRole.agility).toEqual(2);
    console.log(testRole.agility + " compare " + 2);



  });

  it('should test that a player can be made', function() {

    expect(testPlayer.name).toEqual("Knight");
    console.log(testPlayer.name + " compare " + "Knight");

    expect(testPlayer.xp).toEqual(0);
    console.log(testPlayer.xp + " compare " + 0);

    testPlayer.setXP(5);

    expect(testPlayer.xp).toEqual(5);
    console.log(testPlayer.xp + " compare " + 5);

    testPlayer.setInventory("sword");

    expect(testPlayer.inventory[0]).toEqual("sword");
    console.log(testPlayer.inventory[0] + " compare " + "sword");

    testPlayer.setRole("fighter");

    expect(testPlayer.role).toEqual(new Role("fighter", 3, 1, 2));
    console.log(testPlayer.role + " compare " + new Role("fighter", 3, 1, 2));
    expect(testPlayer.role).not.toEqual(new Role("mage", 3, 1, 2));
    console.log(testPlayer.role + "not equal " + new Role("mage", 1, 3, 2));

  });

});
