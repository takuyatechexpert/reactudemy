import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
// import PropTypes from 'prop-types';

class App extends Component {

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div className="text-center">
          <div>value: {props.value}</div>
          <button onClick={props.increment}>+1</button>
          <button onClick={props.decrement}>-1</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// ↓↓↓↓↓↓↓↓↓↓ショートハンド↓↓↓↓↓↓↓↓↓↓↓↓

const mapDispatchToProps = ({increment,decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)



// React.Fragmentの例 ただの例の為これだけでは動かない可能性あり
// function App() {
//   return (
//     <React.Fragment>
//       <h1 className="text-center mt-5">
//         Hello, world!!
//       </h1>
//       <h1 className="text-center">
//         testMessage
//       </h1>
//     </React.Fragment>
//   );
// }



// 配列の例
// const App = () =>{
// const profiles = [
//   {name:"taro", age:10},
//   {name:"itiro", age:12},
//   {name:"takasi", age:6},
//   {name:"noName"}
// ]
// return(
//   <React.Fragment>
//     {profiles.map((profile, index) =>{
//       return <User name={profile.name} age={profile.age} key={index}/>
//     }

//     )}
//   </React.Fragment>
// )
// }
// const User = (props) =>{
//   return <div>hi, I am {props.name}, and {props.age} years old!</div>
// }
// 配列上に値がない時のデフォルト値を設定出来る
// User.defaultProps = {
//   age: 1
// }
// User.propTypes = {
//   name: PropTypes.string,
//    age: PropTypes.number.isRequired

// }



// returnを使わないパターン
// ()で囲むことで{}とreturnをつける必要がなくなる
// const App = () => (<Counter></Counter>)

// stateを使い場合の記述クラスコンポーネント
// class Counter extends Component {
//   constructor(props) {
//     // constructorは初期化処理を実行と言う意味
//     super(props)
//     // this.stateでこのクラスのstateを定義している
//     this.state = { count: 0 }
//     console.log(this.state)

  // ボタンを押すと発火する関数を定義
  // handlePlusButton = () => {
  //   console.log("test")
  //   console.log(this.state.count)

  //   // currentCountで今のカウント数を定義する
  //   // const currentCount = this.state.count
  //   // stateの状態を変える時に使うメソッドsetState
  //   // this.setState({ count: currentCount + 1 })

  //   // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓リファクタリング↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

  //   this.setState({ count: this.state.count + 1 })
  //   // 注意 this.state = { count: this.state.count + 1 }の様に直接stateを変更してはいけない setStateを使うこと
  // }
  
  // handleMinusButton = () => {
  //   console.log(this.state.count)
  //   this.setState({ count: this.state.count - 1})
  // }
//   }
