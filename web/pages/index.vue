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
                        My name is Badr Choubai, I'm an early career software developer. Interested in solving
                        problems--nothing specific, <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">doing
                            what I love; to do what I love more.</span>
                    </p>
                    <p>
                        Being outside, enjoying the city I live in, being active and away from my computer.
                    </p>
                    <p>
                        Much of my learning and experience is self-attained. I'm opinionated about things and I like to
                        watch the world, even if I can't predict the future.
                    </p>
                </template>
                <template #button-block>
                    <ul>
                        <li>
                            <a href="https://www.github.com/BadrChoubai" aria-label="GitHub Profile">My Github</a>
                        </li>
                        <li>
                            <a href="mailto:choubai.badr@protonmail.com" aria-label="Email Me">Email Me</a>
                        </li>
                        <li>
                            <a href="resume.pdf" aria-label="My Resume">My Resumé</a>
                        </li>
                    </ul>
                </template>
            </display-jumbotron>
        </article>
    </section>
</template>