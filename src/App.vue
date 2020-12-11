<template>
	<div class="max-w-xl mx-auto px-4 sm:px-0">
		<header class="text-center py-8">
			<h1 class="text-4xl font-bold inline-block relative">Suru<span class="">Koto</span></h1>
			<p class="mt-4">You should remamber what you have to do!</p>
		</header>
		<div class="mt-4">
			<new-task></new-task>
		</div>
		<div class="mt-12 flex gap-6 justify-between">
			<span class="px-1 cursor-pointer text-gray-700 font-medium border-l-4 border-gray-300 pl-2 text-xs sm:text-sm">All (16)</span>
			<span class="px-1 cursor-pointer text-gray-400 border-l-4 border-blue-400 pl-2 text-xs sm:text-sm">Open (11)</span>
			<span class="px-1 cursor-pointer text-gray-400 border-l-4 border-yellow-300 pl-2 text-xs sm:text-sm">Inprogress (4)</span>
			<span class="px-1 cursor-pointer text-gray-400 border-l-4 border-green-500 pl-2 text-xs sm:text-sm">Complete (1)</span>
		</div>
		<hr class="mt-4" />
		<div class="space-y-3 mt-4">
			<task-item v-for="task in tasks" :key="task.id" :task="task"></task-item>
		</div>
		<app-dialog :isOpen="showEditDialog" @closed="showEditDialog = !showEditDialog"></app-dialog>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
import NewTask from './components/new-task.vue';
import TaskItem from './components/task-item.vue';
import AppDialog from './components/app-dialog.vue';

export default {
	name: 'App',
	components: {
		AppDialog,
		NewTask,
		TaskItem,
	},
	setup() {
		const tasks = ref([]);
		const showEditDialog = ref(false);
		let currentTask = reactive({
			id: 0,
			title: '',
			complete: false,
			inProgress: false,
		});

		tasks.value.push({
			id: 1,
			title: 'Deploy website',
			complete: false,
			inProgress: false,
		});

		tasks.value.push({
			id: 2,
			title: 'Add new images',
			complete: true,
			inProgress: false,
		});

		tasks.value.push({
			id: 2,
			title: 'Redesign mobile app',
			complete: false,
			inProgress: true,
		});

		function editTask(task) {
			showEditDialog.value = true;
			currentTask = task;
		}

		return {
			tasks,
			showEditDialog,
			editTask,
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
