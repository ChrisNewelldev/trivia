export default class Question {
  constructor({ name, height, birth_year, eye_color }) {
    this.name = name
    this.height = height
    this.birthYear = birth_year
    this.eyeColor = eye_color
  }


  get Template() {
    return `<li>${this.name} - ${this.height} GU - DOB: ${this.birthYear}</li>`
  }
}