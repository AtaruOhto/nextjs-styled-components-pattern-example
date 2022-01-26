import { themeColors } from './colors'
import { themeFonts } from './fonts'
import { themeMedias } from './media'
import { themeSpaces } from './spaces'
import { themeZindexes } from './zIndexes'

export const appTheme = {
  colors: themeColors,
  spaces: themeSpaces,
  fonts: themeFonts,
  medias: themeMedias,
  zIndexes: themeZindexes
}

export type AppTheme = typeof appTheme
