<template>
	<div class="space-y-3">
		<template v-if="tasks.length">
			<transition-group name="tasks">
				<task-item
					v-for="task in tasks"
					:key="task"
					:task="task"
					@deleted="(task) => $emit('remove', task)"
					@edited="(task) => $emit('update', task)"
				></task-item>
			</transition-group>
		</template>
		<div v-else class="bg-gray-50 py-2 text-gray-500 text-sm text-center font-light">No tasks yet.</div>
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
	emits: ['remove', 'update'],
	setup() {
		return {};
	},
};
</script>

<style scoped>
.tasks-enter-active,
.tasks-leave-active {
	transition: all 0.4s ease;
}

.tasks-enter-from,
.tasks-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
