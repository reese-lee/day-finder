import { dayFinder } from './functions.js';
import $ from 'jquery';
// import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// $(function() {
//   let result = dayFinder();
//     // $(".day").text(result);
//     $(".result").text(result);
//
//   // });
// });


$(document).ready(function() {
  $("form#dayDate").submit(function(event) {
    event.preventDefault();
    let results = dayFinder();
    $("#result").text(results).show();
    console.log(results);
  });
});
