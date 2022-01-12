import React from 'react'
import FeedbackItem from './FeedbackItem'
import { IFeedbackData } from '../utils/SharedUtils'

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
      {feedbacks.map(feedback => (
        <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default React.memo(FeedbackList)
