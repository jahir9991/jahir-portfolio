<script>



    export let active = false;
</script>

<div role="button" class="card {active ? 'active' : ''}">
    <span class=" glow" />
    <div class="content">
        <slot />
    </div>
</div>

<style lang="postcss">
    @property --hue {
        syntax: "<number>";
        inherits: true;
        initial-value: 0;
    }
    @property --rotate {
        syntax: "<number>";
        inherits: true;
        initial-value: 0;
    }
    @property --bg-y {
        syntax: "<number>";
        inherits: true;
        initial-value: 0;
    }
    @property --bg-x {
        syntax: "<number>";
        inherits: true;
        initial-value: 0;
    }
    @property --glow-translate-y {
        syntax: "<number>";
        inherits: true;
        initial-value: 0;
    }
    @property --bg-size {
        syntax: "<number>";
        inherits: true;
        initial-value: 0;
    }
    @property --glow-opacity {
        syntax: "<number>";
        inherits: true;
        initial-value: 1;
    }
    @property --glow-blur {
        syntax: "<number>";
        inherits: true;
        initial-value: 0;
    }
    @property --glow-scale {
        syntax: "<number>";
        inherits: true;
        initial-value: 2;
    }

    @property --glow-radius {
        syntax: "<number>";
        inherits: true;
        initial-value: 2;
    }

    @property --white-shadow {
        syntax: "<number>";
        inherits: true;
        initial-value: 0;
    }

    :root {
        --debug: 0;
        --supported: 0;
        --not-supported: 0;

        /* Pen vars */
        --card-color: hsl(260deg 100% 3%);
        --text-color: hsl(260deg 10% 55%);
        --card-width: 250px;
        --border-width: 2px;
        --bg-size: 1;

        --hue: 0;
        --hue-speed: 1;

        --rotate: 0;
        /* --animation-speed: 4s; */
        --animation-speed: 3s;

        --interaction-speed: 0.55s;
        --glow-scale: 1.5;
        --scale-factor: 1;
        --glow-blur: 6;
        --glow-opacity: 1;
        --glow-radius: 100;
        --glow-rotate-unit: 1deg;
    }

    .active {
        @apply !sticky top-0;
        .content {
             mix-blend-mode: darken;
            /* box-shadow: 0 0 calc(var(--white-shadow) * 1vw) */
                /* calc(var(--white-shadow) * 0.15vw) rgb(255 255 255 / 20%); */
            /* animation: shadow-pulse calc(var(--animation-speed) * 2) linear */
                /* infinite;  */
            &:before {
                @apply h-1 w-1 absolute;
                content: "";
                display: block;

                border-radius: calc(calc(var(--card-radius) * 0.9));
                box-shadow: 0 0 20px black;
                mix-blend-mode: color-burn;
                z-index: -1;
                background: hsl(0deg 0% 16%)
                    radial-gradient(
                        30% 30% at calc(var(--bg-x) * 1%) calc(var(--bg-y) * 1%),
                        hsl(
                                calc(calc(var(--hue) * var(--hue-speed)) * 1deg)
                                    100% 90%
                            )
                            calc(0% * var(--bg-size)),
                        hsl(
                                calc(calc(var(--hue) * var(--hue-speed)) * 1deg)
                                    100% 80%
                            )
                            calc(20% * var(--bg-size)),
                        hsl(
                                calc(calc(var(--hue) * var(--hue-speed)) * 1deg)
                                    100% 60%
                            )
                            calc(40% * var(--bg-size)),
                        transparent 100%
                    );
                width: calc(100% + var(--border-width));
                height: calc(100% + var(--border-width));
                animation: hue-animation var(--animation-speed) linear infinite,
                    rotate-bg var(--animation-speed) linear infinite;
                transition: --bg-size var(--interaction-speed) ease;
            }
        }
    }

    .card {
        @apply h-full w-full relative p-0.5 rounded-lg overflow-hidden z-0;

        .content {
            @apply rounded-lg bg-explorer-bg ;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: start;

            &:hover {
                &:before {
                    @apply h-1 w-1 absolute;
                    content: "";
                    display: block;

                    border-radius: calc(calc(var(--card-radius) * 0.9));
                    box-shadow: 0 0 20px black;
                    mix-blend-mode: color-burn;
                    z-index: -1;
                    background: hsl(0deg 0% 16%)
                        radial-gradient(
                            30% 30% at calc(var(--bg-x) * 1%)
                                calc(var(--bg-y) * 1%),
                            hsl(
                                    calc(
                                            calc(var(--hue) * var(--hue-speed)) *
                                                1deg
                                        )
                                        100% 90%
                                )
                                calc(0% * var(--bg-size)),
                            hsl(
                                    calc(
                                            calc(var(--hue) * var(--hue-speed)) *
                                                1deg
                                        )
                                        100% 80%
                                )
                                calc(20% * var(--bg-size)),
                            hsl(
                                    calc(
                                            calc(var(--hue) * var(--hue-speed)) *
                                                1deg
                                        )
                                        100% 60%
                                )
                                calc(40% * var(--bg-size)),
                            transparent 100%
                        );
                    width: calc(100% + var(--border-width));
                    height: calc(100% + var(--border-width));
                    animation: hue-animation var(--animation-speed) linear
                            infinite,
                        rotate-bg var(--animation-speed) linear infinite;
                    transition: --bg-size var(--interaction-speed) ease;
                }
            }
        }
        .glow {
            --glow-translate-y: 0;
            display: block;
            position: absolute;
            width: calc(var(--card-width) / 5);
            height: calc(var(--card-width) / 5);
            animation: rotate var(--animation-speed) linear infinite;
            transform: rotateZ(calc(var(--rotate) * var(--glow-rotate-unit)));
            transform-origin: center;
            border-radius: calc(var(--glow-radius) * 10vw);

            &:after {
                content: "";
                display: block;
                z-index: -2;
                filter: blur(calc(var(--glow-blur) * 10px));
                width: 130%;
                height: 130%;
                left: -15%;
                top: -15%;
                background: hsl(
                    calc(calc(var(--hue) * var(--hue-speed)) * 1deg) 100% 60%
                );
                position: relative;
                border-radius: calc(var(--glow-radius) * 10vw);
                animation: hue-animation var(--animation-speed) linear infinite;
                transform: scaleY(
                        calc(var(--glow-scale) * var(--scale-factor) / 1.1)
                    )
                    scaleX(calc(var(--glow-scale) * var(--scale-factor) * 1.2))
                    translateY(calc(var(--glow-translate-y) * 1%));
                opacity: var(--glow-opacity);
            }
        }
    }

    @keyframes shadow-pulse {
        0%,
        24%,
        46%,
        73%,
        96% {
            --white-shadow: 0.5;
        }
        12%,
        28%,
        41%,
        63%,
        75%,
        82%,
        98% {
            --white-shadow: 2.5;
        }
        6%,
        32%,
        57% {
            --white-shadow: 1.3;
        }
        18%,
        52%,
        88% {
            --white-shadow: 3.5;
        }
    }

    @keyframes rotate-bg {
        0% {
            --bg-x: 0;
            --bg-y: 0;
        }

        25% {
            --bg-x: 100;
            --bg-y: 0;
        }

        50% {
            --bg-x: 100;
            --bg-y: 100;
        }

        75% {
            --bg-x: 0;
            --bg-y: 100;
        }

        100% {
            --bg-x: 0;
            --bg-y: 0;
        }
    }
    @keyframes rotate {
        from {
            --rotate: -70;
            --glow-translate-y: -65;
        }

        25% {
            --glow-translate-y: -65;
        }

        50% {
            --glow-translate-y: -65;
        }

        60%,
        75% {
            --glow-translate-y: -65;
        }

        85% {
            --glow-translate-y: -65;
        }

        to {
            --rotate: calc(360 - 70);
            --glow-translate-y: -65;
        }
    }
    @keyframes hue-animation {
        0% {
            --hue: 0;
        }
        100% {
            --hue: 360;
        }
    }
</style>
