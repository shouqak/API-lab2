let container = document.getElementById("container")
    let img = document.createElement("img")
 img.width = 200


    let change = () => {
      fetch("https://coffee.alexflipnote.dev/random.json")
        .then((res) => res.json())
        .then((Data) => {
          img.src = Data.file
        })
    }

    container.appendChild(img)

    setInterval(change, 3000)

