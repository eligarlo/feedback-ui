interface IHeaderProps {
  text: string
  bgColor?: string
  textColor?: string
}

const Header: React.FC<IHeaderProps> = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor ? bgColor : 'rgba(0,0,0,0.4)',
    color: textColor ? textColor : '#ff6a95',
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header
