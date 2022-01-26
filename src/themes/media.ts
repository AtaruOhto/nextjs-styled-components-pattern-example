export const mqStatement = (min: number) => `@media (min-width): ${min}px`

const breakPoints = {
  tablet: 768,
  pcSmall: 960
}

export const themeMedias = {
  tablet: mqStatement(breakPoints.tablet),
  pcSmall: mqStatement(breakPoints.pcSmall)
}
