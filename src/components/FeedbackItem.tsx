import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { IFeedbackData } from 'utils/SharedUtils'
import Card from 'components/shared/Card'

interface IFeedbackItemProps {
  feedback: IFeedbackData
  handleDelete: Function
}

const FeedbackItem: React.FC<IFeedbackItemProps> = ({ feedback, handleDelete }) => {
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  )
}

export default React.memo(FeedbackItem)
