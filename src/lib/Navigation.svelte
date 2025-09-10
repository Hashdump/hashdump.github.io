<script>
	import { toggleMode, mode } from "mode-watcher";
	import { page } from "$app/state";
	import { browser } from "$app/environment";
	import { links } from "../../data/links.json";
	import Moon from "$lib/icons/Moon.svelte";
	import Sun from "$lib/icons/Sun.svelte";

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
					<a href="/meetings" class={(page.url.pathname == '/meetings/') ? 'menu-item active' : 'menu-item'}>Meetings</a>
				</li>
				<li>
					<a href="/officers" class={(page.url.pathname == '/officers/') ? 'menu-item active' : 'menu-item'}>Officers</a>
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
							{#if mode.current == "dark"}
								<Sun />
							{:else}
								<Moon />
							{/if}
						</button>
					</div>
				</li>
			</ul>
		</nav>
	</div>
	<img src="/images/logo.png" alt="" id="logo-header" />
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

	#logo-header {
		display: none;
		position: absolute;
		width: 30%;
		max-height: 181px;
		max-width: 181px;
		top: 10px;
		right: 10px;
	}

	@media screen and (max-width: 800px) {
		.terminal-nav {
			flex-direction: column;
			align-items: flex-start;
		}
		.terminal-menu ul {
			flex-direction: column;
			align-items: flex-start;
			margin-top: 0;
		}
		.terminal-menu li {
			margin: 0 0 0.5em;
		}
	}

	@media screen and (min-width: 350px) and (max-width: 800px) {
		#logo-header {
			display: initial;
		}
	}
</style>
