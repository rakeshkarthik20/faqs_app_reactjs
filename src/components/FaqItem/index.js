// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {show: false}

  onClickDisplay = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    const {faqItem} = this.props
    const {show} = this.state
    const {questionText, answerText} = faqItem
    return (
      <li className="faqItem-container">
        <div className="faqItem-visible-part">
          <h1 className="faq-heading">{questionText}</h1>
          <button
            type="button"
            onClick={this.onClickDisplay}
            className="button"
          >
            {show ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {show && (
          <div>
            <hr className="separator" />
            <p className="answer-text">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
