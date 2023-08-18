<script>
    import viewport from "$lib/ui-components/useViewport";
    import { onDestroy, onMount } from "svelte";

    export let text = "";
    let thisText;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    let onHover = (event) => {
        let iteration = 0;

        clearInterval(interval);
        classes = "bg-white text-black";

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
                classes = "";
            }

            iteration += 1 / 3;
        }, 30);
    };

    onMount(() => {
        // onHover(thisText);
    });
    onDestroy(() => {
        clearInterval(interval);
    });

    let classes = "bg-white text-black";
</script>

<h4
    class={classes}
    use:viewport
    on:enterViewport={(e) => onHover(e)}
    bind:this={thisText}
    on:mouseenter={onHover}
    data-value={text}
>
    {text}
</h4>

<style>
    * {
        @apply transition-all;
    }
    div {
        /* font-family: "Space Mono", monospace; */
        /* font-size: clamp(3rem, 10vw, 10rem); */
        /* color: white; */
        /* padding: 0rem clamp(1rem, 2vw, 3rem); */
        /* border-radius: clamp(0.4rem, 0.75vw, 1rem); */
    }

    /* h4:hover {
        background-color: white;
        color: black;
    } */
</style>
