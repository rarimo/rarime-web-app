// eslint-disable-next-line no-restricted-imports

import { TYPOGRAPHY } from '@/theme/variables'
import { ExtendedTypographyOptions } from '@/types'

export const typographyTheme: ExtendedTypographyOptions = {
  htmlFontSize: 16,

  fontFamily: TYPOGRAPHY.txtFontFamily,
  fontSize: Number(TYPOGRAPHY.txtFontSizeRegular),

  fontWeightLight: TYPOGRAPHY.txtFontWeightLight,
  fontWeightRegular: TYPOGRAPHY.txtFontWeightRegular,
  fontWeightMedium: TYPOGRAPHY.txtFontWeightMedium,
  fontWeightBold: TYPOGRAPHY.txtFontWeightBold,

  h1: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightH1,
    fontSize: TYPOGRAPHY.txtFontSizeH1,
    lineHeight: TYPOGRAPHY.txtFontLineHeightH1,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingH1,
  },
  h2: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightH2,
    fontSize: TYPOGRAPHY.txtFontSizeH2,
    lineHeight: TYPOGRAPHY.txtFontLineHeightH2,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingH2,
  },
  h3: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightH3,
    fontSize: TYPOGRAPHY.txtFontSizeH3,
    lineHeight: TYPOGRAPHY.txtFontLineHeightH3,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingH3,
  },
  h4: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightH4,
    fontSize: TYPOGRAPHY.txtFontSizeH4,
    lineHeight: TYPOGRAPHY.txtFontLineHeightH4,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingH4,
  },
  h5: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightH5,
    fontSize: TYPOGRAPHY.txtFontSizeH5,
    lineHeight: TYPOGRAPHY.txtFontLineHeightH5,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingH5,
  },
  h6: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightH6,
    fontSize: TYPOGRAPHY.txtFontSizeH6,
    lineHeight: TYPOGRAPHY.txtFontLineHeightH6,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingH6,
  },
  subtitle1: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightSubtitle1,
    fontSize: TYPOGRAPHY.txtFontSizeSubtitle1,
    lineHeight: TYPOGRAPHY.txtFontLineHeightSubtitle1,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingSubtitle1,
  },
  subtitle2: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightSubtitle2,
    fontSize: TYPOGRAPHY.txtFontSizeSubtitle2,
    lineHeight: TYPOGRAPHY.txtFontLineHeightSubtitle2,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingSubtitle2,
  },
  subtitle3: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightSubtitle3,
    fontSize: TYPOGRAPHY.txtFontSizeSubtitle3,
    lineHeight: TYPOGRAPHY.txtFontLineHeightSubtitle3,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingSubtitle3,
  },
  subtitle4: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightSubtitle4,
    fontSize: TYPOGRAPHY.txtFontSizeSubtitle4,
    lineHeight: TYPOGRAPHY.txtFontLineHeightSubtitle4,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingSubtitle4,
  },
  body1: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightBody1,
    fontSize: TYPOGRAPHY.txtFontSizeBody1,
    lineHeight: TYPOGRAPHY.txtFontLineHeightBody1,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingBody1,
  },
  body2: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightBody2,
    fontSize: TYPOGRAPHY.txtFontSizeBody2,
    lineHeight: TYPOGRAPHY.txtFontLineHeightBody2,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingBody2,
  },
  body3: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightBody3,
    fontSize: TYPOGRAPHY.txtFontSizeBody3,
    lineHeight: TYPOGRAPHY.txtFontLineHeightBody3,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingBody3,
    textTransform: 'uppercase',
  },
  body4: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightBody4,
    fontSize: TYPOGRAPHY.txtFontSizeBody4,
    lineHeight: TYPOGRAPHY.txtFontLineHeightBody4,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingBody4,
  },
  button: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightButton,
    fontSize: TYPOGRAPHY.txtFontSizeButton,
    lineHeight: TYPOGRAPHY.txtFontLineHeightButton,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingButton,
    textTransform: 'none',
  },
  caption: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightCaption,
    fontSize: TYPOGRAPHY.txtFontSizeCaption,
    lineHeight: TYPOGRAPHY.txtFontLineHeightCaption,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingCaption,
  },
  overline: {
    fontFamily: TYPOGRAPHY.txtFontFamily,
    fontWeight: TYPOGRAPHY.txtFontWeightOverline,
    fontSize: TYPOGRAPHY.txtFontSizeOverline,
    lineHeight: TYPOGRAPHY.txtFontLineHeightOverline,
    letterSpacing: TYPOGRAPHY.txtFontLetterSpacingOverline,
    textTransform: 'uppercase',
  },
}
