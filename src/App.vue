<template>
	<div class="max-w-xl mx-auto px-4 sm:px-0 pb-10">
		<header class="text-center py-8">
			<h1 class="text-4xl font-bold inline-block relative">Vue<span class="">Todooos</span></h1>
			<p class="mt-4">You should remamber what you have to do!</p>
		</header>
		<div class="mt-4">
			<new-task @submit="addTask"></new-task>
		</div>
		<div class="mt-12 flex gap-6 justify-between">
			<span class="tab border-gray-300" :class="{ 'tab--active': filter === 'All' }" @click="filter = 'All'">All ({{ allTasks }})</span>
			<span class="tab border-blue-400" :class="{ 'tab--active': filter === 'Open' }" @click="filter = 'Open'">Open ({{ openTasks }})</span>
			<span class="tab border-yellow-300" :class="{ 'tab--active': filter === 'In Progress' }" @click="filter = 'In Progress'"
				>In Progress ({{ inProgressTasks }})</span
			>
			<span class="tab border-green-500" :class="{ 'tab--active': filter === 'Completed' }" @click="filter = 'Completed'"
				>Completed ({{ completedTasks }})</span
			>
		</div>
		<div class="mt-4">
			<task-list :tasks="filteredTasks" @remove="removeTask" @update="updateTask"></task-list>
		</div>
		<app-dialog :key="currentTask" :task="currentTask" :isOpen="showEditDialog" @saved="saveUpdate" @closed="closeEditDialog"></app-dialog>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { tasks, addTask, removeTask, saveTask } from './utility/useTasks.js';
import NewTask from './components/new-task.vue';
import TaskList from './components/task-list.vue';
import AppDialog from './components/app-dialog.vue';

export default {
	name: 'App',
	components: {
		AppDialog,
		NewTask,
		TaskList,
	},
	setup() {
		const filter = ref('All');
		const filteredTasks = computed(() => {
			return tasks.value.filter((task) => {
				return filter.value === 'All' ? true : task.state === filter.value;
			});
		});
		const currentTask = ref({
			title: '',
			state: 'Open',
		});
		const showEditDialog = ref(false);

		const allTasks = computed(() => tasks.value.length);
		const openTasks = computed(() => tasks.value.filter((task) => task.state === 'Open').length);
		const inProgressTasks = computed(() => tasks.value.filter((task) => task.state === 'In Progress').length);
		const completedTasks = computed(() => tasks.value.filter((task) => task.state === 'Completed').length);

		function updateTask(task) {
			currentTask.value = task;
			showEditDialog.value = true;
		}

		function closeEditDialog() {
			showEditDialog.value = false;
		}

		function saveUpdate(task) {
			saveTask(currentTask, task).then(() => closeEditDialog());
		}

		return {
			tasks,
			showEditDialog,
			addTask,
			removeTask,
			updateTask,
			closeEditDialog,
			currentTask,
			saveUpdate,
			allTasks,
			openTasks,
			inProgressTasks,
			completedTasks,
			filteredTasks,
			filter,
		};
	},
};
</script>

<style scoped>
h1::before {
	content: '';
	position: absolute;
	width: 20px;
	height: 4px;
	background: rgb(16, 185, 129);
	top: 12px;
	left: -20px;
	transform: rotateZ(-60deg);
}

h1::after {
	content: '';
	position: absolute;
	width: 20px;
	height: 4px;
	background: rgb(110, 231, 185);
	top: 22px;
	left: -18px;
	transform: rotateZ(-60deg);
}
</style>
