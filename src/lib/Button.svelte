<script>
  let { Icon, onclick, id } = $props();
</script>

<div onclick={onclick} id={id}>
  <Icon />
</div>

<style>
  div {
    cursor: pointer;
  }
</style>
