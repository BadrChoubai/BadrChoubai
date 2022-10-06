export default defineNuxtPlugin(() => {
    useHead({
        titleTemplate: (titleChunk) =>
            titleChunk
                ? `${titleChunk}`
                : ''
    });
});
