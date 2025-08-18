<script>
	import Navigation from "$lib/Navigation.svelte";
	import Footer from "$lib/Footer.svelte";
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/logo.png" />
</svelte:head>

<Navigation />

{@render children()}

<Footer />
