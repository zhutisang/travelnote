// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: 'dark'
    },
    display: {
      mobileBreakpoint: 'sm',
      platform: {
        android: true,
        ios: true,
        electron: true,
        chrome: true,
        edge: true,
        firefox: true,
        win: true,
        mac: true
      },
      thresholds: {
        xs: 600,
        sm: 960,
        md: 1264,
        lg: 1904,
        xl: 1920
      }
    }
  }
)
