
var options = [];
document.getElementById('choice').addEventListener('click', function (e) {
  const choices = document.getElementById('choices')
  const form = document.createElement('form')
  form.setAttribute('class', "form-inline")

  //const card =  document.createElement('div')
  const delete1 = document.createElement('button')
  delete1.setAttribute('class', "btn btn-primary p-0")
  delete1.setAttribute('type', "submit")
  delete1.setAttribute('id', "rm_btn")
  delete1.style.width = "20px";
  delete1.style.height = "35px";
  const p = document.createElement('p')
  p.textContent = 'x'
  delete1.appendChild(p)

  const box = document.createElement('input')
  box.setAttribute('class', 'form-control here')
  box.setAttribute('name', 'text')
  box.setAttribute('placeholder', 'Enter option')

  form.appendChild(box);
  form.appendChild(delete1);
  choices.appendChild(form)

});
