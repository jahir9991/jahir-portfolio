
<script lang="ts">
    export let type:'left' | 'right'| 'top-left' | 'top-right' | 'left-bottom' | 'right-bottom' ="left";
    export let title=""
</script>



<button class="sp-btn {type}">
   <h1 class=" text-2xl font-bold">
    {title}
   </h1> 

</button>



<style lang="postcss">
    

.sp-btn {
    @apply relative  bg-secondary mx-0 my-auto h-16 w-64 ease-in-out duration-500 ;
    &:hover{
        @apply w-80;
    }



    &:before , &:after{
        @apply absolute w-2.5 h-2.5;
        content: "";
        position: absolute;
        background: -webkit-radial-gradient(100% 100%, circle, rgba(204, 0, 0, 0) 10px, #1b1b1b 10px);
    }

    &.top-left{
       @apply   rounded-br-lg;
            &:before {
                @apply -right-2.5 top-0 rotate-[0deg];
            }
            &:after{
            @apply left-0 -bottom-2.5;
        
            }
    } 
    &.top-right{
        @apply  rounded-bl-lg;
            &:before {
                @apply -left-2.5 top-0 rotate-90;
            }
            &:after{
            @apply right-0 -bottom-2.5 rotate-90;
        
            }
    } 



    &.left{
       @apply  rounded-l-none rounded-r-lg;
            &:before {
                @apply left-0 -top-2.5 rotate-[270deg];
            }
            &:after{
            @apply left-0 -bottom-2.5;
        
            }
    } 
    &.right{
        @apply  rounded-r-none rounded-l-lg;
            &:before {
                @apply right-0 -top-2.5 rotate-180;
            }
            &:after{
            @apply right-0 -bottom-2.5 rotate-90;
        
            }
    }

    &.left-bottom{
        @apply   rounded-tr-lg;
            &:before {
                @apply left-0 -top-2.5 rotate-[270deg];
            }
            &:after{
            @apply -right-2.5 bottom-0 rotate-[270deg];
        
            }
    } 
    &.right-bottom{
        @apply   rounded-tl-lg;
            &:before {
                @apply right-0 -top-2.5 rotate-180;
            }
            &:after{
            @apply -left-2.5 -bottom-0 rotate-180;
        
            }
    }



    
     
       
}
</style>