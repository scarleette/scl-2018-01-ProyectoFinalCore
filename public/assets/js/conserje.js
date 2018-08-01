// Se crea función que va a subir el registro a la Database
const registerCreator = () => {
  const nameVisit = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const rut = document.getElementById('rut').value;
  const createdOn = document.getElementById('fecha').value;
  const goTo = document.getElementById('goTo').value;
  
  visitsCreate = firebase.database().ref('users/' + user.uid + +'/visits'); +
  visitsCreate.push({
    rut: rut,
    nameVisit: nameVisit,
    email: email,
    createdOn: user.metadata.createdAt || new Date(),
    uid: user.uid,
    goTo: goTo
  });
}

const drawRegister = () => {
  const table = document.getElementById('tabla');
  table.innerHTML = '';
  visitsCreate = firebase.database().ref('users/' + visitsCreate + '/visits')
    .on('child_added', (newVisit) => {
    table.innerHTML += `
      <tr>
        <th scope="row"></th>
        <td>${newVisit.val().rut}</td>
        <td>${newVisit.val().nameVisit}</td>
        <td>${newVisit.val().visitPhoto}%</td>
        <td>${newVisit.val().createdOn}%</td>
        <td>${newVisit.val().goTo}%</td>
      </tr>`;
    });
};
drawRegister();