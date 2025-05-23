import Shape from "./Shape";

export default class Rect extends Shape {
  public icon?: string;
  public iconImage?: HTMLImageElement;
  public type = 1;
  constructor(item: any, index: number) {
    super(item, index);
    this.icon = item.icon;
    if (this.icon) {
      this.iconImage = new Image();
      this.iconImage.src = this.icon;
    }
  }
  get ctrlsData() {
    const [[x0, y0], [x1, y1]] = this.coor;
    return [
      [x0, y0],
      [x0 + (x1 - x0) / 2, y0],
      [x1, y0],
      [x1, y0 + (y1 - y0) / 2],
      [x1, y1],
      [x0 + (x1 - x0) / 2, y1],
      [x0, y1],
      [x0, y0 + (y1 - y0) / 2],
    ];
  }
}
