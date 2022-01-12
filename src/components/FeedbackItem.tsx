import React from 'react'
import { IFeedbackData } from '../utils/SharedUtils'
import Card from './shared/Card'

interface IFeedbackItemProps {
  feedback: IFeedbackData
}

const FeedbackItem: React.FC<IFeedbackItemProps> = ({ feedback }) => {
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  )
}

export default React.memo(FeedbackItem)
