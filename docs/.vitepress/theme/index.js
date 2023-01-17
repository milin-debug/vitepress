

import DefaultTheme from 'vitepress/theme'
import Gear from '../../components/gear.vue'
const compPool={Gear}
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    Object.keys(compPool).map((comp) => {
        return ctx.app.component(comp, compPool[comp])
      })
  }
}