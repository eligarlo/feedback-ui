import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { IFeedbackData } from 'utils/SharedUtils'
import FeedbackData from 'data/FeedbackData'
import AboutPage from 'pages/AboutPage'
import Header from 'components/Header'
import FeedbackForm from 'components/FeedbackForm'
import FeedbackStats from 'components/FeedbackStats'
import FeedbackList from 'components/FeedbackList'
import AboutIconLink from 'components/AboutIconLink'

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
    <Router>
      <Header text='Feedback UI' />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={onAddFeedback} />
                <FeedbackStats feedbacks={feedback} />
                <FeedbackList feedbacks={feedback} handleDelete={onDeleteFeedback} />
              </>
            }
          />

          <Route path='/about' element={<AboutPage />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App
