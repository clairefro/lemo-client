import { Scene, GameObjects } from "phaser";

export class LoadingScene extends Scene {
  private gerenuk!: GameObjects.Sprite;

  constructor() {
    super("loading-scene");
  }

  preload(): void {
    this.load.baseURL = "assets/";

    this.load.image("gerenuk", "sprites/gerenuk.png");
  }

  create(): void {
    this.gerenuk = this.add.sprite(100, 100, "gerenuk");
    console.log("Loading scene was created");
  }
}
