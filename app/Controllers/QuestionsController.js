import { ProxyState } from "../AppState.js";
import { peoplesService } from "../Services/PeoplesService.js";

function _draw() {
  let people = ProxyState.people
  let template = ''
  people.forEach(p => template += p.Template)
  document.getElementById('people').innerHTML = template

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