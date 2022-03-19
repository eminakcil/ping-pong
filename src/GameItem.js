export default class GameItem {
  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  constructor(ctx) {
    this.ctx = ctx;
  }
  /** @type { number } */
  x;
  /** @type { number } */
  y;
  /** @type { number } */
  width;
  /** @type { number } */
  height;
  update() {}
  draw() {}
  /**
   *
   * @param {KeyboardEvent} event
   */
  onKeyDown(event) {}

  /**
   *
   * @param {KeyboardEvent} event
   */
  onKeyUp(event) {}
}
