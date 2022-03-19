export default class Game {
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx) {
    this.ctx = ctx;
    /** @type { import("./GameItem").default[] } */
    this.items = [];
  }

  init() {
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
  }

  update() {
    this.items.forEach((item) => {
      item.update();
    });
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.items.forEach((item) => {
      item.draw();
    });
  }

  /**
   *
   * @param {KeyboardEvent} event
   */
  onKeyDown = (event) => {
    this.items.forEach((item) => {
      item.onKeyDown(event);
    });
  };

  /**
   *
   * @param {KeyboardEvent} event
   */
  onKeyUp = (event) => {
    this.items.forEach((item) => {
      item.onKeyUp(event);
    });
  };
}
