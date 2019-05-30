import { DateSolver, dayFinder } from './functions.js';
import $ from 'jquery';
// import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("form#dayDate").submit(function(event) {
    event.preventDefault();
    let date = $("form#dayDate").val().toString();
    let dateSolver = new DateSolver(date);
    let results = dateSolver.dayFinder(date);
    $("#result").text(results).show();
  });
});
