type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
}

const baseClasses = "flex flex-col mx-auto px-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl";
const Container = ({className, children, ...props}: ContainerProps) => {
  return (
    <div className={`${baseClasses} ${className ?? ""}`} {...props}>{children}</div>
  )
}

export default Container