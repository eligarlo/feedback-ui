import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import { IFeedbackData } from './utils/SharedUtils'

function App() {
  const [feedback, useFeedback] = useState<IFeedbackData[]>(FeedbackData)

  return (
    <>
      <Header text='Feedback UI' />
      <div className='container'>
        <FeedbackList feedbacks={feedback} />
      </div>
    </>
  )
}

export default App
