document.addEventListener('DOMContentLoaded', function () {
  hideAll();
  try {
    let app = firebase.app();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        document.getElementById("userLogin").innerHTML = "Hola " + user.displayName;
        showRols(user.uid);
      } else {
        hideAll();
        document.getElementById("userLogin").innerHTML = ""
        drawLogin();
      }
    });

  } catch (e) {
    console.error(e);
  }
});