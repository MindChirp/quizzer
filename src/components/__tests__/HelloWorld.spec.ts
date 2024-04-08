import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ModalComponent from '@/components/data/ModalComponent.vue'

describe('ModalComponent', () => {
  // Test if the component renders when the `open` prop is true
  it('renders when open', () => {
    const wrapper = mount(ModalComponent, {
      props: { open: true, title: 'Set image source' }
    })
    expect(wrapper.findComponent(ModalComponent).exists()).toBe(true)
  })
})
