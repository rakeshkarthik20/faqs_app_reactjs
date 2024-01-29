// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faq-list-container">
            {faqsList.map(each => (
              <FaqItem faqItem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
