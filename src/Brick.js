import GameItem from "./GameItem";

export default class Brick extends GameItem {
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   *
   * @param {object} brickOptions
   * @param {number} brickOptions.x
   * @param {number} brickOptions.y
   * @param {number} brickOptions.width
   * @param {number} brickOptions.height
   *
   * @param {object} movementKeyCodes
   * @param {string} movementKeyCodes.up
   * @param {string} movementKeyCodes.down
   */
  constructor(ctx, brickOptions, movementKeyCodes) {
    super(ctx);

    this.x = brickOptions.x;
    this.y = brickOptions.y;
    this.width = brickOptions.width;
    this.height = brickOptions.height;

    this.upKeyCode = movementKeyCodes.up;
    this.downKeyCode = movementKeyCodes.down;

    this.dirY = 0;
    this.speed = 10;
  }

  update() {
    switch (this.dirY) {
      case -1:
        this.y -= this.speed;
        break;
      case 1:
        this.y += this.speed;
        break;
      default:
        break;
    }

    // teleport to bottom if outside of area
    if (this.y + this.height > this.ctx.canvas.height)
      this.y = this.ctx.canvas.height - this.height;

    // teleport to top if outside of area
    if (this.y < 0) this.y = 0;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.lineWidth = "1";
    this.ctx.strokeStyle = "#fff";
    this.ctx.stroke();
  }

  /**
   *
   * @param {KeyboardEvent} event
   */
  onKeyDown(event) {
    switch (event.code) {
      case this.upKeyCode:
        this.dirY = -1;
        break;

      case this.downKeyCode:
        this.dirY = 1;
        break;

      default:
        break;
    }
  }

  /**
   *
   * @param {KeyboardEvent} event
   */
  onKeyUp(event) {
    if (event.code == this.downKeyCode || event.code == this.upKeyCode) {
      this.dirY = 0;
    }
  }
}
