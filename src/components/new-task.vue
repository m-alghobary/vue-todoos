<template>
	<label for="task_title" class="block text-sm font-medium text-gray-700">Your Task</label>
	<div class="flex mt-1">
		<base-input v-model="title" id="task_title" placeholder="Describe your task..." class="rounded-tl rounded-bl" />
		<base-btn class="bg-green-500 text-white hover:bg-green-600 shadow-md rounded-tr rounded-br" @click="submit">
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
			</svg>
			<span>Add</span>
		</base-btn>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	emits: ['submit'],
	setup(props, ctx) {
		const title = ref('');

		function submit() {
			ctx.emit('submit', {
				title: title.value,
				complete: false,
				inProgress: false,
			});
		}

		return {
			title,
			submit,
		};
	},
};
</script>

<style lang="scss" scoped></style>
