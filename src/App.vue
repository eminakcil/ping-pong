<script setup>
import { onMounted, ref } from "vue";
import Brick from "@/Brick";
import Game from "@/Game";

() => {}; // volar extensions temp for jsdoc

/** @type { import("vue").Ref<HTMLCanvasElement> } */
const canvasRef = ref();

const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

const BRICK_WIDTH = 25;
const BRICK_HEIGHT = 180;

onMounted(() => {
  const ctx = canvasRef.value.getContext("2d");

  const firstBrick = new Brick(
    ctx,
    {
      x: 0,
      y: 0,
      width: BRICK_WIDTH,
      height: BRICK_HEIGHT,
    },
    {
      up: "KeyW",
      down: "KeyS",
    }
  );
  firstBrick.y = firstBrick.ctx.canvas.height / 2 - firstBrick.height / 2;

  const secondBrick = new Brick(
    ctx,
    {
      x: 0,
      y: 0,
      width: BRICK_WIDTH,
      height: BRICK_HEIGHT,
    },
    {
      up: "ArrowUp",
      down: "ArrowDown",
    }
  );
  secondBrick.x = secondBrick.ctx.canvas.width - secondBrick.width;
  secondBrick.y = secondBrick.ctx.canvas.height / 2 - secondBrick.height / 2;

  const game = new Game(ctx);
  game.items.push(firstBrick, secondBrick);
  game.init();

  setInterval(() => {
    game.update();
    game.draw();

    // draw rect
    ctx.beginPath();
    ctx.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.lineWidth = "1";
    ctx.strokeStyle = "#fff";
    ctx.stroke();
  }, 1000 / 60);
});
</script>
<template>
  <div
    style="
      height: 100%;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <canvas
      ref="canvasRef"
      :width="CANVAS_WIDTH"
      :height="CANVAS_HEIGHT"
    ></canvas>
  </div>
</template>
