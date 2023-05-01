<script>
	import { Brand } from "../components";
	import { constants } from "../constants";
	import { locale } from "../store";

	const { es, en } = constants;

	$: lang = $locale ? en : es;
</script>

<div class="p-8">
	<h2><Brand classes="text-5xl" /></h2>
	<div class="divider" />
	<div>
		<strong
			>{$locale ? "subnetting calculator" : "calculadora de subnetting"} v0.0.1</strong
		>
	</div>
	<p>
		{lang.indexhelptext}
		<a
			class="link"
			href="https://www.google.com"
			target="_blank"
			rel="noreferrer">{$locale ? "site" : "sitio web"}</a
		>
	</p>
</div>
