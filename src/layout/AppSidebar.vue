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
                    { label: 'Nieuw bericht', to: '/inbox' }, // New message
                    { label: 'Opgepakt', to: '/inbox/opgepakt' }, // Arrested   
                    { label: 'Nieuwe reactie', to: '/inbox/nieuwe-reactie' }, // New response
                    { label: 'Wacht op reactie', to: '/inbox/wacht-op-reactie' }, // Wait for response
                    { label: 'Ticket gesloten', to: '/inbox/ticket-gesloten' },  // Ticket closed
                ]
            },
        ]
    },
    {
        items: [
            {
                label: 'Projecten',
                icon: 'pi pi-book',
                to: '/projecten' 
            },
        ]
    },
    {
        items: [
            {
                label: 'Communicatie',
                icon: 'pi pi-inbox',
                to: '/communicatie'   
            },
        ]
    },
    {
        items: [
            {
                label: 'Taken',
                icon: 'pi pi-file-edit',
                to: '/taken'   
            },
        ]
    },
    {
        items: [
            {
                label: 'Stakeholders',
                icon: 'pi pi-users',
                to: '/stakeholders'   
            },
        ]
    },
    {
        items: [
            {
                label: 'Analyse',
                icon: 'pi pi-search',
                to: '/analyse'   
            },
        ]
    },
    {
        items: [
            {
                label: 'Instellingen',
                icon: 'pi pi-cog',
                to: '/instellingen'               
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
