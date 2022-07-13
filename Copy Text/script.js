function myfunction() {
  var text1 = document.getElementById("text");
  text1.select();

  text1.setSelectionRange(0, 1000);
  console.log(text1);
  navigator.clipboard.writeText(text1.value);
}

