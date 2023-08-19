<script>

  import SpButton from "$lib/components/sp-button.svelte";

</script>
<main class="main">

        <section class="hero-section relative">
            <div class="flex justify-between">
                <SpButton title="hell0" type="top-left"></SpButton>
                <SpButton title="hell0" type="top-right"></SpButton>
            </div>
           
            <br>
            <br>
            <br>
            <br>
            <br>
           
            <div class="flex justify-between">
                <SpButton title="hell0" type="left"></SpButton>
                <SpButton title="hell0" type="right"></SpButton>
            </div>
            <br>
            <br>
            <br>
            <br>
        

            <div class="flex justify-between absolute bottom-0 w-full">
                <SpButton title="hell0" type="left-bottom"></SpButton>
                <SpButton title="hell0" type="right-bottom"></SpButton>
            </div>
   


            
        </section>
        
    

</main>


<style lang="postcss">
    .main{
        @apply  bg-primary  rounded-lg;
        height:98vh;

        .hero-section{
            @apply  text-primary h-full w-full;

        }

    }


</style>