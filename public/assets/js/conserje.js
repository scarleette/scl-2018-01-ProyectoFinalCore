// Se crea función que va a subir el registro a la Database
const registerCreator = () => {
  const nameVisit = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const rut = document.getElementById('rut').value;
  const goTo = document.getElementById('goTo').value;
  const uid = document.getElementById('selectResidente').value;

  const visitKey = firebase.database().ref('users/' + uid + '/visits').push({
    rut: rut,
    nameVisit: nameVisit,
    email: email,
    uid: uid,
    goTo: goTo
  }).key;

  document.getElementById('canvas').toBlob((blob) => {
    firebase.storage().ref(`/visitor/${visitKey}`).put(blob)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          firebase.database().ref(`users/${uid}/visits/${visitKey}`).update({
            photoURL: downloadURL
          });
        }).catch(() => { });
      });
  })
}

const drawRegister = (users) => {
  const table = document.getElementById('tablaContenido');
  table.innerHTML = '';
  users.forEach((user) => {
    if(user.visits){
      Object.values(user.visits).forEach((visit) => {
        table.innerHTML += `
          <tr>
          <td><img src="${visit.photoURL}"></td>
          <td>${visit.rut}</td>
          <td>${visit.nameVisit}</td>
          <td>${visit.email}</td>
          <td>${visit.goTo}</td>
          </tr>`;
      })
    }
  });
};

const loadResidents = () => {
  firebase.database().ref('users/')
    .orderByChild('rol').equalTo('residente').once('value', (snapshot) => {
      let options = '';
      Object.values(snapshot.val()).forEach((user) => {
        options += `<option value="${user.uid}">${user.displayName}</option>`
      });
      drawRegister(Object.values(snapshot.val()));

      document.getElementById('selectResidente').innerHTML = options;
    })
}