<template>
	<input
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
		:type="type"
		class="px-3 py-3 sm:py-4 bg-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500 block w-full shadow-md sm:text-sm border-gray-300"
	/>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'text',
			validate: (val) => ['text', 'email', 'password', 'number'].includes(val),
		},
		modelValue: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped></style>
