import { FC } from 'react'

interface SectionWrapperProps {
  children: JSX.Element | JSX.Element[]
  className?: string
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className }) => {
  return (
    <section
      className={
        'h-fit w-full px-4 lg:px-28 my-10 lg:my-28 flex lg:flex-row flex-col gap-4' +
        className
      }>
      {children}
    </section>
  )
}

export default SectionWrapper
