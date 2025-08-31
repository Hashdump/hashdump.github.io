<script>
  let { title, date, summary, picture, attrib, links, notes } = $props();

  let showMeetingNotes = $state(false);
  let showAttribution = $state(false);
</script>

<div>
  <img src={"/images/" + picture} width="200" alt={(attrib) || ""}/>
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
