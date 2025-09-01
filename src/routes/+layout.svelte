<script>
	import { darkMode } from "$lib/theme.js";
	import Navigation from "$lib/Navigation.svelte";
	import Footer from "$lib/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<link rel="stylesheet" href="/style.css" />
</svelte:head>

<Navigation />

{@render children()}

<Footer />
