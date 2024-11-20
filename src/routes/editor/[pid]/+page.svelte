<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();

  function handleDrag(event: DragEvent) {
    console.log('drag event', event);
  }

  function handleDrop(event: DragEvent) {
    console.log('drag event', event);
  }
</script>

<h1 draggable="true" ondrag={handleDrag} ondrop={handleDrop}>Welcome to editor: {data.pid}</h1>
