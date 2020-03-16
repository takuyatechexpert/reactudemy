// リデューサーで再利用するらしい 再利用する場合はexportで記述する
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  // 上記でconstを定義しているので、そこから呼び出しているその為、通常では''が必要だが変数として呼び出しているので''は必要ない
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})