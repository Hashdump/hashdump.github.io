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
  <div class="terminal-media">
    <div class="terminal-media-left">
      <img src="/images/logo.png" alt="" id="logo-main" />
    </div>
    <div class="terminal-media-body">
      <h1>Welcome to CSU's Hashdump Security Club</h1>
      <p>Our goal is to increase awareness of physical, social, and electronic security. Our club participates in various security competitions, hosts demos and workshops, and invites speakers to come and share some of their real world experiences. All majors are welcome to join and participate.</p>
      <p>Want to get connected? Join our <a href="https://discord.gg/KfdWtGb">Discord</a> server!</p>
    </div>
  </div>

  <h2>Hashdump News</h2>
  {#each news as item}
    <div>
      <p>{@html item.content}</p>
    </div>
  {/each}

  <h2>Upcoming Meetings</h2>
  {#if upcomingMeetings.length > 0}
    <div class="meeting-grid">
      {#each upcomingMeetings as meeting}
        <Meeting {...meeting} />
      {/each}
    </div>
  {:else}
    <em>No upcoming meetings at this time...</em>
  {/if}
</div>

<style>
  .meeting-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  #logo-main {
    max-width: unset;
    width: 200px;
    height: unset;
  }

  @media screen and (max-width: 800px) {
    .terminal-media {
      display: flex;
      flex-direction: column;
    }

    #logo-main {
      display: none;
    }
  }

</style>
