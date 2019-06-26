import $ from 'jquery';
import './styles.css';
import { Player, Role, Area, AreaMap } from './rpg-primary';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let player1 = new Player();
let map = new AreaMap();

let caveArea = new Area("You look around the cave and find a <strong>sword</strong> resting behind an old rock. There appears to be a house out of the cave to the north.", "sword");
let houseArea = new Area("The house is filled with cobwebs and mounds of dust. On a bookshelf to the right of the entrance one particular book titled \"<strong>Book of Wisdom</strong>\" catches your eye. Out past the porch in the back lies a ancient cliffside.", "Book of Wisdom");
let cliffArea = new Area("Near the edge of the cliff rests a peculiar <strong>stone</strong>.", "sight stone");

map.setAreaMap(caveArea);
map.setAreaMap(houseArea);
map.setAreaMap(cliffArea);

function updateJourney(playerName){
  $(".heroName").html(playerName);
  $("#journeyStart").delay(1200).fadeIn();
}

function checkCommand(command) {
  let commandLocal = command.toLowerCase();
  let name = "";
  switch (commandLocal) {
    case "look":
      $("#journeyStart").html(player1.currentArea.lookArea);
      break;
    case "inventory":
      $("#journeyStart").html("You are currently carrying: " + (player1.inventory).join(", "));
      break;
    case "stats":
      name = player1.role.name;
      name = name.charAt(0).toUpperCase() + name.slice(1);
      $("#journeyStart").html("Role: <span class=\"roleStyle\">"+ name +"</span><br>Strength: " + player1.role.strength + "<br>Intelligence: " + player1.role.intelligence + "<br>Agility: " + player1.role.agility);
      break;
    case "flee":
      if(player1.areaCount === 3){
        $("#journeyStart").html("You fall off the cliff and die. <strong>Game Over.</strong>");
      } else {
        player1.setArea(map);
        $("#journeyStart").html(player1.currentArea.lookArea);
      }
      break;
    case "fight":
      // value = 10;
      break;
    case "take":
      player1.setInventory(player1.currentArea.itemsArea);
      $("#journeyStart").html("You take the " + player1.currentArea.itemsArea);
      player1.currentArea.itemsArea = "";
      break;
    default:
      $("#journeyStart").html("\"" + command + "\"" + " is not a valid command. Please enter a valid command");
  }
}

function buttonListeners(){

  $("#commandCheck").click(function(){
    checkCommand($("#playerCommand").val());
    $("#playerCommand").val("");
  });

  $("#playerCommand").keyup(function(event){
    if(event.keyCode === 13) {
      checkCommand($("#playerCommand").val());
      $("#playerCommand").val("");
    }
  });
}

$(document).ready(function() {

  buttonListeners();

  $("#userPlayer").submit(function(event){
    event.preventDefault();

    $("#userPlayer").fadeOut(600);
    $("#commandLegend").delay(600).fadeIn();
    $("#playerCommandDiv").delay(1800).fadeIn();
    player1.name = $("#userName").val();
    console.log(player1);

    player1.setRole($("#roleSelect").val());
    console.log(player1);

    player1.setArea(map);

    updateJourney(player1.name);





    // player1.setInventory($("#armorSelect").val());
    // console.log(player1);


  });
});
