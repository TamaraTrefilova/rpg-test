import $ from 'jquery';
import './styles.css';
import { Player, Role } from './rpg-primary';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#userPlayer").submit(function(event){
    event.preventDefault();
    let player1 = new Player($("#userName").val());
    console.log(player1);
    player1.setRole($("#roleSelect").val());
    console.log(player1);


  });
});
