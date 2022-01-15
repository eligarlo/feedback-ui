import { useContext, useMemo } from 'react'
import FeedbackContext from 'context/feedback/FeedbackContext'
import { IFeedbackData } from 'utils/SharedUtils'

const FeedbackStats: React.FC = () => {
  const { feedbacks } = useContext(FeedbackContext)

  // Calculate ratings average
  let average = useMemo(
    () =>
      feedbacks.reduce((acc: number, curr: IFeedbackData) => {
        return acc + curr.rating
      }, 0) / feedbacks.length,
    [feedbacks]
  )

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h4>
    </div>
  )
}

export default FeedbackStats
