import { shallowMount } from '@vue/test-utils'
import ItemList from '../ItemList.vue'
import Item from '../Item.vue'

describe('ItemList.vue', () => {
    test('renders an item for each item in window.items', () => {
        window.items = [{},{},{}]
        const wrapper = shallowMount(ItemList)
        expect(wrapper.findAll(Item))
            .toHaveLength(window.items.length)
    })
})
