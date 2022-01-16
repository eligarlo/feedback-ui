import { createContext, useEffect, useState } from 'react'
import FeedbackData from 'data/FeedbackData'
import { IFeedbackData } from 'utils/SharedUtils'

// Create the FeedbackContext
interface IFeedbackContext {
  feedbacks: IFeedbackData[] | undefined
  feedbackEdit: IFeedbackEdit
  isLoading: boolean
  onAddFeedback?: (newFeedback: IFeedbackData) => void
  onDeleteFeedback?: (id: string) => void
  onEditFeedback?: (feedback: IFeedbackData) => void
  onUpdateFeedback?: (feedback: IFeedbackData) => void
}

const defaultState: IFeedbackContext = {
  // feedbacks: FeedbackData, // Hard coded data from the frontend
  feedbacks: [],
  feedbackEdit: {
    feedback: { id: '', rating: 0, text: '', timeStamp: 0 },
    edit: false,
  },
  isLoading: true,
}

const FeedbackContext = createContext<IFeedbackContext>(defaultState)

// Create the FeedbackProvider
interface IFeedbackProvider {
  children: React.ReactNode
}

interface IFeedbackEdit {
  feedback: IFeedbackData
  edit: boolean
}

export const FeedbackProvider: React.FC<IFeedbackProvider> = ({ children }) => {
  // const [feedbacks, setFeedbacks] = useState<IFeedbackData[]>(defaultState.feedbacks) // Hard coded data from the frontend
  const [feedbacks, setFeedbacks] = useState<IFeedbackData[] | undefined>()
  const [feedbackEdit, setFeedbackEdit] = useState<IFeedbackEdit>(defaultState.feedbackEdit)
  const [isLoading, setIsLoading] = useState<boolean>(defaultState.isLoading)

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('/feedbacks?_sort=timeStamp&_order=desc')
    const data = await response.json()

    setFeedbacks(data)
    setIsLoading(false)
  }

  // Add Feedback
  const onAddFeedback = async (newFeedback: IFeedbackData) => {
    const response = await fetch('/feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    feedbacks && setFeedbacks([data, ...feedbacks])
  }

  // Delete Feedback
  const onDeleteFeedback = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`/feedbacks/${id}`, { method: 'DELETE' })

      feedbacks && setFeedbacks(feedbacks.filter(item => item.id !== id))
    }
  }

  // Update Feedback
  const onUpdateFeedback = async (updatedFeedback: IFeedbackData) => {
    const response = await fetch(`/feedbacks/${updatedFeedback.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFeedback),
    })

    const data = await response.json()
    feedbacks &&
      setFeedbacks(
        feedbacks.map(feedback =>
          feedback.id === updatedFeedback.id ? { ...feedback, ...data } : feedback
        )
      )
  }

  // Set item to be updated
  const onEditFeedback = (feedback: IFeedbackData) => {
    setFeedbackEdit({
      feedback,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        isLoading,
        onAddFeedback,
        onDeleteFeedback,
        onEditFeedback,
        onUpdateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
