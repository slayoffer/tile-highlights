<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      .tile {
        width: 100px;
        height: 100px;
        border: 1px solid black;
      }

      .tile.selected {
        background: green;
      }

      .wrapper {
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <section></section>

    <script>
      function setupGrid(gridSize) {
        const section = document.getElementsByTagName("section")[0];

        for (let row = 0; row < gridSize; row++) {
          const wrapper = document.createElement("div");
          wrapper.classList.add("wrapper");
          for (let col = 0; col < gridSize; col++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            wrapper.appendChild(tile);
          }
          section.appendChild(wrapper);
        }
      }

      function setupClickListeners(gridSize, delay = 300) {
        let clickedTiles = [];

        document.addEventListener("click", function () {
          if (!event.target.classList.contains("tile")) return;
          if (clickedTiles.includes(event.target)) return;
          event.target.classList.add("selected");
          clickedTiles.push(event.target);

          if (clickedTiles.length >= gridSize ** 2) {
            const interval = setInterval(() => {
              const tile = clickedTiles.shift();
              tile.classList.remove("selected");
              if (clickedTiles.length === 0) {
                clearInterval(interval);
              }
            }, delay);
          }
        });
      }

      const gridSize = 3;
      setupGrid(gridSize);
      setupClickListeners(gridSize, 100);
    </script>
  </body>
</html>
