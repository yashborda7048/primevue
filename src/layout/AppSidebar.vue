<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { useLayout } from '@/layout/composables/layout';
const { onMenuToggle, layoutState } = useLayout();

const model = ref([
    {
        items: [{ label: 'Dashboard', icon: 'pi pi-th-large', to: '/' }]
    },
    {
        items: [
            {
                label: 'Inbox',
                icon: 'pi pi-comments',
                items: [
                    { label: 'Nieuw bericht', to: '/test' },
                    { label: 'Opgepakt', to: '/test-2' },
                    { label: 'Nieuwe reactie', to: '/test-3' },
                    { label: 'Wacht op reactie', to: '/test-4' },
                    { label: 'Ticket gesloten', to: '/test-5' },
                ]
            },
        ]
    },
    {
        items: [
            {
                label: 'Projecten',
                icon: 'pi pi-book',
                items: [
                    { label: 'Submenu 1.1.1', to: '/df-1' },
                    { label: 'Submenu 1.1.2', to: '/df-2' },
                    { label: 'Submenu 1.1.3', to: '/df-3' }
                ]
            },
        ]
    },
    {
        items: [
            {
                label: 'Communicatie',
                icon: 'pi pi-inbox',
                items: [
                    { label: 'Submenu 1.1.1', to: '/df' },
                    { label: 'Submenu 1.1.2', to: '/df' },
                    { label: 'Submenu 1.1.3', to: '/df' }
                ]
            },
        ]
    },
    {
        items: [
            {
                label: 'Taken',
                icon: 'pi pi-file-edit',
                items: [
                    { label: 'Submenu 1.1.1', to: '/df' },
                    { label: 'Submenu 1.1.2', to: '/df' },
                    { label: 'Submenu 1.1.3', to: '/df' }
                ]
            },
        ]
    },
    {
        items: [
            {
                label: 'Stakeholders',
                icon: 'pi pi-users',
                items: [
                    { label: 'Submenu 1.1.1', to: '/df' },
                    { label: 'Submenu 1.1.2', to: '/df' },
                    { label: 'Submenu 1.1.3', to: '/df' }
                ]
            },
        ]
    },
    {
        items: [
            {
                label: 'Analyse',
                icon: 'pi pi-search',
                items: [
                    { label: 'Submenu 1.1.1', to: '/df' },
                    { label: 'Submenu 1.1.2', to: '/df' },
                    { label: 'Submenu 1.1.3', to: '/df' }
                ]
            },
        ]
    },
    {
        items: [
            {
                label: 'Instellingen',
                icon: 'pi pi-cog',
                items: [
                    { label: 'Submenu 1.1.1', to: '/df' },
                    { label: 'Submenu 1.1.2', to: '/df' },
                    { label: 'Submenu 1.1.3', to: '/df' }
                ]
            },
        ]
    },
]);
</script>

<template>
    <router-link to="/" class="sidebar-logo">
        <img src="@/assets/image/logo.svg" alt="logo" />
        <h6>Project <br> <b>Communicatie</b></h6>
    </router-link>

    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
    <div class="mt-auto text-right">
        <Button @click="onMenuToggle()" class="w-full flex align-items-center" text
            :class="layoutState.staticMenuDesktopInactive.value ? 'justify-content-center' : 'justify-content-between'">
            <span v-show="!layoutState.staticMenuDesktopInactive.value">Menu inklappen</span>
            <i :class="layoutState.staticMenuDesktopInactive.value ? 'pi pi-angle-right' : 'pi pi-angle-left'"></i>
        </Button>
    </div>
</template>

<style lang="scss" scoped></style>
