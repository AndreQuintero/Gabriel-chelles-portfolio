import styled from 'styled-components'

export const ShowcaseSlider = styled.div`
  overflow: hidden;
  margin-top: 1.6rem;
  .slick-track {
    display: flex;
    margin: -10px 13%; /* Adjust the negative margin to control the gap size for rows and columns */
  }

  .slick-slide {
    margin: 10px 10px; /* Adjust the margin to match the negative margin above */
  }
`
