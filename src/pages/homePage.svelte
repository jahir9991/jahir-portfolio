<script>
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
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa/src/fa.svelte";
    import PixelText from "../lib/ui-components/pixel-text.svelte";
    import MenuCard from "$lib/ui-components/menu-card.svelte";

    let workbenchItems = [
        {
            name: "Explorer",
            icon: faFile,
        },
        {
            name: "Search",
            icon: faSearch,
        },
        {
            name: "Git",
            icon: faCodeBranch,
        },
        {
            name: "Debug",
            icon: faBug,
        },
        {
            name: "Extensions",
            icon: faCubes,
            isActive: true,
        },
    ];
    let userSettings = [
        {
            name: "Accounts",
            icon: faUserCircle,
        },
        {
            name: "Manage",
            icon: faCog,
        },
    ];
    let activity = {
        main: {
            name: "main*",
            icon: faCodeBranch,
        },
        sync: {
            name: "Sync",
            icon: faSync,
        },
        mode: {
            name: "-- NORMAL --",
        },
        prettier: {
            name: "Prettier",
            icon: faCheckDouble,
        },
        notification: {
            icon: faBell,
        },
    };
    let extensions = [
        {
            icon: faFilter,
        },
        {
            icon: faSync,
        },
        {
            icon: faEllipsisH,
        },
    ];

    let cloudDownloadIcon = {
        icon: faCloudDownloadAlt,
    };

    let startOptions = [
        {
            name: "New File",
            icon: faFile,
        },
        {
            name: "Open",
            icon: faFolderOpen,
        },
        {
            name: "Clone Git Repo...",
            icon: faCodeBranch,
        },
        {
            name: "Run a Command...",
            icon: faPalette,
        },
    ];
    let gettingStartedOptions = [
        {
            name: "Customize your Setup",
            icon: faBolt,
        },
        {
            name: "Learn the Fundamentals",
            icon: faLightbulb,
        },
        {
            name: "Boost your Productivity",
            icon: faGraduationCap,
        },
    ];
</script>

<!-- file: tabs -->
<div class=" w-full right-0 bg-editor-bg">
    <div class="flex">
        <div
            class="flex items-center justify-between w-64 p-2 px-4 bg-editor-bg text-off-white"
        >
            <div class="flex items-center space-x-2">
                <img src="/images/vscode.png" alt="" class="w-8" />
                <div>Getting Started</div>
            </div>
            <div class="pb-1">x</div>
        </div>
        <div class="w-full h-30 bg-explorer-bg" />
    </div>
</div>

<!-- file: editor -->
<div class=" bg-editor-bg text-off-white">
    <div class="p-36 flex flex-col space-y-10">
        <div class="flex flex-col space-y-2">
            <div class="text-6xl">
                <PixelText text="Md Jahir Alam Raju" />
            </div>
            <div class="text-4xl text-sidebar-fg">Software Engineer</div>
        </div>

        <MenuCard>hello</MenuCard>

        <div class="grid grid-cols-2">
            <div>
                <div class="text-2xl pb-4">Start</div>
                <div class="flex flex-col space-y-2">
                    {#each startOptions as option}
                        <div class="flex space-x-2 text-lg">
                            <div class="w-8">
                                <Fa icon={option.icon} />
                            </div>
                            <div class="text-activity-bg">
                                {option.name}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            <div>
                <div class="text-2xl pb-4">Getting Started</div>
                <div class="flex flex-col space-y-2 text-xl">
                    {#each gettingStartedOptions as option}
                        <div
                            class="rounded-xl bg-sidebar-bg p-4 px-8 flex space-x-4"
                        >
                            <div class="w-8 text-activity-bg">
                                <Fa icon={option.icon} />
                            </div>
                            <div>
                                {option.name}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
