import * as THREE from "three";
import { Box } from "./Box.js";

export class Car extends THREE.Group {
  constructor({
    velocity = {
      x: 0,
      y: 0,
      z: 0,
    },
    gravity = -0.002,
  }) {
    super();
    this.velocity = velocity;
    this.gravity = gravity;
    this.init();
  }

  init() {
    this.hitBox = new Box({
      width: 1,
      height: 0.7,
      depth: 2.1,
      color: "#ff0000",
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    });
    // this.add(this.hitBox);

    this.add(
      new Box({
        width: 1,
        height: 0.3,
        depth: 2,
        color: "#90EE90",
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
      })
    );

    this.add(
      new Box({
        width: 0.85,
        height: 0.45,
        depth: 1.1,
        color: "#ffffff",
        position: {
          x: 0,
          y: 0.3,
          z: 0.1,
        },
      })
    );

    this.add(
      new Box({
        width: 0.7,
        height: 0.3,
        depth: 1.115,
        color: "#000000",
        position: {
          x: 0,
          y: 0.3,
          z: 0.1,
        },
      })
    );

    this.add(
      new Box({
        width: 0.855,
        height: 0.3,
        depth: 0.7,
        color: "#000000",
        position: {
          x: 0,
          y: 0.3,
          z: -0.03,
        },
      })
    );

    this.add(
      new Box({
        width: 0.855,
        height: 0.3,
        depth: 0.2,
        color: "#000000",
        position: {
          x: 0,
          y: 0.3,
          z: 0.475,
        },
      })
    );

    this.add(
      new Box({
        width: 1.15,
        height: 0.1,
        depth: 0.25,
        color: "#00ff00",
        position: {
          x: 0,
          y: 0.075,
          z: -0.2,
        },
      })
    );

    this.add(
      new Box({
        width: 0.845,
        height: 0.35,
        depth: 2.1,
        color: "#00ff00",
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
      })
    );

    this.add(
      new Box({
        width: 1,
        height: 0.1,
        depth: 2,
        color: "#808080",
        position: {
          x: 0,
          y: -0.2,
          z: 0,
        },
      })
    );

    // Backwheels
    this.add(
      new Box({
        width: 1.05,
        height: 0.3,
        depth: 0.3,
        color: "#000000",
        position: {
          x: 0,
          y: -0.2,
          z: 0.6,
        },
      })
    );

    this.add(
      new Box({
        width: 1.055,
        height: 0.1,
        depth: 0.1,
        color: "#FFFFFF",
        position: {
          x: 0,
          y: -0.2,
          z: 0.6,
        },
      })
    );

    // Frontwheels
    this.add(
      new Box({
        width: 1.05,
        height: 0.3,
        depth: 0.3,
        color: "#000000",
        position: {
          x: 0,
          y: -0.2,
          z: -0.6,
        },
      })
    );

    this.add(
      new Box({
        width: 1.055,
        height: 0.1,
        depth: 0.1,
        color: "#FFFFFF",
        position: {
          x: 0,
          y: -0.2,
          z: -0.6,
        },
      })
    );
  }

  updateSides() {
    this.hitBox.bottom = this.position.y - this.hitBox.height / 2;
    this.hitBox.top = this.position.y + this.hitBox.height / 2;
    this.hitBox.right = this.position.x + this.hitBox.width / 2;
    this.hitBox.left = this.position.x - this.hitBox.width / 2;
  }

  update(ground) {
    this.updateSides();

    if (
      this.hitBox.right + this.velocity.x <= ground.right &&
      this.hitBox.left + this.velocity.x >= ground.left
    ) {
      this.position.x += this.velocity.x;
    }
    this.position.z += this.velocity.z;

    this.applyGravity(ground);
  }

  applyGravity(ground) {
    this.velocity.y += this.gravity;
    if (this.hitBox.bottom + this.velocity.y <= ground.top) {
      this.velocity.y *= 0.5;
      this.velocity.y = -this.velocity.y;
    } else {
      this.position.y += this.velocity.y;
    }
  }
}
