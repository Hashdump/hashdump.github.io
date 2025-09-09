<script>
  import Officer from "$lib/Officer.svelte";

  import { officers } from "../../../data/officers.json";
</script>

<svelte:head>
  <title>Officers • Hashdump</title>
</svelte:head>

<div class="container">
  <h1>Current Officers</h1>
  <div>
    {#each officers as officer}
      <Officer {...officer} />
    {/each}
  </div>
</div>

<style>
  div div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
