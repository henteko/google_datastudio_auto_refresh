window.onload = function(){
  setInterval(function() {
    console.log('refresh');
    document.getElementsByClassName("control-icon icon ng-scope")[0].click();
  }, 600000);
}
