import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { api } from "./AxiosService.js"

class sService {
  async getAllQuestion(url = 'question') {
    // NOTE any string passed into the request, is concat'ed on to the end of baseURL with an optional '/'
    // ALL AXIOS REQUESTS RETURN A PROMISE  

    const res = await api.get(url)
    // whenever you work with axios it wraps the response in an object, with the property 'data' being the response info
    console.log(res.data.results)

    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous

    // itterate over the array of POJOs and turn them into Person
    let questions = res.data.results.map(q => new Question(q))
    ProxyState.questions = questions
  }

}

export const questionsService = new QuestionsService()