<script>
  let { title, date, summary, picture, attrib, links, notes } = $props();

  let showMeetingNotes = $state(false);
  let showAttribution = $state(false);
</script>

<div class="terminal-card">
  {#if picture}
    <figure style="background-image: url(/images/{picture});" alt={(attrib) || ""}></figure>
  {/if}
  <header>{title}</header>
  <div>
    <p>
      <em>{date}</em>
    </p>
    <p>{@html summary}</p>
    <ul>
    {#each links as link}
      <li>
        <a target="_blank" href={link.url} data-sveltekit-reload>{link.name}</a>
      </li>
    {/each}
    </ul>
    <div class="btn-group btn-block">
      {#if notes}
        <button onclick={() => (showMeetingNotes = !showMeetingNotes) && (showAttribution = false)} class="btn btn-default btn-block">Notes</button>
      {/if}
      {#if attrib}
        <button onclick={() => (showAttribution = !showAttribution) && (showMeetingNotes = false)} class="btn btn-default btn-block">Attribution</button>
      {/if}
    </div>
    {#if showMeetingNotes}
      <br>
      <p>{@html notes}</p>
    {/if}
    {#if showAttribution}
      <br>
      <p>{@html attrib}</p>
    {/if}
  </div>
</div>

<style>
  .terminal-card {
    flex: 0 0 calc(50% - 0.5rem);
  }
  .terminal-card figure {
    width: 100%;
    height: 256px;
    background-position: center;
    background-size: cover;
    background-color: white;
  }
  @media screen and (max-width: 800px) {
    .terminal-card {
      flex: 0 0 100%;
    }
  }
</style>
