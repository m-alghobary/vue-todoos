<template>
	<div class="w-full">
		<label class="block text-sm font-medium text-gray-700"> Assigned to </label>
		<div class="mt-1 relative">
			<button
				@click="isOpen = !isOpen"
				type="button"
				class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
			>
				<span class="flex items-center">
					<span class="block truncate"> {{ selectedState.text }} </span>
				</span>
				<span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			</button>
			<div v-show="isOpen" class="absolute mt-1 w-full rounded-md bg-white shadow-lg">
				<ul class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
					<li
						v-for="(state, i) in states"
						:key="i"
						@click="selectState(state)"
						class="cursor-default hover:bg-green-500 hover:text-white select-none relative py-2 pl-3 pr-9"
					>
						<div class="flex items-center">
							<span class="ml-3 block font-normal truncate" :class="{ 'font-semibold': state.selected }"> {{ state.text }} </span>
						</div>

						<span v-if="state.selected" class="absolute inset-y-0 right-0 flex items-center pr-4">
							<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref, watch } from 'vue';
export default {
	props: {
		modelValue: {
			type: String,
		},
	},
	setup(props, ctx) {
		const isOpen = ref(false);

		const states = ref([
			{ text: 'Open', selected: false },
			{ text: 'In Progress', selected: false },
			{ text: 'Completed', selected: false },
		]);

		const selectedState = ref({ text: props.modelValue, selected: true });
		watch(states, (val) => {
			selectedState.value = val.find((state) => state.selected);
		});

		function selectState(state) {
			states.value = states.value.map(({ text }) => ({
				text,
				selected: false,
			}));

			states.value.find((s) => s.text === state.text).selected = true;
			isOpen.value = false;

			ctx.emit('update:modelValue', state.text);
		}

		return {
			isOpen,
			states,
			selectedState,
			selectState,
		};
	},
};
</script>

<style lang="scss" scoped></style>
