<script>
    import {
        faBell,
        faCheckDouble,
        faCodeBranch,
        faSync,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa/src/fa.svelte";

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

    export let seeMore;
</script>

<!-- activity bar -->
<div
    class="absolute bottom-0 h-10 w-full px-6 flex justify-between bg-activity-bg"
>
    <div class="flex items-center text-off-white text-2xl space-x-8">
        <div class="flex space-x-2">
            <Fa icon={activity.main.icon} />
            <div class="text-xl text">{activity.main.name}</div>
        </div>
        <div class="flex space-x-2">
            <Fa icon={activity.sync.icon} />
        </div>
        <div class="flex space-x-2">
            <button class="text-xl text" on:click={seeMore}>see more </button>
        </div>
    </div>
    <div class="flex items-center text-off-white text-2xl space-x-8">
        <div class="flex space-x-2">
            <Fa icon={activity.prettier.icon} />
            <div class="text-xl text">{activity.prettier.name}</div>
        </div>
        <div class="flex space-x-2">
            <Fa icon={activity.notification.icon} />
        </div>
    </div>
</div>
