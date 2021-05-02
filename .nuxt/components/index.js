import { wrapFunctional } from './utils'

export { default as Card } from '../../components/Card.vue'
export { default as Katex } from '../../components/Katex.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyKatex = import('../../components/Katex.vue' /* webpackChunkName: "components/katex" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
