<template>
	<div class="max-w-xl mx-auto px-4 sm:px-0">
		<header class="text-center py-8">
			<h1 class="text-4xl font-bold inline-block relative">Suru<span class="">Koto</span></h1>
			<p class="mt-4">You should remamber what you have to do!</p>
		</header>
		<div class="mt-4">
			<label for="task_title" class="block text-sm font-medium text-gray-700">Your Task</label>
			<div class="flex mt-1">
				<input
					type="text"
					id="task_title"
					placeholder="Describe your task..."
					class="px-3 py-3 sm:py-4 bg-white placeholder-gray-400 focus:ring-green-500 focus:border-green-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-tl rounded-bl"
				/>
				<button type="button" class="flex items-center px-4 whitespace-nowrap bg-green-500 text-white rounded-tr rounded-br shadow-md">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
					</svg>
					<span>Add</span>
				</button>
			</div>
		</div>
		<div class="mt-12 flex gap-6 justify-between">
			<span class="px-1 cursor-pointer text-gray-700 font-medium border-l-4 border-gray-300 pl-2 text-xs sm:text-sm">All (16)</span>
			<span class="px-1 cursor-pointer text-gray-400 border-l-4 border-blue-400 pl-2 text-xs sm:text-sm">Open (11)</span>
			<span class="px-1 cursor-pointer text-gray-400 border-l-4 border-yellow-300 pl-2 text-xs sm:text-sm">Inprogress (4)</span>
			<span class="px-1 cursor-pointer text-gray-400 border-l-4 border-green-500 pl-2 text-xs sm:text-sm">Complete (1)</span>
		</div>
		<hr class="mt-4" />
		<div class="space-y-3 mt-4">
			<div
				v-for="task in tasks"
				:key="task.id"
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
		</div>
		<app-dialog :isOpen="showEditDialog" @closed="showEditDialog = !showEditDialog"></app-dialog>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
import AppDialog from './components/app-dialog.vue';

export default {
	name: 'App',
	components: {
		AppDialog,
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
