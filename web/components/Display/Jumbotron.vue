<script setup lang="ts">
defineProps(['title'])

</script>

<template>
    <article class="flex flex-col jumbotron">
        <div id="HeaderBlock">
            <slot name="header-block"></slot>
        </div>
        <div id="ContentBlock">
            <slot name="content-block"></slot>
        </div>
        <div id="ButtonBlock">
            <slot name="button-block"></slot>
        </div>
    </article>
</template>

<style lang="scss">
.jumbotron {
    #HeaderBlock {
        header {
            h1 {
                @apply font-display font-black border-b-orange-600 border-b-4 mb-3;
            }
        }
    }

    #ContentBlock {
        p {
            @apply mt-4 mb-4 mx-auto tracking-tight font-extrabold font-display lg:text-5xl;

        }
    }

    #ButtonBlock {
        ul {
            @apply flex gap-x-4 gap-y-6 mt-4 flex-wrap font-nav;

            li {
                a {
                    @apply bg-orange-400/40 p-1.5;
                }
            }
        }
    }
}
</style>