//FOCO
$(document).ready(function () {
    $('#first').focus();
    $('input#input_text, textarea#textarea1').characterCounter();
    $('.modal').modal();
    $('.tooltipped').tooltip({delay: 50});
});

//menuLateral
$(".button-collapse").sideNav();

function filtroSolicitante(campo) {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchSolicitante");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableChamados");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[campo];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
function filtroSetor(campo) {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchSetor");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableChamados");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[campo];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }