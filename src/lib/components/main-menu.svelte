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
        faHome,
        faToolbox,
        faContactBook,
        faContactCard,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa/src/fa.svelte";

    let workbenchItems = [
        {
            name: "Home",
            icon: faHome,
            route: "/",
        },
        {
            name: "Search",
            icon: faSearch,
            route: "/skills",
        },
        {
            name: "Git",
            icon: faCodeBranch,
            route: "/",
        },
        {
            name: "Debug",
            icon: faContactCard,
            route: "/",
        },
        {
            name: "Extensions",
            icon: faCubes,
            route: "/skills",
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
</script>

<div class=" main-menu bg-black h-full w-12">
    <!-- sidebar -->
    <div
        class="flex flex-col w-full h-full top-0 bottom-10 left-0 justify-between text-4xl bg-sidebar-bg"
    >
        <div class="flex flex-col items-center">
            {#each workbenchItems as item}
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                    href={item.route}
                    class="relative py-2 {item.isActive
                        ? 'text-black border-l-emerald-700'
                        : 'text-white'}  hover:text-gray-400"
                >
                    <div>
                        <Fa icon={item.icon} class=" !h-6" />
                    </div>
                </a>
            {/each}
        </div>
        <div class=" items-center">
            {#each userSettings as setting}
                <div class=" p-2 text-white hover:text-gray-400">
                    <Fa icon={setting.icon} class="!h-7" />
                </div>
            {/each}
        </div>
    </div>
</div>
