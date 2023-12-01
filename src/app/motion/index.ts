export const fadeIn = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 10,
      filter: 'blur(4px)'
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        ease: 'easeIn',
        delay
      }
    }
  }
}
