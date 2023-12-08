<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { useLayout } from '@/layout/composables/layout';
const { onMenuToggle } = useLayout();

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
                    { label: 'Nieuw bericht', to: '/Nieuw' },
                    { label: 'Opgepakt', to: '/Opgepakt' },
                    { label: 'Nieuwe reactie', to: '/Nieuwe' },
                    { label: 'Wacht op reactie', to: '/Wacht' },
                    { label: 'Ticket gesloten', to: '/Ticket' },
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
        <Button icon="pi pi-bars" aria-label="button" @click="onMenuToggle()" class="w-full" outlined />
    </div>
</template>

<style lang="scss" scoped></style>
