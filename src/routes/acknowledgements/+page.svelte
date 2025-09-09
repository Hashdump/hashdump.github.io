<script>
  import { acknowledgements } from "../../../data/acknowledgements.json";
</script>

<svelte:head>
  <title>Acknowledgements • Hashdump</title>
</svelte:head>

<div class="container">
  <table>
    <caption>Table of Acknowledgements</caption>
    <thead>
      <tr>
        <th>Name</th>
        <th>Purpose</th>
        <th>Reference</th>
      </tr>
    </thead>
    <tbody>
        {#each acknowledgements as { name, purpose, links }}
          <tr>
            <td>{name}</td>
            <td>{purpose}</td>
            <td>
              {#each links as { url, name }}
                <a href={url} target="_blank">{name}</a>
                <br>
              {/each}
            </td>
          </tr>
        {/each}
    </tbody>
  </table>
</div>
