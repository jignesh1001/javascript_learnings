// const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://irctc1.p.rapidapi.com/api/v1/searchStation?query=BJU');
xhr.setRequestHeader('X-RapidAPI-Key', 'd6509cea52mshbd9261ea3bd5a99p1e2b67jsneace4f71ccb8');
xhr.setRequestHeader('X-RapidAPI-Host', 'irctc1.p.rapidapi.com');
xhr.onload = function(){
    const data = xhr.response
    const printdata = JSON.parse(data)
    console.log(printdata)
}
xhr.send();