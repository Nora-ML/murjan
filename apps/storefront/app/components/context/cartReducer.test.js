import { beforeEach, describe, expect, it, vi } from "vitest";
import cartReducer from "./cartReducer";

const ring = { id: "ring-1", name: "Butterfly Ring", price: 100 };
const empty = { cartItems: [] };

describe("cartReducer", () => {
	beforeEach(() => {
		vi.stubGlobal("localStorage", { setItem: vi.fn() });
		vi.spyOn(console, "log").mockImplementation(() => {});
	});

	it("adds a new item with quantity 1", () => {
		const state = cartReducer(empty, { type: "ADD_ITEM", payload: ring });
		expect(state.cartItems).toEqual([{ ...ring, quantity: 1, total: 100 }]);
		expect(state.itemCount).toBe(1);
		expect(state.total).toBe(100);
	});

	it("adding an item already in the cart increases its quantity", () => {
		const once = cartReducer(empty, { type: "ADD_ITEM", payload: ring });
		const twice = cartReducer(once, { type: "ADD_ITEM", payload: ring });
		expect(twice.cartItems).toHaveLength(1);
		expect(twice.cartItems[0].quantity).toBe(2);
		expect(twice.total).toBe(200);
	});

	it("leaves state unchanged when changing an item that is not in the cart", () => {
		for (const type of ["INCREASE", "DECREASE", "REMOVE_ITEM"]) {
			expect(cartReducer(empty, { type, payload: ring })).toBe(empty);
		}
	});

	it("hydrates the cart from stored items", () => {
		const stored = [{ ...ring, quantity: 2, total: 200 }];
		const state = cartReducer(empty, {
			type: "HYDRATE",
			payload: { items: stored },
		});
		expect(state.cartItems).toEqual(stored);
		expect(state.itemCount).toBe(2);
		expect(state.total).toBe(200);
	});

	it("removes an item", () => {
		const added = cartReducer(empty, { type: "ADD_ITEM", payload: ring });
		const removed = cartReducer(added, { type: "REMOVE_ITEM", payload: ring });
		expect(removed.cartItems).toEqual([]);
	});
});
