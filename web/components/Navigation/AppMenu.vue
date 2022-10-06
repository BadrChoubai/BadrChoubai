<script setup>
import MenuLink from './MenuLink.vue';

const navItems = [
    {
        href: "/",
        text: "Home"
    },
]
</script>

<template>
    <div class="container mt-4 hidden">
        <nav role="navigation">
            <ul class="flex flex-wrap align-center gap-2">
                <li v-for="link in navItems" :key="link.href"
                    class="p-2 hover:bg-orange-400/40 rounded bg-tranparent">
                    <menu-link :to="link.href" class="font-nav tracking-wide whitespace-nowrap cursor-pointer">
                        {{ link.text }}
                    </menu-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
