const keys = {
  up: false,
  down: false,
  left: false,
  right: false
};

window.addEventListener("keydown", e => {
  if (e.key === "w" || e.key === "ArrowUp") keys.up = true;
  if (e.key === "s" || e.key === "ArrowDown") keys.down = true;
  if (e.key === "a" || e.key === "ArrowLeft") keys.left = true;
  if (e.key === "d" || e.key === "ArrowRight") keys.right = true;
});

window.addEventListener("keyup", e => {
  if (e.key === "w" || e.key === "ArrowUp") keys.up = false;
  if (e.key === "s" || e.key === "ArrowDown") keys.down = false;
  if (e.key === "a" || e.key === "ArrowLeft") keys.left = false;
  if (e.key === "d" || e.key === "ArrowRight") keys.right = false;
});

export const player = {
  x: 0,
  y: 0,
  speed: 2
};

export function updatePlayer() {
  if (keys.up) player.y -= player.speed;
  if (keys.down) player.y += player.speed;
  if (keys.left) player.x -= player.speed;
  if (keys.right) player.x += player.speed;
}

export function drawPlayer(ctx, camera) {
  ctx.fillStyle = "#0f0";
  ctx.fillRect(
    player.x - camera.x,
    player.y - camera.y,
    20,
    20
  );
}
