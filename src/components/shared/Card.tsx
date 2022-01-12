interface ICardProps {
  children: React.ReactNode
  reverse?: boolean
}

const Card: React.FC<ICardProps> = ({ children, reverse }) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

export default Card
