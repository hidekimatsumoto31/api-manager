import container from "../inversify.config";
import Client from "../interfaces/Client";
import TYPES from "../interfaces/types";

import axios from "axios";
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ApiManager', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('fetch data integration', async () => {
		const data = [{
			id: 1,
			userId: 1,
			title: 'Any',
			completed: true
		}]

		mockedAxios.get.mockResolvedValue({ data: data });
		const todoClient = container.get<Client>(TYPES.Client);

		const result = await todoClient.fetchData();
		expect(result).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					id: 1,
					userId: 1,
					title: 'Any',
					completed: true
				}),
			]),
		);
	});
});

