<template>
	<div class="max-w-xl mx-auto px-4 sm:px-0">
		<header class="text-center py-8">
			<h1 class="text-4xl font-bold inline-block relative">Vue<span class="">Todooos</span></h1>
			<p class="mt-4">You should remamber what you have to do!</p>
		</header>
		<div class="mt-4">
			<new-task @submit="addTask"></new-task>
		</div>
		<div class="mt-12 flex gap-6 justify-between">
			<span class="px-1 cursor-pointer text-gray-700 font-medium border-l-4 border-gray-300 pl-2 text-xs sm:text-sm">All (16)</span>
			<span class="px-1 cursor-pointer text-gray-400 font-light border-l-4 border-blue-400 pl-2 text-xs sm:text-sm">Open (11)</span>
			<span class="px-1 cursor-pointer text-gray-400 font-light border-l-4 border-yellow-300 pl-2 text-xs sm:text-sm">Inprogress (4)</span>
			<span class="px-1 cursor-pointer text-gray-400 font-light border-l-4 border-green-500 pl-2 text-xs sm:text-sm">Complete (1)</span>
		</div>
		<hr class="mt-4" />
		<div class="mt-4">
			<task-list :tasks="tasks" @remove="removeTask" @update="updateTask"></task-list>
		</div>
		<app-dialog :task="currentTask" :isOpen="showEditDialog" @saved="saveTask" @closed="closeEditDialog"></app-dialog>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
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
		const tasks = ref([]);
		const showEditDialog = ref(false);
		const currentTask = ref({
			title: '',
			state: 'Open',
		});

		function addTask(task) {
			tasks.value.push(task);
		}

		function removeTask(task) {
			tasks.value = tasks.value.filter((t) => t.title !== task.title);
		}

		function updateTask(task) {
			currentTask.value = task;
			showEditDialog.value = true;
		}

		function saveTask(task) {
			const index = tasks.value.findIndex((t) => t.title === currentTask.value.title);
			tasks.value[index] = task;
			closeEditDialog();
		}

		function closeEditDialog() {
			showEditDialog.value = false;
		}

		return {
			tasks,
			showEditDialog,
			addTask,
			removeTask,
			updateTask,
			closeEditDialog,
			currentTask,
			saveTask,
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
