import {Component} from 'react'
import './index.css'

class MatchGame extends Component {
  state = {
    gameOver: false,
    score: 0,
    timer: 60,
    imgUrl: imagesList[0].imageUrl,
  }

  componentDidMount() {
    this.timerId = setInterval(this.timerStart, 1000)
  }

  timerStart = () => {
    const {timer} = this.state
    if (timer !== 0) {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
      }))
    } else {
      this.setState({
        gameOver: true,
      })
    }
  }

  render() {
    const {score, timer, gameOver, imgUrl} = this.state

    return (
      <div className="app-container">
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="match-highlights-container">
            <p className="score">
              Score:
              <span>{score}</span>
            </p>
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-img"
              />

              <p className="timer">{timer} sec</p>
            </div>
          </div>
        </nav>
        <div className="bottom-container">
          {!gameOver && (
            <div>
              <img src={imgUrl} className="large-img-url" alt="match" />
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default MatchGame
