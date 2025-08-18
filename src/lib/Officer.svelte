<script>
  let { title, email, name, picture, bio, responsibilities, pronouns } = $props();

  const emailProtected = email.replace("@", " [at] ");
  const emailProtectedToNormal = `window.open('mailto:' + '${emailProtected}'.replace(' [at] ', '@'))`;
</script>

<div>
  <img src={"/images/officers/" + picture} width="200" alt={name} />
  <h2>{name}</h2>
  <em>{title}</em>
  <p>{@html bio}</p>
  {#if responsibilities}
    <em>Responsibilities</em>
    <ul>
      {#each responsibilities as responsibility}
        <li>
          {responsibility}
        </li>
      {/each}
    </ul>
  {/if}
  <em>Contact</em>
  <div>
    {@html `<strong onClick="${emailProtectedToNormal}">${emailProtected}</strong>`}
  </div>
</div>
