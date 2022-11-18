<template>
    <div class="activity-indicator" :class="classes" :style="style">
        <div class="activity-indicator-content">
            <component :is="is()" v-if="is" class="mx-auto" />
            <div v-if="label" class="activity-indicator-label">
                {{ label }}
            </div> 
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

function unit(value: any, uom = 'px'): string|undefined {
    return value !== null
        && value !== undefined
        && value !== false
        && isFinite(value) ? `${value}${uom}` : value;
}

export default defineComponent({

    props: {

        absolute: Boolean,

        center: Boolean,

        label: String,

        size: {
            type: String,
            default: 'md'
        },

        registry: {
            type: String,
            default: 'indicators'
        },

        type: {
            type: String,
            required: true
        },

        height: [String, Number],

        maxHeight: [String, Number],

        minHeight: [String, Number],

        width: [String, Number],

        maxWidth: [String, Number],

        minWidth: [String, Number]

    },

    data: () => ({
        is: null
    }),

    setup(props: any) {
        return {
            registryInstance: inject(props.registry || 'indicators')
        };
    },

    computed: {

        classes() {
            return {
                'activity-indicator-center': this.center,
                'activity-indicator-absolute': this.absolute,
                [this.size && `activity-indicator-${this.size}`]: !!this.size
            };
        },

        style() {
            return {
                width: unit(this.width),
                maxWidth: unit(this.maxWidth),
                minWidth: unit(this.minWidth),
                height: unit(this.height),
                maxHeight: unit(this.maxHeight),
                minHeight: unit(this.minHeight)
            };
        }

    },

    async mounted() {
        const component = await this.component();

        this.is = () => component;
    },

    methods: {
        async component() {
            let component = this.registryInstance.get(this.type);
                
            if(component instanceof Promise) {
                return component;
            }

            if(typeof component === 'function') {
                component = await component();
            }

            if(component.default) {
                return component.default;
            }
                
            return component;
        }
    },

});
</script>

<style>
.activity-indicator-label {
    margin-top: .75rem;
    text-align: center;
}
.activity-indicator-xs {
    font-size: .5rem;
}

.activity-indicator-sm {
    font-size: .75rem;
}

.activity-indicator-md {
    font-size: 1rem;
}
.activity-indicator-lg {
    font-size: 1.25rem;
}
.activity-indicator-xl {
    font-size: 1.75rem;
}
.activity-indicator-center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}
.activity-indicator-absolute {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>
