import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'
import { IFeedbackData } from './utils/SharedUtils'

function App() {
  const [feedback, setFeedback] = useState<IFeedbackData[]>(FeedbackData)

  const onDeleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <>
      <Header text='Feedback UI' />
      <div className='container'>
        <FeedbackStats feedbacks={feedback} />
        <FeedbackList feedbacks={feedback} handleDelete={onDeleteFeedback} />
      </div>
    </>
  )
}

export default App
