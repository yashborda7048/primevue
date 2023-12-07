<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { useLayout } from '@/layout/composables/layout';
const { onMenuToggle } = useLayout();
const model = ref([
    {
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        items: [
            {
                label: 'Inbox',
                icon: 'pi pi-fw pi-comments',
                items: [
                    { label: 'Nieuw bericht', to: '/' },
                    { label: 'Opgepakt', to: '/' },
                    { label: 'Nieuwe reactie', to: '/' },
                    { label: 'Wacht op reactie', to: '/' },
                    { label: 'Ticket gesloten', to: '/' },
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
                    { label: 'Submenu 1.1.1', to: '/' },
                    { label: 'Submenu 1.1.2', to: '/' },
                    { label: 'Submenu 1.1.3', to: '/' }
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
                    { label: 'Submenu 1.1.1', to: '/' },
                    { label: 'Submenu 1.1.2', to: '/' },
                    { label: 'Submenu 1.1.3', to: '/' }
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
                    { label: 'Submenu 1.1.1', to: '/' },
                    { label: 'Submenu 1.1.2', to: '/' },
                    { label: 'Submenu 1.1.3', to: '/' }
                ]
            },
        ]
    },
    {
        items: [
            {
                label: 'Stakeholders',
                icon: 'pi pi-uesrs',
                items: [
                    { label: 'Submenu 1.1.1', to: '/' },
                    { label: 'Submenu 1.1.2', to: '/' },
                    { label: 'Submenu 1.1.3', to: '/' }
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
                    { label: 'Submenu 1.1.1', to: '/' },
                    { label: 'Submenu 1.1.2', to: '/' },
                    { label: 'Submenu 1.1.3', to: '/' }
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
                    { label: 'Submenu 1.1.1', to: '/' },
                    { label: 'Submenu 1.1.2', to: '/' },
                    { label: 'Submenu 1.1.3', to: '/' }
                ]
            },
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
    <div class="mt-auto text-right">
        <Button icon="pi pi-bars" aria-label="button" @click="onMenuToggle()" class="w-full" outlined  />
    </div>
</template>

<style lang="scss" scoped></style>
