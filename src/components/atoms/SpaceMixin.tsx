import { css } from 'styled-components'

type MarginModifyableArgs = {
  margin?: string
}

type MarginModifyableDefaultArgs = {
  defaultVal: string
  margin?: string
}

export const modifyableMargin = ({ margin }: MarginModifyableArgs) => css`
    ${margin ? `margin: ${margin};` : ''}
}
`

export const modifyableMarginDefault = ({ defaultVal, margin }: MarginModifyableDefaultArgs) => css`
    ${margin ? `margin: ${margin};` : `margin: ${defaultVal};`}
}
`
