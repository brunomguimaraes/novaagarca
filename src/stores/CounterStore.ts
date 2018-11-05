import { RootStore } from "./";
import { observable, action, computed } from "mobx";

export class CounterStore {
	protected rootStore: RootStore;

	@observable
	public count: number = 0;

	@computed
	public get formatedCount() {
		return `Contador: ${this.count}`;
	}

	@action
	public incrementCount = () => {
		this.count++;
	};

	@action
	public decrementCount = () => {
		this.count--;
	};

	@action
	public resetCount = () => {
		this.count = 0;
	};

	public constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}
}
