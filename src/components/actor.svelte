<script lang="ts">
  import type { ActorData } from '$lib/types';
  let { children } = $props();

  function handleDrag(event: DragEvent) {
    console.log('drag event', event);
  }

  function handleDrop(event: DragEvent) {
    console.log('drag event', event);
  }
</script>

<div>
  {#if children}
    {@render children()}
  {:else}
    <p>fallback content</p>
  {/if}
</div>
