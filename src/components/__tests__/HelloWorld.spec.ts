import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ModalComponent from '@/components/data/ModalComponent.vue'
import InfoRowComponent from '@/components/data/InfoRowComponent.vue';
describe('ModalComponent', () => {
  // Test if the component renders when the `open` prop is true
  it('renders when open', () => {
    const wrapper = mount(ModalComponent, {
      props: { open: true, title: 'Set image source' }
    })
    expect(wrapper.findComponent(ModalComponent).exists()).toBe(true)
  })


  describe('InfoRowComponent', () => {
    // Test if the component properly renders the label and value
    it('renders label and value from props', () => {
      const label = 'Test Label';
      const value = 'Test Value';
      const wrapper = mount(InfoRowComponent, {
        props: { label, value }
      });

      expect(wrapper.find('.label').text()).toContain(label);
      expect(wrapper.find('.value').text()).toContain(value);
    });
    it('emits edit event when edit button is clicked', async () => {
      const wrapper = mount(InfoRowComponent, {
        props: {
          label: 'Test Label',
          value: 'Test Value'
        },
        global: {
          stubs: {
            ButtonComponent: true // Stubs the ButtonComponent to avoid needing to import or mount it
          }
        }
      });

      await wrapper.find('.button').trigger('click');
      expect(wrapper.emitted()).toHaveProperty('edit');
    });
  })
})