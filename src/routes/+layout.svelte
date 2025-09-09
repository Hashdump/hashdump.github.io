<script>
	import "terminal.css";
	import { ModeWatcher } from "mode-watcher";
	import Navigation from "$lib/Navigation.svelte";
	import Footer from "$lib/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<link rel="stylesheet" href="/style.css" />
</svelte:head>

<div class="terminal">
	<Navigation />
	<div>
		{@render children()}
		<Footer />
		<ModeWatcher />
	</div>
</div>
