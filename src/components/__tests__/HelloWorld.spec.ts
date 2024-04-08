import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import EditImageModal from '../data/EditImageModal.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(EditImageModal, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
