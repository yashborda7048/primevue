<script setup>
import { computed, watch, ref } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppSidebar from './AppSidebar.vue';
import AppConfig from './AppConfig.vue';
import { useLayout } from '@/layout/composables/layout';

const { layoutConfig, layoutState, isSidebarActive } = useLayout();

const outsideClickListener = ref(null);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

const containerClass = computed(() => {
    return {
        'layout-theme-light': layoutConfig.darkTheme.value === 'light',
        'layout-theme-dark': layoutConfig.darkTheme.value === 'dark',
        'layout-overlay': layoutConfig.menuMode.value === 'overlay',
        'layout-static': layoutConfig.menuMode.value === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive.value,
        'layout-mobile-active': layoutState.staticMenuMobileActive.value,
        'p-input-filled': layoutConfig.inputStyle.value === 'filled',
        'p-ripple-disabled': !layoutConfig.ripple.value
    };
});
const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive.value = false;
                layoutState.staticMenuMobileActive.value = false;
                layoutState.menuHoverActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div class="layout-wrapper customize" :class="containerClass">
        <app-topbar></app-topbar>
        <div class="layout-sidebar">
            <app-sidebar></app-sidebar>
        </div>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
        </div>
        <app-config></app-config>
        <div class="layout-mask"></div>
    </div>
</template>

<style>
.layout-wrapper .layout-sidebar {
    left: 0;
    height: calc(100vh - 5rem);
    border-radius: 0%;
    top: 5rem;
    display: flex;
    flex-direction: column;
}
.layout-wrapper .layout-sidebar .layout-menu ul a {
    border: 1px solid transparent;
}
.layout-wrapper .layout-sidebar .layout-menu ul a:focus {
    box-shadow: none;
    border: 1px solid var(--primary-color);
}

.layout-wrapper .layout-main-container {
    padding-left: 3rem;
}

@media screen and (min-width: 992px) {
    .customize.layout-wrapper.layout-static.layout-static-inactive .layout-main-container {
        margin-left: 130px;
    }

    .customize.layout-wrapper.layout-static.layout-static-inactive .layout-sidebar {
        left: 130px;
        width: 130px;
        padding: 0.5rem 0.5rem;
        overflow: visible;
    }

    .customize.layout-wrapper.layout-static.layout-static-inactive .layout-sidebar .layout-menu ul a {
        flex-direction: column;
        gap: 4px;
    }
    /* .customize.layout-wrapper.layout-static.layout-static-inactive .layout-sidebar .active-menuitem {
        position: relative;
    } */

    .customize.layout-wrapper.layout-static.layout-static-inactive .layout-sidebar .layout-menu ul a .layout-submenu-toggler {
        margin: auto;
    }

    .customize.layout-wrapper.layout-static.layout-static-inactive .layout-sidebar .layout-menu ul ul {
        position: absolute;
        background-color: #cfd5ff;
        width: 300px;
        z-index: 1000;
        /* border: 1px solid var(--primary-color);   */
        left: 100px;
        margin-top: 15px;
    }

    .customize.layout-wrapper.layout-static.layout-static-inactive .layout-sidebar .layout-menu ul ul li a {
        flex-direction: row;
        margin-left: 0px;
    }
}
</style>
