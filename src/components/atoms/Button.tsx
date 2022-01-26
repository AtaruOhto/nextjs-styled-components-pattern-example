import styled, { css, DefaultTheme } from 'styled-components'
import { modifyableMargin } from './SpaceMixin'

// Button Sizes
const large = (theme: DefaultTheme) => css`
  font-size: ${theme.fonts.button.large.fontSize};
  height: 48px;
`

const medium = (theme: DefaultTheme) => css`
  font-size: ${theme.fonts.button.medium.fontSize};
  height: 40px;
`

const small = (theme: DefaultTheme) => css`
  font-size: ${theme.fonts.button.small.fontSize};
  height: 36px;
`

const ButtonSizes = {
  large: large,
  medium: medium,
  small: small
}

// Button Types
const primary = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.btn.primary};
  color: ${theme.colors.text.white};

  &:hover {
    background-color: ${theme.colors.btn.primaryHover};
  }
`

const secondary = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.btn.secondary};
  color: ${theme.colors.text.white};

  &:hover {
    background-color: ${theme.colors.btn.secondaryHover};
  }
`

const danger = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.btn.danger};
  color: ${theme.colors.text.white};

  &:hover {
    background-color: ${theme.colors.btn.dangerHover};
  }
`

const ButtonTypes = {
  primary: primary,
  secondary: secondary,
  danger: danger
}

type Props = {
  btnSize: keyof typeof ButtonSizes
  btnType: keyof typeof ButtonTypes
  margin?: string
}

export const Button = styled.button<Props>`
  border-radius: 4px;
  font-weight: 700;
  padding: 0 24px;
  text-align: center;

  ${({ margin }) => modifyableMargin({ margin })}
  ${({ btnSize, theme }) => ButtonSizes[btnSize](theme)}
  ${({ btnType, theme }) => ButtonTypes[btnType](theme)}
`
