<script>
	import { Field } from "../components";
	import { locale, scope } from "../store";
	import { constants } from "../constants";
	import { getScope } from "../utils";

	const { en, es } = constants;
	$: lang = $locale ? en : es;
	$: ipaddress = [0, 0, 0, 0];
	$: netmask = [0, 0, 0, 0];
	$: prefix = 0;

	let modal;
	let maskFormat = true;

	$: hasIp = ipaddress.reduce((acc, oct) => acc + oct, 0) > 0;
	$: hasNetmask = netmask.reduce((acc, oct) => acc + oct, 0) > 0 || prefix > 0;

	const calculate = () => {
		const mask = prefix ? prefix : netmask;
		const network = { address: ipaddress, netmask: mask };
		const result = getScope(network);
		scope.set(result);
		modal.click();
	};
</script>

<label for="scope-results" bind:this={modal} class="hidden" />
<main class="view">
	<h2 class="text-3xl mt-8">{lang.scope_title}</h2>
	<div class="divider" />
	<div class="flex flex-col gap-4 mt-4 ml-4">
		<div class="">
			<Field bind:values={ipaddress} label={lang.scope_input_address} />
		</div>
		<div class=" mt-4">
			{#if maskFormat}
				<Field bind:values={netmask} label={lang.scope_input_netmask} />
			{:else}
				<div class="form-control w-full">
					<label for="">
						<span class="label-text">{lang.scope_input_prefix}</span>
					</label>
					<input
						type="number"
						class="input input-bordered w-24"
						bind:value={prefix}
					/>
				</div>
			{/if}
			<div class="w-full mt-4">
				<label class="swap swap-flip">
					<input
						type="checkbox"
						bind:checked={maskFormat}
						on:change={() => {
							netmask = [0, 0, 0, 0];
							prefix = 0;
						}}
					/>
					<div class="swap-on">
						{lang.scope_toggle_label}
						<span class="badge badge-info">{lang.scope_input_formats[0]}</span>
					</div>
					<div class="swap-off">
						{lang.scope_toggle_label}
						<span class="badge badge-accent">{lang.scope_input_formats[1]}</span
						>
					</div>
				</label>
			</div>
		</div>
		<div class="flex gap-2 mt-4">
			<button
				class="btn btn-success"
				on:click={calculate}
				disabled={!hasIp || !hasNetmask}
			>
				{lang.scope_call_to_action}
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
