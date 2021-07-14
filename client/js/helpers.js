const helpers = {
  createLobbyCode: () =>
    Math.floor(Math.random() * new Date().getTime() + 10000000),
  Generator: class Generator {
    constructor(seed) {
      this.seed = seed;
      this.__rand_step = 0;
    }

    nextInt(max) {
      this.__rand_step += 37;
      return Math.floor(
        this.__mulberry32(this.seed + this.__rand_step)() * max
      );
    }

    // CREDIT:
    // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
    // stack overflow user 'bryc'
    __mulberry32(a) {
      return function () {
        var t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
  },

  generateImpassables: (seed) => {
    let impassables = [];
    let gen = new helpers.Generator(seed);
    for (let i = 0; i < 25; i++) {
      let coords;
      do {
        coords = `${gen.nextInt(25)} ${gen.nextInt(25)}`;
      } while (impassables.includes(coords));
      impassables.push(coords);
    }

    return impassables;
  },
};
