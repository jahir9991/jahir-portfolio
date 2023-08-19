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
    import toast, { Toaster } from 'svelte-french-toast';
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

   

    // of(installedSkilsMain);

    let showSearch = false;
    let toggleSearch = () => {
        toast.success("It works!",{duration:10000});
        showSearch = !showSearch;
    };

    const searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
        ""
    );

    

    const installedSkills: Observable<Skill[]> = searchSubject.pipe(
        // filter(q=>q.length>2),
       
        debounceTime(300),
        distinctUntilChanged(),

        switchMap((p) => skillService.getAll(p)),
        catchError(() => of([]))
    );

    const searchNow: any = (e) => {
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
            <div class="relative">
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
                                                src={skill.image}
                                                alt=""
                                                srcset=""
                                            />
                                        </div>
                                        <div class="flex flex-col w-full">
                                            <div
                                                class="flex items-center justify-between"
                                            >
                                                <div
                                                    class="text-md font-bold capitalize"
                                                >
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
