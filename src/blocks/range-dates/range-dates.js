$('#range-dates__filter__start-date').datepicker({ 
  onSelect: function (fd, d, picker) { 
    $("#range-dates__filter__start-date").val(fd.split("-")[0]);
    $("#range-dates__filter__end-date").val(fd.split("-")[1]);
  }
});