import * as THREE from "three";

export class Box extends THREE.Mesh {
  constructor({
    width,
    height,
    depth,
    color = "#00ff00",
    position = {
      x: 0,
      y: 0,
      z: 0,
    },
  }) {
    super(
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshStandardMaterial({ color })
    );
    this.position.set(position.x, position.y, position.z);
    this.castShadow = true;

    this.width = width;
    this.height = height;
    this.depth = depth;
    this.bottom = this.position.y - this.height / 2;
    this.top = this.position.y + this.height / 2;
  }
}
