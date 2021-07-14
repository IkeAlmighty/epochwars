const models = {
  Player: class Player {
    // Each possible StartZone for a player is a square defined by 2 points
    static StartZones = [
      [
        [0, 0],
        [4, 4],
      ],
      [
        [24, 24],
        [19, 19],
      ],
      [
        [24, 24],
        [19, 19],
      ],
      [
        [0, 24],
        [5, 19],
      ],
    ];
    StartZoneIndex = 0;
    constructor(color) {
      this.units = [];

      if (models.Player.StartZoneIndex >= models.Player.StartZones.length) {
        throw new Exception(
          "Not enough start zones for number of players specified!"
        );
      }
      this.startZone = models.Player.StartZones[models.Player.StartZoneIndex];
      models.Player.StartZoneIndex += 1;

      this.color = color;
      this.cards = [];
    }
  },
  GameState: class GameState {
    constructor(playerColors, impassables) {
      this.players = playerColors.map((color) => new models.Player(color));
      this.impassables = impassables;
      this.width = window.innerHeight - 1;
      this.height = window.innerHeight - 1;
    }
  },
};
