<script>
  import ActivityBar from "$lib/components/activity-bar.svelte";
  import MainMenu from "$lib/components/main-menu.svelte";

  let showMore = false;

  let seeMore = () => {
    showMore = true;
  };
</script>

<div class=" window">
  <div class="frame">
    <div class="top">
      <div class="circle red" />
      <div class="circle yellow" />
      <div class="circle green" />
    </div>
    <div class="body pb-10">
      <div class="flex h-full w-full">
        <MainMenu />
        <div class=" main-body relative bg-amber-700 h-full w-full">
          <slot />
        </div>
      </div>
    </div>
    <ActivityBar {seeMore} />
  </div>
</div>

{#if showMore}
  <div class="h-screen w-full bg-gray-700">hello</div>
{/if}

<style lang="postcss">
  .window {
    @apply p-2;
    .frame {
      /* @apply bg-red; */

      @apply overflow-hidden rounded-md  w-full shadow-2xl  relative;

      .body {
        @apply w-full  relative;
        height: 92vh;
      }
      .top {
        @apply bg-slate-200 flex gap-2;
        display: flex;

        @apply px-4 py-3;

        .circle {
          @apply w-4 h-4 rounded-full bg-black;

          &.red {
            background: #ed6a5e;
          }
          &.yellow {
            background: #f5be4f;
          }

          &.green {
            background: #62c655;
          }
        }
      }
    }
  }
</style>
