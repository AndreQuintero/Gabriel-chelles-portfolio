import { MouseEvent, ComponentType, useRef } from 'react'

import * as S from './style'

export type CustomCursor = {
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void
}

export const WithCustomCursor = (Component: ComponentType<CustomCursor>) => {
  return function HOC() {
    const cursor = useRef<HTMLDivElement>(null)

    const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const axisX = e.clientX - rect.left
      const axisY = e.clientY - rect.top
      if (cursor && cursor.current) {
        const { x, y } = getCenterOfCursor(
          cursor.current.clientWidth,
          cursor.current.clientHeight,
          axisX,
          axisY
        )
        cursor.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    }

    const getCenterOfCursor = (
      widthElement: number,
      heightElement: number,
      xAxis: number,
      yAxis: number
    ) => {
      const x = xAxis - widthElement / 2
      const y = yAxis - heightElement / 2

      return { x, y }
    }

    return (
      <S.Wrapper>
        <S.Cursor ref={cursor}>
          <label> Ver mais </label>
        </S.Cursor>
        <Component onMouseMove={mouseMove} />
      </S.Wrapper>
    )
  }
}
