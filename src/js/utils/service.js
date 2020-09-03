const fetchGoogle =() => {
  fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=fr')
.then(response => response.json())
.then(data => console.log('data :>> ', data.items[0]))
}
