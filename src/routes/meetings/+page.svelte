<script>
  import Meeting from "$lib/Meeting.svelte";
  import { filterMeetings } from "$lib/meetings.mjs";

  const { upcomingMeetings, previousMeetings } = filterMeetings();
</script>

<svelte:head>
  <title>Meetings • Hashdump</title>
</svelte:head>

<div class="container">
  {#if upcomingMeetings.length > 0}
    <h2>Upcoming Meetings</h2>
    <div>
      {#each upcomingMeetings as meeting}
        <Meeting {...meeting} />
      {/each}
    </div>
    <hr>
  {/if}
  {#if previousMeetings.length > 0}
    <h2>Previous Meetings</h2>
    <div>
      {#each previousMeetings.reverse() as meeting}
        <Meeting {...meeting} />
      {/each}
    </div>
  {/if}
</div>

<style>
  div div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
