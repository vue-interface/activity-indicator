import { factory } from '@vue-interface/component-registry';

export const registry = factory();

export function get() {
    return registry.get.apply(registry, arguments);
}

export function register() {
    return registry.register.apply(registry, arguments);
}

export function remove() {
    return registry.remove.apply(registry, arguments);
}

export function reset() {
    return registry.reset.apply(registry, arguments);
}