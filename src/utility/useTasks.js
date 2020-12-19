import { ref } from 'vue';

export const tasks = ref([]);

export function addTask(task) {
	tasks.value.push(task);
}

export function removeTask(task) {
	tasks.value = tasks.value.filter((t) => t.title !== task.title);
}

export function saveTask(oldTask, newTask) {
	return new Promise((resolve, reject) => {
		const index = tasks.value.findIndex((t) => t.title === oldTask.value.title);
		tasks.value[index] = newTask;
		resolve();
	});
}
