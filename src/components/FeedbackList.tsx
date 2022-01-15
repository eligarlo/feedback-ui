import React from 'react'
import { useContext } from 'react'
import FeedbackContext from 'context/feedback/FeedbackContext'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from 'components/FeedbackItem'
import Spinner from 'components/shared/Spinner'

const FeedbackList: React.FC = () => {
  const { feedbacks, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <p>No Feedback Yet.</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks &&
          feedbacks.map(feedback => (
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
