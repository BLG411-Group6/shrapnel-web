var topic_title = document.getElementById('text');
var first_entry = document.getElementById('textarea');
document.querySelector('.form1').addEventListener('submit', function (e) {

//prevent the normal submission of the form
e.preventDefault();

console.log(topic_title.value);
console.log(first_entry.value);
//POST REQUEST

var request = new XMLHttpRequest();
request.open("POST", 'https://shrapnel-api.herokuapp.com/api/topics/', true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({
    title: topic_title.value
}));


//
const cont = document.getElementById('cont')
const card = document.createElement('div')
card.setAttribute('class', 'card card-outline-secondary my-4')

const card_header = document.createElement('div')
card_header.setAttribute('class', 'card-header')

const p1 = document.createElement('p')
p1.textContent = topic_title.value;
card_header.appendChild(p1);

card.appendChild(card_header);

const card_body = document.createElement('div');
card_body.setAttribute('class', 'card-body');

const p2 = document.createElement('p');
p2.textContent = first_entry.value;
card_body.appendChild(p2);

const smol = document.createElement('small');
smol.setAttribute('class', 'text-muted');

const p3 = document.createElement('p');
p3.textContent ='Posted by Anonymous on 3/1/17';
smol.appendChild(p3);
card_body.appendChild(smol);

card.appendChild(card_body);

cont.appendChild(card);

});
