const uiWidgets = {
  // TODO: reimpl without background image for button
  Button: class Button extends PIXI.Sprite {
    constructor(text, onClick) {
      super(PIXI.Texture.from("../textures/button_0.png"));
      this.buttonMode = true;
      this.interactive = true;
      this.label = new PIXI.Text(text);
      this.on("pointerdown", () => {
        // put generalized onClick code here
        console.log("internal code running");

        // call button specific code:
        onClick();
      });

      this.addChild(this.label);
    }
  },
  //TODO: impl
  TextField: class TextField {},
};
