import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import ModalComponent from '../data/ModalComponent.vue'
import EditImageModal from '../data/EditImageModal.vue'
import { createPinia, setActivePinia } from 'pinia'
import { createApp } from 'vue'

  const app = createApp({})
  import { defaultConfig, plugin } from '@formkit/vue'

describe('Edit image modal', () => {
  beforeEach(() => {
    const pinia = createPinia().use(plugin, defaultConfig())
    app.use(pinia)
    setActivePinia(pinia)
  })

  it('renders properly', () => {
    const wrapper = mount(EditImageModal, {props: {
        open: true
      }})
    expect(wrapper.text()).toContain('Set image source')
  })
})
