import { App } from 'vue';
interface ActivityIndicatorPluginOptions {
    key?: string;
    indicators: {
        [key: string]: any;
    };
}
declare const _default: (app: App, options: ActivityIndicatorPluginOptions) => void;
export default _default;
