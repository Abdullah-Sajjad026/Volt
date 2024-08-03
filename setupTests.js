import { beforeAll, vi } from "vitest";

beforeAll(() => {
	// Mock window
	vi.mock("window", () => ({
		location: {
			href: "",
		},
		reload: vi.fn(),
	}));

	// Mock localStorage
	vi.mock("localStorage", () => ({
		getItem: vi.fn(),
		setItem: vi.fn(),
		removeItem: vi.fn(),
	}));

	// Mock next/router
	vi.mock("next/router", () => ({
		useRouter: () => ({
			asPath: "",
			beforePopState: vi.fn(() => null),
			events: {
				on: vi.fn(),
				off: vi.fn(),
			},
			pathname: "",
			prefetch: vi.fn(() => null),
			push: vi.fn(),
			query: "",
			reload: vi.fn(),
			route: "/",
		}),
	}));
});
