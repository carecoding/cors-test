fetch("https://carecoding-crispy-happiness-g9x7qgr6g6rfwvqg-3000.preview.app.github.dev/data", {
    method: "GET"
})
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.getElementById('app').innerText = `${data.name} likes ${data.favoriteFood}` 
  })