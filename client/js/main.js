const app = new PIXI.Application({width: 500, height: 500});

// init the viewport:
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.view.style.left = `${
  window.innerWidth / 2 - window.innerHeight / 2
}px`;
app.renderer.autoResize = true;
app.renderer.resize(window.innerHeight - 1, window.innerHeight - 1);

//add viewport:
document.body.appendChild(app.view);

// load textures
["button.json"].forEach((filename) => {
  PIXI.Loader.shared.add(filename, `textures/${filename}`);
});

// create impassable squares:
let impassables = helpers.generateImpassables(5465121);

//create a new game state:
let gameState = new models.GameState(
  ["blue", "red", "yellow", "green"],
  impassables
);

// create the menu view and show it:
app.stage.addChild(new views.MenuView(gameState));
