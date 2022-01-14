import { useMemo } from 'react'
import { IFeedbackData } from 'utils/SharedUtils'

interface IFeedbackStatsProps {
  feedbacks: IFeedbackData[]
}

const FeedbackStats: React.FC<IFeedbackStatsProps> = ({ feedbacks }) => {
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
