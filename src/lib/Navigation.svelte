<script>
	import { darkMode } from "./theme.js";
	import Appearance from "$lib/icons/Appearance.svelte";
	import Sidebar from "$lib/icons/Sidebar.svelte";
	import Button from "$lib/Button.svelte";
</script>

<div class="title">
	<h2>Hashdump Security Club</h2>
	<div class="icons">
		<Button Icon={Appearance} onclick={() => $darkMode = ($darkMode) ? false : true} id="darkThemeToggle" />
		<Button Icon={Sidebar} onclick={() => false} />
	</div>
</div>

<ul>
	<li>
		<a href="/">Home</a>
	</li>
	<li>
		<a href="/meetings">Meetings</a>
	</li>
	<li>
		<a href="/officers">Officers</a>
	</li>
	<li>
		<a href="/documents/Constitution.pdf">Constitution</a>
	</li>
</ul>

<style>
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
</style>
