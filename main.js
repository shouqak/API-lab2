let container = document.getElementById("container")

fetch("https://coffee.alexflipnote.dev/random.json")
  .then((res) => res.json())
  .then((data) => {
    let img = document.createElement("img")
    img.width = 200

    let change = () => {
      fetch("https://coffee.alexflipnote.dev/random.json")
        .then((res) => res.json())
        .then((imgData) => {
          img.src = imgData.file
        })
    }

    container.appendChild(img)

    setInterval(change, 3000)
  })
