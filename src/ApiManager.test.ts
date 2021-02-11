import container from "./inversify.config";
import Client from "./interfaces/Client";
import TYPES from "./interfaces/types";
import ApiManager from './ApiManager'

describe('ApiManager', () => {
	it('fetch data integration', async () => {
		const todoClient = container.get<Client>(TYPES.Client);
		const apiManager = new ApiManager(todoClient)

		const result = await apiManager.fetchData();
		expect(result).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					id: expect.any(Number),
					userId: expect.any(Number),
					title: expect.any(String),
					completed: expect.any(Boolean)
				}),
			]),
		);
	});
});
