<script>
  import Officer from "$lib/Officer.svelte";

  import { officers } from "../../../data/officers.json";
</script>

<svelte:head>
  <title>Officers • Hashdump</title>
</svelte:head>

{#each officers as officer}
  <Officer {...officer} />
{/each}
