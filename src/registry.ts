import { factory } from '@vue-interface/component-registry';

export const registry = factory();

export function get(...args) {
    return registry.get(...args);
}

export function register(...args) {
    return registry.register(...args);
}

export function remove(...args) {
    return registry.remove(...args);
}

export function reset(...args) {
    return registry.reset(...args);
}