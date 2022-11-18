declare const _sfc_main: {
    props: {
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
            required: boolean;
        };
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
    };
    data: () => {
        is: null;
    };
    setup(props: any): {
        registryInstance: unknown;
    };
    computed: {
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
    };
    mounted(): Promise<void>;
    methods: {
        component(): Promise<any>;
    };
};
export default _sfc_main;
