function Main (){
  //
  const form = document.querySelector('.form');
  //
  const pessoas = [];
  //
  function receivesData(Event){
    Event.preventDefault();

    const name = form.querySelector('#name');
    const surname = form.querySelector('#surname');
    const height = form.querySelector('#height');
    const width = form.querySelector('#width');
    //
    pessoas.push({
      name: name.value,
      surname: surname.value,
      height: height.value,
      width: width.value
    })
    console.log(pessoas)
  };
  form.addEventListener('submit', receivesData);
};
Main();