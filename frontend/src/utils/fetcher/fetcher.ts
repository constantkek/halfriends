import { BASE_URL } from "@/config/config";

export const fetcher = {
	get: async<T>(url: string): Promise<T> => {
		return fetch(url, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': BASE_URL,
			},
		}).then(response => response.json());
	},
	post: async<T>(url: string, data: unknown = {}): Promise<T> => {
		return fetch(url, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': BASE_URL,
			},
			body: JSON.stringify(data),
		}).then(response => response.json());
	},
}