import { shallowMount } from '@vue/test-utils'
import HomePage from '@/pages/index'

test('Should render homepage with NUXT text.', () => {
    const homePage = shallowMount(HomePage, {})

    expect(homePage.text()).toContain('NUXT - Search images from NASA:')
})