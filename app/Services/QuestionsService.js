import { ProxyState } from "../AppState.js"
import Person from "../Models/Person.js"
import { api } from "./AxiosService.js"

class PeoplesService {
  async getAllPeople(url = 'people') {
    // NOTE any string passed into the request, is concat'ed on to the end of baseURL with an optional '/'
    // ALL AXIOS REQUESTS RETURN A PROMISE  

    const res = await api.get(url)
    // whenever you work with axios it wraps the response in an object, with the property 'data' being the response info
    console.log(res.data.results)

    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous

    // itterate over the array of POJOs and turn them into Person
    let people = res.data.results.map(p => new Person(p))
    ProxyState.people = people
  }

}

export const peoplesService = new PeoplesService()