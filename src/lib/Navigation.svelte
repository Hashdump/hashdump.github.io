<script>
	import { toggleMode } from "mode-watcher";
	import { page } from "$app/state";
	import { browser } from "$app/environment";
	import { links } from "../../data/links.json";
	import Contrast from "$lib/icons/Contrast.svelte";
	import Menu from "$lib/icons/Menu.svelte";
	import Close from "$lib/icons/Close.svelte";
	import Button from "$lib/Button.svelte";

	let showMenu = $state(false);
</script>

<div class="navigation">
	<div>
		<div class="title">
		<h2>Hashdump<br> Security Club</h2>
			<div class="" id="toggleSidebar">
				{#if !showMenu}
					<Button Icon={Menu} onclick={() => showMenu = !showMenu} />
				{:else}
					<Button Icon={Close} onclick={() => showMenu = !showMenu} />
				{/if}
			</div>
		</div>
		<div style="display: {(showMenu) ? 'inherit' : ''};" class="menu">
			<ul>
				<li>
					<a href="/" aria-current={page.url.pathname == "/"}>Home</a>
				</li>
				<li>
					<a href="/meetings" aria-current={page.url.pathname == "/meetings"}>Meetings</a>
				</li>
				<li>
					<a href="/officers" aria-current={page.url.pathname == "/officers"}>Officers</a>
				</li>
				<li>
					<a href="/documents/Constitution.pdf">Constitution</a>
				</li>
			</ul>
			<div class="icons">
				{#each links as { name, url, openInNewTab, svg }}
					<a href={url} title={name} target={(openInNewTab) ? "_blank" : ""}>
						{@html svg}
					</a>
				{/each}
				<Button Icon={Contrast} onclick={toggleMode} />
			</div>
		</div>
	</div>
</div>

<style>
	.navigation {
		position: sticky;
		top: 0px;
		background-color: var(--primary-background);
		min-width: 300px;
		height: calc(100vh - 1rem);
	}
	.title {
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 8px;
	}
	ul {
		list-style-type: none;
		padding-left: unset;
		margin: 0px;
		font-size: 18px;		
	}
	li {
		display: flex;
		height: 2rem;
	}
	li:has(> a[aria-current="true"]) {
		background-color: var(--secondary-background);
	}
	li:has(> a[aria-current="true"]) a::before {
		content: "> ";
		color: unset;
	}
	li:has(> a[aria-current="true"]) a::after {
		content: " <";
		color: unset;
	}
	li a {
		text-align: center;
		flex-grow: 1;
	}
	#toggleSidebar {
		display: none;
	}
	.icons {
		/* background-image: linear-gradient(var(--primary-background), #00000000); */
		/* backdrop-filter: blur(1rem); */
		padding: 0.75rem;
		justify-content: center;
	}
	@media screen and (max-width: 600px) {
		.navigation {
			width: auto;
			height: auto;
			padding-bottom: 0px;
		}
		.menu {
			display: none;
		}
		.title {
			justify-content: space-between;
			text-align: unset;
		}
		h2 br {
			display: none;
		}
		#toggleSidebar {
			display: unset;
		}
		ul {
			outline: 1px solid var(--secondary-text);
			outline-left: unset;
			outline-right: unset;
		}
		.icons {
			gap: 10%;
			border-bottom: 1px solid var(--secondary-text);
		}
	}
</style>
