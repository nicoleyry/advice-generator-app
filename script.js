let adviceID = document.getElementById('advice-id');
let adviceQuote = document.getElementById('advice-quote');
let btn = document.getElementById('advice-btn');

btn.addEventListener('click', () => {
	axios({
		method: 'get',
		url: 'https://api.adviceslip.com/advice',
	}).then(function (response) {
		let data = response.data;
		console.log(data.slip);
		adviceID.innerHTML = data.slip.id;
		adviceQuote.innerHTML = data.slip.advice;
	});
});