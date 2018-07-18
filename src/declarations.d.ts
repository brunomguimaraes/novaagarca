interface NodeModule {
	hot: {
		accept(path: string | undefined, fn: () => void): void;
	};
}
