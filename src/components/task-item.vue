<template>
	<div
		class="flex px-4 py-3 rounded shadow bg-white justify-between items-center border-l-4"
		:class="{
			'border-green-500': task.complete,
			'border-yellow-300': task.inProgress,
			'border-blue-400': !task.inProgress && !task.complete,
		}"
	>
		<h3 class="cursor-pointer font-light mr-2 whitespace-nowrap overflow-x-hidden overflow-ellipsis">{{ task.title }}</h3>
		<div class="flex justify-between items-center gap-4">
			<button class="text-green-500" @click="editTask(task)">
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
					<path
						fill-rule="evenodd"
						d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<button class="text-red-400">
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		task: {
			type: Object,
			required: true,
		},
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
