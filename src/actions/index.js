import axios from 'axios'
// リデューサーで再利用するらしい 再利用する場合はexportで記述する
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'


const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
  // 上記でconstを定義しているので、そこから呼び出しているその為、通常では''が必要だが変数として呼び出しているので''は必要ない
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({type: READ_EVENTS, response})
}

export const postEvent = values => async dispatch => {
  // 上記でconstを定義しているので、そこから呼び出しているその為、通常では''が必要だが変数として呼び出しているので''は必要ない
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  dispatch({type: CREATE_EVENT, response})
}