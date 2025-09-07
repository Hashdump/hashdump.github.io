<script>
	import { toggleMode } from "mode-watcher";
	import { page } from "$app/state";
	import { browser } from "$app/environment";
	import { links } from "../../data/links.json";
	import Contrast from "$lib/icons/Contrast.svelte";
	import Button from "$lib/Button.svelte";

	let showMenu = $state(false);
</script>

<div class="container">
	<div class="terminal-nav">
		<header class="terminal-logo">
			<div class="logo terminal-prompt">
				<a href="/" aria-current={page.url.pathname == "/"}>Hashdump Security Club</a>
			</div>
		</header>
		<nav class="terminal-menu">
			<ul>
				<li>
					<a href="/meetings" class="menu-item" aria-current={page.url.pathname == "/meetings"}>Meetings</a>
				</li>
				<li>
					<a href="/officers" class="menu-item" aria-current={page.url.pathname == "/officers"}>Officers</a>
				</li>
				<li>
					<a href="/documents/Constitution.pdf" class="menu-item">Constitution</a>
				</li>
				<li>
					<div class="icons">
						{#each links as { name, url, openInNewTab, svg }}
							<a href={url} title={name} target={(openInNewTab) ? "_blank" : ""}>
								{@html svg}
							</a>
						{/each}
						<a><Button Icon={Contrast} onclick={toggleMode} /></a>
					</div>
				</li>
			</ul>
		</nav>
	</div>
</div>

<style>
	.icons {
		display: flex;
		gap: 0.5rem;
	}
</style>
