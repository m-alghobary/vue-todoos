<template>
	<button
		:type="type"
		class="inline-flex justify-center items-center px-4 py-2 whitespace-nowrap border border-transparent shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
		:class="{ 'block w-full': block }"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'button',
			validate: (val) => ['button', 'submit', 'reset'].includes(val),
		},
		block: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped></style>
