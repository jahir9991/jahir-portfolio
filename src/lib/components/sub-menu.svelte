<script lang="ts">
    import {
        faFile,
        faSearch,
        faCodeBranch,
        faBug,
        faCubes,
        faUserCircle,
        faCog,
        faSync,
        faCheckDouble,
        faBell,
        faFilter,
        faEllipsisH,
        faFolderOpen,
        faPalette,
        faBolt,
        faLightbulb,
        faGraduationCap,
        faCloudDownloadAlt,
        faInfo,
        faInfoCircle,
        faSearchMinus,
        faSearchPlus,
        faSearchLocation,
        faSearchDollar,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa/src/fa.svelte";
    import { crossfade, fade, scale, slide } from "svelte/transition";

    import {
        BehaviorSubject,
        Observable,
        Subject,
        catchError,
        combineLatest,
        debounce,
        debounceTime,
        delay,
        distinctUntilChanged,
        filter,
        map,
        of,
        pipe,
        pluck,
        scan,
        startWith,
        switchMap,
        tap,
        timer,
    } from "rxjs";
    import type { Element } from "svelte/types/compiler/interfaces";
    import { bounceIn, quintOut } from "svelte/easing";
    import type { KeyboardEventHandler } from "svelte/elements";
    import PixelText from "../ui-components/pixel-text.svelte";
    import { flip } from "svelte/animate";
    import MenuCard from "$lib/ui-components/menu-card.svelte";
    import { skillService } from "$lib/services/skills.service";
    import { onMount } from "svelte";
    let extensions = [
        // {
        //     icon: faFilter,
        // },
        {
            icon: faInfoCircle,
        },
        // {
        //     icon: faEllipsisH,
        // },
    ];

    type Skill = {
        id: string | number;
        name: string;
        description: string;
        image: string;
        link?: string;
        downloads: string;
        creator: string;
    };

    let installedSkilsData: Skill[] = [
        {
            id: 1,
            name: "Javascript",
            image: "js",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 2,
            name: "Typescript",
            image: "ts",
            downloads: "6.9M",
            description: "A dating app for developers...",
            creator: "@benawad",
        },
        {
            id: 3,
            name: "Nest",
            image: "nest",
            downloads: "500k",
            description: "Voice convos to the moon...",
            creator: "@benawad",
        },
        {
            id: 4,
            name: "Docker",
            image: "docker",
            downloads: "1.5M",
            description: "Material Design Icons for VS...",
            creator: "@PhilippKief",
        },
        {
            id: 5,
            name: "Java",
            image: "java",
            downloads: "2.4M",
            description: "Makes it easy to create, manage...",
            creator: "@Microsoft",
        },
        {
            id: 6,
            name: "C#",
            image: "c#",
            downloads: "3.2M",
            description: "Makes it easy to create, manage...",
            creator: "@Microsoft",
        },
        {
            id: 7,
            name: "Svelte js",
            image: "svelte",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 8,
            name: "Angular",
            image: "angular",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 9,
            name: "React",
            image: "react",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 10,
            name: "Node js",
            image: "nodejs",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 11,
            name: "Postgres",
            image: "postgres",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 12,
            name: "Mongodb",
            image: "mongo",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 13,
            name: "Cloudflare",
            image: "cloudflare",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 14,
            name: "Aws",
            image: "aws",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 15,
            name: "Gcp",
            image: "gcp",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 16,
            name: "Kafka",
            image: "kafka",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 17,
            name: "Next js",
            image: "next",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 18,
            name: "Rx js",
            image: "rxjs",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
        {
            id: 19,
            name: "Flutter",
            image: "flutter",
            downloads: "2.2M",
            description: "Official Dracula Theme. A dark...",
            creator: "@zenorocha",
        },
    ];

    // of(installedSkilsMain);

    let showSearch = false;
    let toggleSearch = () => {
        showSearch = !showSearch;
    };

    const searchSubject: BehaviorSubject<String> = new BehaviorSubject<String>(
        ""
    );


    onMount(()=>{
        
    })

    const installedSkills: Observable<Skill[]> = searchSubject.pipe(
        distinctUntilChanged(),
        debounceTime(300),
        switchMap((p)=>{
            return skillService.getAll()

        }),
        catchError(()=>of([]))

        // switchMap((query: string) =>
        //     of(
        //         installedSkilsData.filter((skill: Skill) =>
        //             skill.name.toLowerCase().startsWith(query)
        //         )
        //     )
        // )

        // scan((acc, data) => data)
    );

    const searchNow: any = (e) => {
        console.log(e);
        searchSubject.next(e.target.value);
    };

    let active;
    // const [send, receive] = crossfade({
    //     duration: (d) => Math.sqrt(d * 200),

    //     fallback(node, params) {
    //         const style = getComputedStyle(node);
    //         const transform = style.transform === "none" ? "" : style.transform;

    //         return {
    //             duration: 600,
    //             easing: quintOut,
    //             css: (t) => `
    // 				transform: ${transform} scale(${t});
    // 				opacity: ${t}
    // 			`,
    //         };
    //     },
    // });
</script>

<div class="relative w-full h-full bg-explorer-bg text-sidebar-fg">
    <div class="bg-explorer-bg shadow-2xl z-10">
        <div class="flex items-center justify-between p-2">
            <h1 class="font-semibold">INSTALLED SKILL</h1>
            <button class="flex space-x-4" on:click={toggleSearch}>
                <div>
                    <Fa
                        icon={showSearch ? faSearchMinus : faSearch}
                        class="text-sidebar-fg"
                    />
                </div>
            </button>
        </div>
        {#if showSearch}
            <!-- content here -->
            <div class="flex p-2" in:slide out:slide>
                <input
                    on:keyup|preventDefault={searchNow}
                    type="search"
                    name=""
                    id=""
                    placeholder="Search Skill"
                    autofocus
                    class="w-full p-2 bg-sidebar-bg"
                />
            </div>
        {/if}
    </div>

    <div class=" relative bg-explorer-bg w-full h-[70vh] md:h-[88vh]">
        <div class=" absolute overflow-y-scroll w-full top-0 bottom-10">
            <div class="relative ">
                {#if $installedSkills}
                    {#each $installedSkills as skill (skill.id)}
                        <!-- <br /> -->
                        <button
                            on:click={() => (active = skill.id)}
                            class="p-0.5 hover:shadow-2xl w-full"
                            animate:flip={{ duration: 300 }}
                        >
                            <MenuCard active={active == skill.id}>
                                <div
                                    class="flex justify-between h-full w-full p-1"
                                >
                                    <div
                                        class="py-1 flex w-full items-center space-x-4"
                                    >
                                        <div class=" text-center rounded-full">
                                            <img
                                                src="{skill.image}"
                                                alt=""
                                                srcset=""
                                            />
                                        </div>
                                        <div class="flex flex-col w-full">
                                            <div
                                                class="flex items-center justify-between"
                                            >
                                                <div class="text-md font-bold capitalize">
                                                    <!-- {skill.name} -->
                                                    <PixelText
                                                        text={skill.name}
                                                    />
                                                </div>
                                            </div>
                                            <div class="text-xs">
                                                {skill.description}
                                            </div>
                                            <!-- <div class="font-bold">
                    {skill.creator}
                </div> -->
                                        </div>
                                    </div>
                                </div>
                            </MenuCard>
                        </button>
                    {/each}
                {/if}
            </div>
        </div>
    </div>
</div>
