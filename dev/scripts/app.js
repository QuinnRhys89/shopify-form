const email = document.getElementById("email");
const interestedIn = document.getElementById("interestedIn");

const form = document.getElementById("form");

const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// const dotsAnimation =

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log(email.value);
  console.log(interestedIn.value);

  if (!regEx.test(email.value)) {
    $('#error-message').hide().html("Please enter a valid e-mail address").fadeIn();
  } else {
    document.getElementById("error-message").innerHTML = " ";
    document.getElementById("submit").value = "Submitting";
    document.getElementById("submit").disabled = true;

    setTimeout(function() {
      form.style.display = "none";
      document.getElementById("thankyou-msg").style.display = "inline";
    }, 2000);
  }
}
