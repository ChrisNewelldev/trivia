import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionssService.js";

function _draw() {
  let question = ProxyState.question
  let template = ''
  question.forEach(q => template += q.Template)
  document.getElementById('question').innerHTML = template

  document.getElementById('buttons').innerHTML = `
  <button type="button" class="btn btn-warning" ${ProxyState.previous ? '' : 'disabled'}
    onclick="app.peoplesController.getMore('previous')">previous</button>
  <button type="button" class="btn btn-success" ${ProxyState.next ? '' : 'disabled'}
    onclick="app.peoplesController.getMore('next')">next</button>
                        `


}


export default class PeoplesController {
  constructor() {
    // REGISTER ALL LISTENERS
    ProxyState.on('people', _draw)

    // GET DATA FOR CONTROLLER
    this.getAll()
  }

  async getAll() {
    try {
      await peoplesService.getAllPeople()
    } catch (error) {
      window.alert("Something went wrong: " + error)
    }
  }


  async getMore(direction) {
    try {
      await peoplesService.getAllPeople(ProxyState[direction])
    } catch (e) {
      window.alert("Something went wrong: " + e)
    }
  }
}