interface NodeModule {
	hot: {
		accept(path: string, fn: () => void): void;
	};
}
