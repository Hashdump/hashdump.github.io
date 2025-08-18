<script>
  let { title, date, summary, picture, links, notes } = $props();
</script>

<div>
  <img src={"/images/" + picture} width="200" />
  <h3>{title}</h3>
  <em>{date}</em>
  <p>{@html summary}</p>
  {#each links as link}
    <a target="_blank" href={link.url}>{link.name}</a>
  {/each}
  {#if notes}
    <button onClick={"window.alert(" + notes + ")"}>Notes</button>
  {/if}
</div>
