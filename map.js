export const mapData = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 2, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
];

export function drawMap(ctx, camera, tileSize = 32) {
  for (let y = 0; y < mapData.length; y++) {
    for (let x = 0; x < mapData[y].length; x++) {
      const tile = mapData[y][x];

      ctx.fillStyle =
        tile === 1 ? "#555" :
        tile === 2 ? "#a33" :
        "#222";

      ctx.fillRect(
        x * tileSize - camera.x,
        y * tileSize - camera.y,
        tileSize,
        tileSize
      );
    }
  }
}

