import React from 'react'
import { useContext } from 'react'
import FeedbackContext from 'context/feedback/FeedbackContext'
import { FaTimes } from 'react-icons/fa'
import { IFeedbackData } from 'utils/SharedUtils'
import Card from 'components/shared/Card'

interface IFeedbackItemProps {
  feedback: IFeedbackData
}

const FeedbackItem: React.FC<IFeedbackItemProps> = ({ feedback }) => {
  const { onDeleteFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button onClick={() => onDeleteFeedback && onDeleteFeedback(feedback.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  )
}

export default React.memo(FeedbackItem)
