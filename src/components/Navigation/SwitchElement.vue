<template>
    <a
        v-on:click="$router.push(switchType($router.currentRoute, target))"
        href="#"
        :class="linkClass"
    >
        <strong class="text-capitalize" v-if="highlight">
            {{ target }}
        </strong>
        <div class="text-capitalize" v-else>
            {{ target }}
        </div>
    </a>
</template>

<script>
import {highlightLink, switchType} from "./navigation";

export default {
    name: "SwitchElement",
    props: {
        target: String,
        linkClass: String,
    },
    data() {
        return {
            currentRoute: this.$router.currentRoute.fullPath
        };
    },
    methods: {
        highlightLink,
        switchType
    },
    computed: {
        highlight() {
            return highlightLink(this.currentRoute, this.target);
        }
    },
    watch: {
        $route () {
            this.currentRoute = this.$router.currentRoute.fullPath;
        }
    }
};
</script>
