// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="enter-phase" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                onChange={this.onChangeInput}
                id="phraseText"
                className="input"
                type="text"
                placeholder="Enter the phrase"
                value={searchInput}
              />
            </div>
            <p className="counter">No.of letters: {searchInput.length}</p>
          </div>
          <img
            className="img-style"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
