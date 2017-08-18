


function alerter() {
  alert("My name is cosmo");

}

function submitbtn() {
  $('#submitbutton').click(alerter);

}

function load() {
submitbtn();

}

$(document).ready(load);
