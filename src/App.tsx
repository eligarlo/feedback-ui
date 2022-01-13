import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'
import { IFeedbackData } from './utils/SharedUtils'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [feedback, setFeedback] = useState<IFeedbackData[]>(FeedbackData)

  const onAddFeedback = (newFeedback: IFeedbackData) => {
    setFeedback([newFeedback, ...feedback])
  }

  const onDeleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <>
      <Header text='Feedback UI' />
      <div className='container'>
        <FeedbackForm handleAdd={onAddFeedback} />
        <FeedbackStats feedbacks={feedback} />
        <FeedbackList feedbacks={feedback} handleDelete={onDeleteFeedback} />
      </div>
    </>
  )
}

export default App
