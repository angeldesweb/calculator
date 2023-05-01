<script>
	import { Field } from "../components";
	import { locale, prefix } from "../store";
	import { constants } from "../constants";
	import { getPrefix } from "../utils";

	const { en, es } = constants;
	$: lang = $locale ? en : es;
	$: netmask = [0, 0, 0, 0];

	let modal;

	$: hasNetmask = netmask.reduce((acc, oct) => acc + oct, 0) > 0;

	const calculate = () => {
		const result = getPrefix(netmask);
		prefix.set(result);
		modal.click();
	};
</script>

<label for="mask-prefix" bind:this={modal} class="hidden" />
<main class="view">
	<h2 class="text-3xl mt-8">{lang.mask_prefix_title}</h2>
	<div class="divider" />
	<div class="flex flex-col gap-4 mt-4 ml-4">
		<div class=" mt-4">
			<Field bind:values={netmask} label={lang.scope_input_netmask} />
		</div>
		<div class="flex gap-2 mt-4">
			<button
				class="btn btn-success"
				on:click={calculate}
				disabled={!hasNetmask}
			>
				{lang.mask_prefix_call_ta}
			</button>
		</div>
	</div>
</main>

<style>
	.view {
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
	}
</style>
