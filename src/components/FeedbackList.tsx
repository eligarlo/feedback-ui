import React from 'react'
import { useContext } from 'react'
import FeedbackContext from 'context/feedback/FeedbackContext'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from 'components/FeedbackItem'

const FeedbackList: React.FC = () => {
  const { feedbacks } = useContext(FeedbackContext)

  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet.</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map(feedback => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {feedbacks.map(feedback => (
  //       <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

export default React.memo(FeedbackList)
