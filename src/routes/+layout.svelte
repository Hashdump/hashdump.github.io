<script>
	import { ModeWatcher } from "mode-watcher";
	import Navigation from "$lib/Navigation.svelte";
	import Footer from "$lib/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<link rel="stylesheet" href="/style.css" />
</svelte:head>

<div class="main">
	<Navigation />
	<div>
		{@render children()}
		<Footer />
		<ModeWatcher />
	</div>
</div>

<style>
	.main {
		max-width: 1000px;
		display: flex;
		gap: 1rem;
	}
	.main div {
		max-width: 700px;
		width: auto;
	}
	#toggleSidebar {
		display: none;
	}
	@media screen and (max-width: 600px) {
		.main {
			display: unset;
		}
		#toggleSidebar {
			display: unset:
		}
	}
</style>
