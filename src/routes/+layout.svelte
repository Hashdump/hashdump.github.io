<script>
	import { base } from "$app/paths";

	import Navigation from "$lib/Navigation.svelte";
	import Footer from "$lib/Footer.svelte";
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={base + "/favicon.ico"} />
</svelte:head>

<Navigation />

{@render children()}

<Footer />
