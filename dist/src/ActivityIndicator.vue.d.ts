declare const _sfc_main: import("vue").DefineComponent<{
    absolute: BooleanConstructor;
    center: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    registry: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: (StringConstructor | ObjectConstructor)[];
        required: true;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    minHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
}, {
    registryInstance: unknown;
}, {
    is: null;
}, {
    classes(): {
        [x: number]: boolean;
        'activity-indicator-center': any;
        'activity-indicator-absolute': any;
    };
    style(): {
        width: string | undefined;
        maxWidth: string | undefined;
        minWidth: string | undefined;
        height: string | undefined;
        maxHeight: string | undefined;
        minHeight: string | undefined;
    };
}, {
    component(): (new () => import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>) | import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    absolute: BooleanConstructor;
    center: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: undefined;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    registry: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: (StringConstructor | ObjectConstructor)[];
        required: true;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    minHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
}>>, {
    absolute: boolean;
    center: boolean;
    label: string;
    size: string;
    registry: string;
    height: string | number;
    maxHeight: string | number;
    minHeight: string | number;
    width: string | number;
    maxWidth: string | number;
    minWidth: string | number;
}>;
export default _sfc_main;
