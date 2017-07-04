
 function deleteAccount() {

      if(confirm("Do you want to delete an account ?  \n(Unfortuantely, this funtion won't delete data from table)") == true) {

            window.location.href='accountManagement.html';

      }
}

function deleteTableRow() {
      document.getElementById("myTable").deleteRow(1);
}

// ------------------------------------------- New Account Container Options ------------------------------------

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("editAccount");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that saves data
var updateBtn = document.getElementById("updateBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks 'save' button new data will be add to table
updateBtn.onclick = function() {

      var street1 = document.getElementById("street").value;
      var street2 = document.getElementById("street2").value;
      var city = document.getElementById("city").value;
      var state = document.getElementById("state").value;
      var postCode = document.getElementById("postCode").value;
      var country = document.getElementById("selectCountry").value;

      // delete all values
      document.getElementById('firstParagraph').innerHTML = '';
      document.getElementById('secondParagraph').innerHTML = '';
      document.getElementById('thirdParagraph').innerHTML = '';
      document.getElementById('fourthParagraph').innerHTML = '';
      document.getElementById('fifthParagraph').innerHTML = '';
      document.getElementById('sixthParagraph').innerHTML = '';

      // insert new values
      document.getElementById('firstParagraph').innerHTML = street1;
      document.getElementById('secondParagraph').innerHTML = street2;
      document.getElementById('thirdParagraph').innerHTML = city;
      document.getElementById('fourthParagraph').innerHTML = state;
      document.getElementById('fifthParagraph').innerHTML = postCode;
      document.getElementById('sixthParagraph').innerHTML = country;

      modal.style.display = "none";

}
