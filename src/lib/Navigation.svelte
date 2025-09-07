<script>
	import { toggleMode } from "mode-watcher";
	import { page } from "$app/state";
	import { browser } from "$app/environment";
	import { links } from "../../data/links.json";
	import Contrast from "$lib/icons/Contrast.svelte";

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
					<a href="/documents/Constitution.pdf" class="menu-item" data-sveltekit-reload>Constitution</a>
				</li>
				<li>
					<div class="icons">
						{#each links as { name, url, openInNewTab, svg }}
							<a href={url} title={name} target={(openInNewTab) ? "_blank" : ""} data-sveltekit-reload>
								{@html svg}
							</a>
						{/each}
						<button onclick={toggleMode} title="Toggle light/dark mode">
							<Contrast />
						</button>
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

	.terminal-menu .icons button, .terminal-menu .icons a {
		display: flex;
	}

	.icons button {
		border: none;
		cursor: pointer;
		background-color: transparent;
		padding: 0px;
		margin: 0px;
		color: var(--secondary-color);
	}

	.icons button:hover {
		color: var(--font-color);
	}
</style>
