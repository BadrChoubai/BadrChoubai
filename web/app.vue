<script setup lang="ts">
import "@fontsource/inter"
import "@fontsource/arvo"
import "@fontsource/inter/variable.css"
import "@fontsource/material-icons";
</script>

<template>
    <navigation-app-header id="AppHeader" role="banner" class="static pb-6" />
    <main class="container mx-auto px-4 h-full mt-4 mb-4" id="main content">
        <NuxtPage class="pb-16" />
    </main>
</template>
