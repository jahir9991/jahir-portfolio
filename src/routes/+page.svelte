<script>
  import { goto } from '$app/navigation';
    import { redirect } from '@sveltejs/kit';
 
 export function load() {
    console.log('calling...');
 goto('/vs');
 }

 
</script>


hello