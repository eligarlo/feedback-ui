import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from 'context/feedback/FeedbackContext'
import AboutPage from 'pages/AboutPage'
import Header from 'components/Header'
import FeedbackForm from 'components/FeedbackForm'
import FeedbackStats from 'components/FeedbackStats'
import FeedbackList from 'components/FeedbackList'
import AboutIconLink from 'components/AboutIconLink'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback UI' />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
