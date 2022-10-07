<script setup>
const route = useRoute()
definePageMeta({
    title: 'Hello'
})

useHead({
    title: route.meta.title,
    htmlAttrs: {
        lang: "en-US"
    },
    meta: [
        { name: 'og:title', content: `Badr Choubai - ${route.meta.title}` },
        { name: 'description', content: "Badr Choubai writes code in his unfree-time." },
        { name: 'og:description', content: "Badr Choubai writes code in his unfree-time." },
    ],
})
</script>

<template>
    <section>
        <article class="flex flex-col">
            <display-jumbotron :title="route.meta.title">
                <template #content-block>
                    <p>
                        My name is Badr Choubai. I'm an early career software developer interested in solving
                        problems—nothing specific at the moment.
                    </p>
                    <p>
                        <span
                            class="text-transparent bg-clip-text bg-orange-500 dark:bg-orange-400">Doing
                            what I love, to do what I love more:</span>
                        being outdoors, enjoying the city I live in, being active and away from my computer.
                    </p>
                    <p>
                    Much of my learning and experience is self-attained. I'm opinionated about things and like to watch the world, even if I can't predict the future.
                    </p>
                </template>
                <template #button-block>
                    <ul>
                        <li>
                            <a href="https://www.github.com/BadrChoubai" aria-label="GitHub Profile" target="_blank">My
                                Github</a>
                        </li>
                    </ul>
                </template>
            </display-jumbotron>
        </article>
    </section>
</template>