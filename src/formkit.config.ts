import { en } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import '@formkit/themes/genesis'

export default defaultConfig({
  locales: { en },
  locale: 'en',
  icons: {
    ...genesisIcons
  }
})
