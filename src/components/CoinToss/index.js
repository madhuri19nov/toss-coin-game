import {Component} from 'react'

import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    testResultImage: headImgUrl,
    headCount: 0,
    tailCount: 0,
  }

  onTestCoin = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (toss === 0) {
      tossImage = headImgUrl
      latestHeadCount += 1
    } else {
      tossImage = tailImgUrl
      latestTailCount += 1
    }

    this.setState({
      testResultImage: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {testResultImage, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount

    return (
      <div className="tossCoin-container">
        <div className="tossGame-Container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss-details">Heads (or) Tails</p>
          <img src={testResultImage} alt="toss result" className="toss-image" />
          <button
            className="test-button"
            type="button"
            onClick={this.onTestCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
