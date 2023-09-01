let adviceID = document.getElementById('advice-id');
let adviceQuote = document.getElementById('advice-quote');
let btn = document.getElementById('advice-btn');

let getAdvice = () => {
	axios({
		method: 'get',
		url: 'https://api.adviceslip.com/advice',
	}).then(function (response) {
		let data = response.data;
		adviceID.innerHTML = data.slip.id;
		adviceQuote.innerHTML = data.slip.advice;
	});
};

document.addEventListener('DOMContentLoaded', getAdvice);
btn.addEventListener('click', getAdvice);