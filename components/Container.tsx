interface ContainerProps {
  children: React.ReactNode
  styles?: string
}

const Container: React.FC<ContainerProps> = ({ children, styles }) => {
  return (
    <div
      className={`2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto px-3 2xl:px-0 overflow-hidden ${styles}`}
    >
      {children}
    </div>
  )
}

export default Container
