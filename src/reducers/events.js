import _ from 'lodash'
import { CREATE_EVENT, READ_EVENT, READ_EVENTS, DELETE_EVENT, UPDATE_EVENT } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      // ここで送られてきたidのイベントを削除している
      // これを記述しないとビューにリロードしないと反映されない
      return { ...events }
      // スプレット演算子? スプレッド構文らしいが厳密に名前はないらしい
      // 配列の取り扱いが楽になり、関数もそのまま呼び出せるのだとか?
    default:
      return events
  }
}