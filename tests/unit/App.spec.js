import { shallowMount } from '@vue/test-utils'
import App from '@/pages/index'

test('Should render homepage with NUXT text.', () => {
    const app = shallowMount(App, {
        propsData: {
            results: []
        }
    })

    expect(app.text()).toContain('NUXT - Search images from NASA:')
})