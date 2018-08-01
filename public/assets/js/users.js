const hideAll = () => {
  document.getElementById("sectionRecepcionista").style.display = "none";
  document.getElementById('perfilAmin').style.display = 'none';
  document.getElementById('sectionResident').style.display = 'none';
  document.getElementById('out').style.display = 'none';
}

const showRols = (uid) => {
  firebase.database().ref('/users/' + uid).once('value', (snapshot) => {
    hideAll();
    document.getElementById('out').style.display = 'block';
    if (snapshot.val().rol === 'conserje') showRecepsionista();
    
    if (snapshot.val().rol === 'administrador') showAdmin();
    
    if (snapshot.val().rol === 'residente') showResident();
  });
}

const showRecepsionista = (user) => {
  document.getElementById('sectionRecepcionista').style.display = "block";
}

const showAdmin = (user) => {
  document.getElementById('perfilAmin').style.display = "block";
}

const showResident = (user) => {
  document.getElementById('sectionResident').style.display = "block";
}
