<script>
  let { title, date, summary, picture, attrib, links, notes } = $props();

  let showMeetingNotes = $state(false);
  let showAttribution = $state(false);
</script>

<div class="meeting">
  <div style="background-image: url(/images/{picture});" alt={(attrib) || ""}></div>
  <h3>{title}</h3>
  <em>{date}</em>
  <p>{@html summary}</p>
  <ul>
  {#each links as link}
    <li>
      <a target="_blank" href={link.url}>{link.name}</a>
    </li>
  {/each}
  </ul>
  {#if notes}
    <button onclick={() => showMeetingNotes = !showMeetingNotes}>Notes</button>
  {/if}
  {#if showMeetingNotes}
    <p>{@html notes}</p>
  {/if}
  {#if attrib}
    <button onclick={() => showAttribution = !showAttribution}>Attribution</button>
  {/if}
  {#if showAttribution}
    <p>{@html attrib}</p>
  {/if}
</div>

<style>
  .meeting {
    flex: 0 0 calc(50% - 1rem);
  }
  .meeting div {
    width: 100%;
    height: 256px;
    background-position: center;
    background-size: cover;
  }
  @media screen and (max-width: 800px) {
    .meeting {
      flex: unset;
    }
  }
  @media screen and (max-width: 600px) {
  }
</style>
