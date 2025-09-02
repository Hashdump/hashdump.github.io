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
			<div class="icons" id="toggleSidebar">
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
		padding-bottom: 1rem;
		background-color: var(--primary-background);
		min-width: 200px;
		height: calc(100vh - 1rem);
	}
	.title {
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	ul {
		outline: 2px solid var(--primary-text);
		list-style-type: none;
		padding-left: unset;
		font-size: 18px;		
	}
	li a::before {
		content: "|";
		width: 0.1rem;
		margin-right: 0.5rem;
		background-color: var(--primary-background);
		color: var(--primary-background);
	}
	li a:hover::before {
		/* background-color: var(--secondary-brand); */
		color: var(--primary-brand);
	}
	li:has(> a[aria-current="true"]) {
		background-color: var(--secondary-background);
	}
	li a[aria-current="true"]::before {
		background-color: var(--primary-text);
		color: var(--primary-text);
	}
	#toggleSidebar {
		display: none;
	}
	.icons {
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
		.icons {
			justify-content: unset;
		}
	}
</style>
