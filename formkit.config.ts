import { nb } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'

/* 
  This file is not used in the main.ts file, even though it should be. 
  This needs to be fixed if we want to configure formkit.

*/
export default defaultConfig({
  locales: { nb },
  locale: 'nb'
})
