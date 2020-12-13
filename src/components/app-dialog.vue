<template>
	<div v-show="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
		<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div class="fixed inset-0 transition-opacity ease-out duration-1000" aria-hidden="true">
				<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
			</div>
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

			<div
				class="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-headline"
			>
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<div
							class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
						>
							<svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
								/>
							</svg>
						</div>
						<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
							<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">Edit this task</h3>
							<div class="mt-3">
								<label for="task_title" class="block text-sm font-medium text-gray-700">Task title</label>
								<base-input v-model="task.title" class="w-full mt-1 sm:py-2 rounded shadow-none"></base-input>
								<div class="mt-3 flex items-center justify-between">
									<base-select v-model="task.state"></base-select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
					<base-btn @click="$emit('closed')" class="rounded bg-green-500 text-white hover:bg-green-600 sm:ml-3 sm:w-auto">
						Deactivate
					</base-btn>
					<base-btn
						@click="$emit('closed')"
						class="rounded border-gray-300 bg-white text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto"
					>
						Cancel
					</base-btn>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import BaseSelect from './base/_base-select.vue';

export default {
	components: { BaseSelect },
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
		task: {
			type: Object,
			default: () => ({
				title: '',
				state: 'Open',
			}),
		},
	},
	setup(props) {
		const isOpen = computed(() => props.isOpen);
		return {
			isOpen,
		};
	},
};
</script>

<style lang="scss" scoped></style>
