//FOCO
$(document).ready(function () {
  $('#first').focus();
  $('input#input_text, textarea#textarea1').characterCounter();
  $('.modal').modal();
  $('.tooltipped').tooltip({ delay: 50 });
  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Hoje',
    clear: 'Limpar',
    closeOnSelect: true, // Close upon selecting a date,
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    formatSubmit: 'dd/mm/yyyy'

  });
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
function filtroCodigo(campo) {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchCodigo");
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

function atualizaPagina() {
  window.location.reload();
}