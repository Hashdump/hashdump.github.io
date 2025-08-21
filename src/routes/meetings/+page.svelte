<script>
  import Meeting from "$lib/Meeting.svelte";
  import { meetings } from "../../../data/meetings.json";

  const currentDate = new Date();

  const upcomingMeetings = meetings.filter(item => new Date(item.date.replaceAll(/(st|nd|rd|th),/gu, "")) > currentDate);
  const previousMeetings = meetings.filter(item => new Date(item.date.replaceAll(/(st|nd|rd|th),/gu, "")) < currentDate).reverse();
</script>

<svelte:head>
  <title>Meetings • Hashdump</title>
</svelte:head>

{#if upcomingMeetings.length > 0}
  <h2>Upcoming Meetings</h2>
  {#each upcomingMeetings as meeting}
    <Meeting {...meeting} />
  {/each}
{/if}

{#if previousMeetings.length > 0}
  <h2>Previous Meetings</h2>
  {#each previousMeetings as meeting}
    <Meeting {...meeting} />
  {/each}
{/if}
