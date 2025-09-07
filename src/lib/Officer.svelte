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

<div class="terminal-media">
  <div class="terminal-media-left">
    <div class="terminal-media-avatarholder">
      <img src={"/images/officers/" + picture} alt={name} />
    </div>
  </div>
  <div class="terminal-media-body">
    <div class="terminal-media-flex">
      <div class="terminal-media-heading">
        {name}
        {#if pronouns}
          ({pronounString})
        {/if}
      </div>
      <div>/ {title}</div>
    </div>
    <div class="terminal-media-content">
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
        {@html `<a onClick="${emailProtectedToNormal}">${emailProtected}</a>`}
      </div>
    </div>
  </div>
</div>

<style>
  .terminal-media img {
    max-width: unset;
    width: 200px;
    height: 200px;
  }
  .terminal-media-flex {
    display: flex;
    gap: 1ex;
  }
  @media screen and (max-width: 480px) {
    .terminal-media {
      display: flex;
      flex-direction: column;
    }
    .terminal-media img {
      width: 100%;
      height: 100%;
    }
  }
</style>
