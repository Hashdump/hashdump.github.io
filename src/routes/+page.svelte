<script>
  import Meeting from "$lib/Meeting.svelte";
  import { filterMeetings } from "$lib/meetings.mjs";
  import { news } from "../../data/news.json";

  const { upcomingMeetings } = filterMeetings();
</script>

<svelte:head>
  <title>Hashdump • Home</title>
</svelte:head>

<div class="container">
  <h1>Welcome to CSU's Hashdump Security Club</h1>
  <p>Our goal is to increase awareness of physical, social, and electronic security. Our club participates in various security competitions, hosts demos and workshops, and invites speakers to come and share some of their real world experiences. All majors are welcome to join and participate.</p>
  <p>Want to get connected? Join our <a href="https://discord.gg/KfdWtGb">Discord</a> server!</p>

  <h2>Hashdump News</h2>
  {#each news as item}
    <div>
      <p>{@html item.content}</p>
    </div>
  {/each}

  <h2>Upcoming Meetings</h2>
  {#if upcomingMeetings.length > 0}
    {#each upcomingMeetings as meeting}
      <Meeting {...meeting} />
    {/each}
  {:else}
    <em>No upcoming meetings at this time...</em>
  {/if}
</div>
