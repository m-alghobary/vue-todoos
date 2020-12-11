<template>
	<div class="space-y-3">
		<template v-if="tasks.length">
			<task-item v-for="task in tasks" :key="task.id" :task="task"></task-item>
		</template>
		<div v-else class="text-gray-600 text-center font-light">No tasks yet.</div>
	</div>
</template>

<script>
import TaskItem from './task-item.vue';

export default {
	components: {
		TaskItem,
	},
	props: {
		tasks: {
			type: Array,
			default: () => [],
		},
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
