import { Player, Role } from './../src/rpg-primary.js';

describe('Player and Role', function() {

  var testRole, testPlayer;

  beforeEach(function() {
    testRole = new Role("fighter", 3, 1, 2);
    testPlayer = new Player("Knight", testRole);

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

    expect(testPlayer.role).toEqual(testRole);
    console.log(testPlayer.role + " compare " + testRole);

  });

});
