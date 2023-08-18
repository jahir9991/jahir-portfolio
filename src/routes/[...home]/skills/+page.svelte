<script>
  import SubMenu from "$lib/components/sub-menu.svelte";
    import Skillpage from "../../../pages/skillpage.svelte";

</script>

<div class="grid grid-cols-6 h-full w-full">
  <div class="menu-bar h-full w-full col-span-1">
    <SubMenu />
  </div>
  <div class="side-menu h-full w-full col-span-5">
    <Skillpage></Skillpage>
  </div>
</div>
