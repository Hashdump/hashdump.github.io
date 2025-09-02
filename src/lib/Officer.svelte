<script>
  let { title, email, name, picture, bio, responsibilities, pronouns } = $props();

  const emailProtected = email.replace("@", " [at] ");
  const emailProtectedToNormal = `window.open('mailto:' + '${emailProtected}'.replace(' [at] ', '@'))`;

  var pronounString = $state();

  if (pronouns) {

    if (pronouns.length > 1) {

      var pronounArray = [];

      for (const pronoun of pronouns) {

        pronounArray.push((pronoun.includes("/")) ? pronoun.split("/")[0] : pronoun);
      }

      pronounString = pronounArray.join("/");
    } else {

      pronounString = pronouns[0];
    }
  }
</script>

<div class="officer">
  <img src={"/images/officers/" + picture} alt={name} />
  <h2>
    {name}
    {#if pronouns}
      ({pronounString})
    {/if}
  </h2>
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
    {@html `<strong onClick="${emailProtectedToNormal}" class="link">${emailProtected}</strong>`}
  </div>
</div>

<style>
  .officer {
    flex: 0 0 calc(50% - 1rem);
  }
  .officer img {
    width: 50%;
    border-radius: 50%;
  }
  @media screen and (max-width: 800px) {
    .officer {
      flex: unset;
    }
  }
</style>
