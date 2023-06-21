interface ContainerProps {
  children: React.ReactNode
  styles?: string
}

const Container: React.FC<ContainerProps> = ({ children, styles }) => {
  return (
    <div
      className={`2xl:max-w-screen-2xl xl:max-w-screen-xl md:mx-auto p-5 md:p-0 overflow-hidden ${styles}`}
    >
      {children}
    </div>
  )
}

export default Container
