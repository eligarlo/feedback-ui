import React from 'react'
import FeedbackItem from './FeedbackItem'
import { IFeedbackData } from '../utils/SharedUtils'

interface IFeedbackListProps {
  feedbacks: IFeedbackData[]
}

const FeedbackList: React.FC<IFeedbackListProps> = ({ feedbacks }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet.</p>
  }
  return (
    <div className='feedback-list'>
      {feedbacks.map(feedback => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  )
}

export default React.memo(FeedbackList)
