import { useContext, useMemo } from 'react'
import FeedbackContext from 'context/feedback/FeedbackContext'
import { IFeedbackData } from 'utils/SharedUtils'

const FeedbackStats: React.FC = () => {
  const { feedbacks } = useContext(FeedbackContext)

  // Calculate ratings average
  let average = useMemo(
    () =>
      feedbacks &&
      feedbacks.reduce((acc: number, curr: IFeedbackData) => {
        return acc + curr.rating
      }, 0) / feedbacks.length,
    [feedbacks]
  )

  const totalAverage = () => {
    if (average !== undefined) {
      return isNaN(average) ? 0 : average.toFixed(1)
    }
    return 0
  }

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks && feedbacks.length} Reviews</h4>
      <h4>Average Rating: {totalAverage()}</h4>
    </div>
  )
}

export default FeedbackStats
