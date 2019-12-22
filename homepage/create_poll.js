//SCRIPT TO BE USED FOR REQUESTS
document.querySelector('#final').addEventListener('click', function (e) {

  e.preventDefault();
  var question = document.getElementById('text')
  var options = document.getElementsByClassName('form-control here')
  console.log(question.value)
  question_text = question

  var options_text = []
  for (var i = 0; i < options.length; i++) {
    options_text.push(options[i].value)
    console.log(options[i].value);
    //Do something
  }


  jQuery.support.cors = true;
  jQuery.ajax({
      type: "POST",
      crossDomain: true,
      headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": "{{csrf_token}}",
          "Authorization": "Token " + localStorage["token"]
      },
      url: "https://shrapnel-api.herokuapp.com/api/polls/",
      data: JSON.stringify({
          "title": question_text,
          "options": JSON.stringify(options_text),
       }),
      success: function (response) {

      }
  });








  const cont = document.getElementById('cont')
  const card = document.createElement('div')
  card.setAttribute('class', 'card card-outline-secondary my-4')

  const card_header = document.createElement('div')
  card_header.setAttribute('class', 'card-header')

  const p1 = document.createElement('p')
  p1.textContent = question.value;
  card_header.appendChild(p1);

  card.appendChild(card_header);

  const card_body = document.createElement('div');
  card_body.setAttribute('class', 'card-body');

  options_text.forEach(createRadioElement)

  function createRadioElement(item) {

    var div = document.createElement('div');
    div.setAttribute('class', 'form-check');

    var radioInput = document.createElement('input');
    radioInput.setAttribute('class', 'form-check-input');
    radioInput.setAttribute('type', 'radio')
    radioInput.setAttribute('name', 'radiogroup')
    div.appendChild(radioInput)

    var label = document.createElement('label');
    label.setAttribute('class', 'form-check-label')
    var p = document.createElement('p')
    p.textContent = item
    label.appendChild(p)

    div.appendChild(label);
    card_body.appendChild(div)

  }
  card.appendChild(card_body)

  const div1 = document.createElement('div')
  div1.setAttribute('class', 'col-12 form group');
  var bbtn = document.createElement('button')
  bbtn.setAttribute('class', "btn btn-success")
  bbtn.setAttribute('type', "submit")
  bbtn.setAttribute('id', 'uservote')

  const vote = document.createElement('p')
  vote.textContent = 'Vote'
  bbtn.appendChild(vote)
  bbtn.style.width = "60px";
  bbtn.style.height = "40px";
  div1.style.padding = '0px 20px 20px 20px';
  div1.appendChild(bbtn)
  card.appendChild(div1)
  cont.appendChild(card)


});

document.getElementById('uservote').addEventListener('click', function (e) {


   //  var rates = document.getElementsByName('radiogroup');
   //  var rate_value;
   // for(var i = 0; i < rates.length; i++){
   //     if(rates[i].checked){
   //         rate_value = rates[i].value;
   //     }
   // }
   //
   //  console.log(rate_value)

   var selectedOption = $("input:radio[name=radiogroup]:checked").val()
   console.log(selectedOption)
});
