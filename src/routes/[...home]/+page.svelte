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
  
} from '@fortawesome/free-solid-svg-icons';
import Fa from 'svelte-fa/src/fa.svelte';
	
	let workbenchItems= [
        {
          name: 'Explorer',
          icon: faFile,
        },
        {
          name: 'Search',
          icon: faSearch,
        },
        {
          name: 'Git',
          icon: faCodeBranch,
        },
        {
          name: 'Debug',
          icon: faBug,
        },
        {
          name: 'Extensions',
          icon: faCubes,
          isActive: true,
        },
      ];
  let userSettings= [
        {
          name: 'Accounts',
          icon: faUserCircle,
        },
        {
          name: 'Manage',
          icon: faCog,
        },
      ];
    let   activity={
        main: {
          name: 'main*',
          icon: faCodeBranch,
        },
        sync: {
          name: 'Sync',
          icon: faSync,
        },
        mode: {
          name: '-- NORMAL --',
        },
        prettier: {
          name: 'Prettier',
          icon: faCheckDouble,
        },
        notification: {
          icon: faBell,
        },
      };
     let  extensions= [
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

    let  cloudDownloadIcon={
        icon: faCloudDownloadAlt,
      };
    let installedExtensions= [
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: '@zenorocha',
        },
        {
          name: 'VS Code Tinder',
          image: '/images/vsinder.png',
          downloads: '6.9M',
          description: 'A dating app for developers...',
          creator: '@benawad',
        },
        {
          name: 'Doge House',
          image: '/images/dogehouse.png',
          downloads: '500k',
          description: 'Voice convos to the moon...',
          creator: '@benawad',
        },
        {
          name: 'Material Icons',
          image: '/images/material.png',
          downloads: '1.5M',
          description: 'Material Design Icons for VS...',
          creator: '@PhilippKief',
        },
        {
          name: 'Docker',
          image: '/images/docker.png',
          downloads: '2.4M',
          description: 'Makes it easy to create, manage...',
          creator: '@Microsoft',
        },
        {
          name: 'C#',
          image: '/images/csharp.png',
          downloads: '3.2M',
          description: 'Makes it easy to create, manage...',
          creator: '@Microsoft',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: '@zenorocha',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: '@zenorocha',
        },
        {
          name: 'Dracula Official',
          image: '/images/dracula.png',
          downloads: '2.2M',
          description: 'Official Dracula Theme. A dark...',
          creator: '@zenorocha',
        },
      ];
  let  startOptions= [
        {
          name: 'New File',
          icon: faFile,
        },
        {
          name: 'Open',
          icon: faFolderOpen,
        },
        {
          name: 'Clone Git Repo...',
          icon: faCodeBranch,
        },
        {
          name: 'Run a Command...',
          icon: faPalette,
        },
      ];
  let gettingStartedOptions= [
        {
          name: 'Customize your Setup',
          icon: faBolt,
        },
        {
          name: 'Learn the Fundamentals',
          icon: faLightbulb,
        },
        {
          name: 'Boost your Productivity',
          icon: faGraduationCap,
        },
      ];


	
</script>




    <!-- sidebar -->
    <div
      class="flex flex-col absolute top-0 bottom-10 left-0 justify-between text-4xl bg-sidebar-bg"
    >
      <div class="flex flex-col items-center">


        {#each workbenchItems as item}
        <div
    
        class="relative px-6 py-4"
      >
      <div >
      {#if item.isActive}

        <Fa icon={item.icon} class="text-off-white" />
        <div class="absolute bg-off-white h-full w-0.5 top-0 left-0"></div>
 
      {:else}

        <Fa icon={item.icon} class="text-sidebar-fg" />
      {/if}

      </div>

       
       
      </div>
        {/each}

       
      </div>
      <div class="flex flex-col items-center">
				{#each userSettings as setting}
        <div  class="px-6 py-4"
      >
      <Fa icon={setting.icon} class="text-sidebar-fg" />
        </div>
			 {/each}
      </div>
    </div>

  

    <!-- extensions -->
    <div
      class="flex absolute top-0 bottom-10 left-20 w-96 bg-explorer-bg text-sidebar-fg"
    >
      <div
        class="flex flex-col absolute w-full top-0 bottom-0 overflow-y-hidden  "
      >
        <div class="flex items-center justify-between p-2">
          <h1 class="font-bold">EXTENSIONS</h1>
          <div class="flex space-x-4">
          {#each extensions as  extension}
                  <div>
                    <Fa icon={extension.icon} class="text-sidebar-fg" />
                  </div>
          {/each}
          </div>
        </div>
        <div class="flex p-2">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Extensions in Marketplace"
            class="w-full p-2 bg-sidebar-bg"
          />
        </div>
        <div class="flex p-2 font-black">INSTALLED</div>
        <div class="flex p-2 flex-col space-y-4 w-full overflow-y-scroll ">
					{#each installedExtensions as  extension}
          <div
            class="flex justify-between"
          >
            <div class="py-2 flex w-full items-center space-x-4">
              <div class="w-28">
                <img src="{extension.image}" alt="" class="rounded-full" />
              </div>
              <div class="flex flex-col w-full">
                <div class="flex items-center justify-between">
                  <div class="text-xl font-bold">
                    {extension.name}
                  </div>
                  <div class="flex space-x-2">
                    <div>
                      <Fa
                        icon={cloudDownloadIcon.icon}
                        class="text-sidebar-fg"
                      />
                    </div>
                    <div>
                      { extension?.downloads }
                    </div>
                  </div>
                </div>
                <div>
                  { extension.description }
                </div>
                <div class="font-bold">
                  { extension.creator }
                </div>
              </div>
            </div>
          </div>
						{/each}
        </div>
      </div>
    </div>

    <!-- file: tabs -->
    <div class="absolute ml-20 left-96 top-0 right-0 bottom-10 bg-editor-bg">
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
        <div class="w-full h-30 bg-explorer-bg"></div>
      </div>
    </div>

    <!-- file: editor -->
    <div
      class="absolute ml-20 left-96 top-10 right-0 bottom-10 bg-editor-bg text-off-white"
    >
      <div class="p-36 flex flex-col space-y-10">
        <div class="flex flex-col space-y-2">
          <div class="text-6xl">Md Jahir Alam Raju</div>
          <div class="text-4xl text-sidebar-fg">Software Engineer</div>
        </div>
        <div class="grid grid-cols-2">
          <div>
            <div class="text-2xl pb-4">Start</div>
            <div class="flex flex-col space-y-2">
                {#each startOptions as option}
           
              <div
                
                class="flex space-x-2 text-lg"
              >
                <div class="w-8">
                  <Fa icon={option.icon} />
                </div>
                <div class="text-activity-bg">
                  { option.name }
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
               
                class="rounded-xl bg-sidebar-bg p-4 px-8 flex space-x-4 "
              >
                <div class="w-8 text-activity-bg">
                  <Fa icon={option.icon} />
                </div>
                <div>
                  { option.name }
                </div>
              </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- activity bar -->
    <div
      class="absolute bottom-0 h-10 w-full px-6 flex justify-between bg-activity-bg"
    >
      <div class="flex items-center text-off-white text-2xl space-x-8">
        <div class="flex space-x-2">
          <Fa icon={activity.main.icon} />
          <div class="text-xl text">{ activity.main.name }</div>
        </div>
        <div class="flex space-x-2">
          <Fa icon={activity.sync.icon} />
        </div>
        <div class="flex space-x-2">
          <div class="text-xl text">{ activity.mode.name }</div>
        </div>
      </div>
      <div class="flex items-center text-off-white text-2xl space-x-8">
        <div class="flex space-x-2">
          <Fa icon={activity.prettier.icon} />
          <div class="text-xl text">{ activity.prettier.name }</div>
        </div>
        <div class="flex space-x-2">
          <Fa icon={activity.notification.icon} />
        </div>
      </div>
    </div>



  <style>
/* :global(.svelte-fa){
      @apply inline-block;
    } */

    /* .vscode{
      @apply relative ;
      min-height: 90vh;
    } */
  </style>