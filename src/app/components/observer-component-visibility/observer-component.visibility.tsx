import { ReactNode, useEffect, useRef } from 'react'

type ObserverComponentVisibilityProps = {
  children: ReactNode
  onComponentVisible: () => void
  onComponentHidden?: () => void
}

export const ObserverComponentVisibility = ({
  onComponentVisible,
  onComponentHidden,
  children
}: ObserverComponentVisibilityProps) => {
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let wasVisible = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger the action when the target component becomes visible
          onComponentVisible()
          wasVisible = true
        } else if (wasVisible) {
          // Trigger the action when the target component becomes hidden after being visible
          onComponentHidden && onComponentHidden()
          wasVisible = false
        }
      },
      { threshold: 0.15 } // Adjust the threshold as needed
    )

    // Connect the observer to the target element
    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current)
      }
    }
  }, [children, onComponentVisible, onComponentHidden])

  return <div ref={targetRef}>{children}</div>
}
