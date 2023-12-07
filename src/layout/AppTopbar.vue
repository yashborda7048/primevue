<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
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
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
const menu = ref();
const items = ref([
    {
        items: [
            {
                label: 'Profile',
                icon: 'pi pi-user',
                to: '/'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                to: '/'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<template>
    <div class="layout-topbar">
        <router-link to="/" class="layout-topbar-logo">
            <img :src="logoUrl" alt="logo" />
            <h6>Project <br> <b>Communicatie</b></h6>
        </router-link>
        <button class="p-link layout-menu-button layout-topbar-button ml-0" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>

        <span class="p-input-icon-left ml-3 hidden lg:block">
            <i class="pi pi-search" />
            <InputText v-model="value1" class="border-0" placeholder="Type om te zoeken" />
        </span>

        <div class="lg:ml-auto flex-order-3">
            <Button class="p-0 bg-white border-none" type="button" @click="toggle" aria-haspopup="true"
                aria-controls="overlay_menu">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="" size="large"
                    shape="circle" />
            </Button>
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.p-inputtext {
    &:focus {
        box-shadow: none;
    }
}
</style>
