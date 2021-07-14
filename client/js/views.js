const views = {
  GameView: class GameView extends PIXI.Container {
    constructor(gameState) {
      super();
      this.update(gameState);
    }

    update(gameState) {
      // TODO helper function for making a grid:
      function getColor(x, y) {}
      // create the graphic object for the game view
      // (based on this.gameState) and returns it
      const graphics = new PIXI.Graphics();
      let tileWidth = this.gameState.width / 25;
      for (let x = 0; x < gameState.width / tileWidth; x++) {
        for (let y = 0; y < gameState.height / tileWidth; y++) {
          // use pixi to create a tile graphic

          if (gameState.impassables.includes(`${x} ${y}`)) {
            graphics.beginFill(0x405580);
          } else {
            graphics.beginFill(getColor(x, y));
          }
          graphics.lineStyle(1, 0xd5d8de);
          graphics.drawRect(x * tileWidth, y * tileWidth, tileWidth, tileWidth);
        }
      }
      this.addChild(graphics);
    }
  },
  //TODO: impl
  MenuView: class MenuView extends PIXI.Container {
    constructor(gameState) {
      super();
      let background = new PIXI.Graphics();
      background.beginFill(0x000000, 0.9);
      background.drawRect(0, 0, gameState.width, gameState.height);

      let newGameButton = new uiWidgets.Button("Create Game", () => {
        console.log("this is the external click");
      });
      newGameButton.position.set(100, 100);

      this.addChild(background, newGameButton);
    }
  },
};
