<script>
  import Meeting from "$lib/Meeting.svelte";
  import { filterMeetings } from "$lib/meetings.mjs";

  const { upcomingMeetings, previousMeetings } = filterMeetings();
</script>

<svelte:head>
  <title>Meetings • Hashdump</title>
</svelte:head>

<div class="container">
  <h1>Meeting List</h1>
  {#if upcomingMeetings.length > 0}
    <h2>Upcoming Meetings</h2>
    <div class="meeting-grid">
      {#each upcomingMeetings as meeting}
        <Meeting {...meeting} />
      {/each}
    </div>
    <hr>
  {/if}
  {#if previousMeetings.length > 0}
    <h2>Previous Meetings</h2>
    <div class="meeting-grid">
      {#each previousMeetings.reverse() as meeting}
        <Meeting {...meeting} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .meeting-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
