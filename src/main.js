import { dayFinder } from './functions.js';
import $ from 'jquery';
// import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("form#dayDate").submit(function(event) {
    event.preventDefault();
    let results = dayFinder();
    $("#result").text(results).show();
  });
});
