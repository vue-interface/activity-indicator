declare const _sfc_main: import("vue").DefineComponent<{
    absolute: BooleanConstructor;
    center: BooleanConstructor;
    label: StringConstructor;
    size: {
        type: StringConstructor;
        default: string;
    };
    registry: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        required: true;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
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
    component(): Promise<any>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    absolute: BooleanConstructor;
    center: BooleanConstructor;
    label: StringConstructor;
    size: {
        type: StringConstructor;
        default: string;
    };
    registry: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        required: true;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
}>>, {
    absolute: boolean;
    center: boolean;
    size: string;
    registry: string;
}>;
export default _sfc_main;
