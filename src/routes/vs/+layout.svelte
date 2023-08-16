
    <div class=" window">
    <div class="frame ">
      <div class="top ">
        <div class="circle red"></div>
        <div class="circle yellow"></div>
        <div class="circle green"></div>
      </div>
      <div class="body  ">
        <slot><!-- optional fallback --></slot>
      </div>
    </div>
    </div>


<style lang="postcss">



.window {
    @apply p-2;
.frame{

  /* @apply bg-red; */

@apply overflow-hidden rounded-md  w-full shadow-2xl  relative;

.body{
    @apply bg-green-900  w-full  relative  ;
    height: 92vh;
}
.top {
    @apply bg-slate-200 flex gap-2 ;
  display: flex;

  @apply px-4 py-3;

        .circle {
            @apply w-4 h-4 rounded-full bg-black;

                        &.red {
                    background: #ED6A5E;
                    }
                        &.yellow {
                    background: #F5BE4F;
                    }

                        &.green {
                    background: #62C655;
                    }

        }
    }

}
}


</style>