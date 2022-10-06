<template>
    <header>
        <a href="#content" aria-label="skip to main content" class="sr-only focus:not-sr-only">Skip to main content</a>
        <div class="container mx-auto pt-4 px-4">
            <div class="flex flex-row items-center justify-between">
                <h1 class="font-display font-black dark:text-white text-3xl">Badr Choubai</h1>
                <div class="flex items-center justify-end md:gap-x-4 gap-x-2 h-full w-full">
                    <navigation-menu-link aria-label="My GitHub" to="https://www.github.com/BadrChoubai" target="_blank">
                        <icons-github class="dark:fill-white" />
                    </navigation-menu-link>
                    <navigation-menu-link aria-label="My Resume" to="https://spectacled-porter-961.notion.site/Hi-I-m-Badr-Choubai-ee51d9f7f07640b98aee2b5c2f130e29" target="_blank">
                        <icons-notion class="dark:fill-white" />
                    </navigation-menu-link>
                </div>
            </div>
            <navigation-app-menu />
        </div>
    </header>
</template>
