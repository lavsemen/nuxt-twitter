export default class Uitls {
  static getColorFromName(colorName, power = 400) {
    return `bg-${colorName}-${power}`
  }
}