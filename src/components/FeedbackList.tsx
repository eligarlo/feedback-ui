import React from 'react'
import FeedbackItem from './FeedbackItem'
import { IFeedbackData } from '../utils/SharedUtils'
import { motion, AnimatePresence } from 'framer-motion'

interface IFeedbackListProps {
  feedbacks: IFeedbackData[]
  handleDelete: Function
}

const FeedbackList: React.FC<IFeedbackListProps> = ({ feedbacks, handleDelete }) => {
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
            <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
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
