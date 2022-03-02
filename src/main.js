import App from './App.svelte';
import Resume from './resume.svelte';

const app = new Resume({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;