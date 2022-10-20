import { factory } from '@vue-interface/component-registry';
import ActivityIndicator from './ActivityIndicator.vue';

interface ActivityIndicatorPluginOptions {
    key?: string,
    indicators: {
        [key: string]: any
    }
}

export default (app, options: ActivityIndicatorPluginOptions) => {
    const registry = factory();

    app.component('ActivityIndicator', ActivityIndicator);    
    app.provide(options.key || 'indicators', registry);

    if(options.indicators) {
        for(const [key, component] of Object.entries(options.indicators)) {
            registry.register(key, component);
        }
    }
};