import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

@connect(
  state => {
    return { a: 1 }
  },
  dispatch => {
    return {
      ...bindActionCreators({}, dispatch),
    }
  },
)
class App extends Component {
  render() {
    return (
      <div>This app just test for swc decorators syntax</div>
    )
  }
}

export default App

// const mapStateToProps = state => {
//   return { a:1 }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     ...bindActionCreators({}, dispatch),
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App)
