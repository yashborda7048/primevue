<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
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
    <div class="layout-topbar gap-4">
        <button class="p-link layout-menu-button layout-topbar-button ml-0 lg:hidden" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>

        <span class="p-input-icon-left ml-3 hidden lg:block w-full">
            <i class="pi pi-search text-2xl rotate-90" />
            <InputText v-model="value1" class="border-0 w-full" placeholder="Type om te zoeken" />
        </span>

        <div class="lg:ml-auto profile-btn flex-order-3">
            <div class="name">
                <h6 class="m-0">Piet Boon</h6>
                <p class="m-0">Beleidsmedewerker</p>
            </div>
            <Button class="p-0 bg-white border-none border-circle" type="button" @click="toggle" aria-haspopup="true"
                aria-controls="overlay_menu">
                <Avatar image="image/profile.png" class="" size="large"
                    shape="circle" />
            </Button>
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
    </div>
</template>