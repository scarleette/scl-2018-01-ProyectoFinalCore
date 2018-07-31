// Se crea función que va a subir el registro a la Database
const registerCreator = () => {


  visitsCreate = firebase.database().ref('users/' + user.uid + +'/visits'); +
  visitsCreate.set({
    rut: rut,
    nameVisit: nameVisit,
    visitPhoto: visitPhoto,
    createdOn: user.metadata.createdAt || new Date(),
    uid: user.uid,
    goTo: goTo
  });

}