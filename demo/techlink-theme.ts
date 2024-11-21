import type { GlobalThemeOverrides } from 'naive-ui'
import tokens from './tokens'

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: tokens.color.brand.primary.default,
    primaryColorHover: tokens.color.brand.primary.hover,
    primaryColorPressed: tokens.color.brand.primary.active,
    borderRadius: '4px'
  },
  Button: {
    // textColor: '#FF0000',
  },
  Input: {}
}
