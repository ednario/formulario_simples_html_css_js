function Main (){
  //
  const primaryForm = document.querySelector('#primary-form');
  //
  const pessoas = [];
  //
  function receivesData(Event){
    Event.preventDefault()

    const name = primaryForm.querySelector('#name');
    const surname = primaryForm.querySelector('#surname');
    const height = primaryForm.querySelector('#height');
    const width = primaryForm.querySelector('#width');
    //
    pessoas.push({
      name: name.value,
      surname: surname.value,
      height: height.value,
      width: width.value
    })
    console.log(pessoas)
  };
  primaryForm.addEventListener('submit', receivesData);
};
Main();
