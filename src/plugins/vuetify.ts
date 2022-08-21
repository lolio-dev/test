import '../styles/vuetify.scss';
import { createVuetify } from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { aliases, md } from 'vuetify/iconsets/md'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#640000'
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#640000',
          backgroud: '#b0bec5'
        }
      }
    }
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    }
  },
})
