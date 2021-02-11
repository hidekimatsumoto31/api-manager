import { inject } from "inversify";
import TYPES from './interfaces/types';
import Client from "./interfaces/Client";

export default class ApiManager {
	private client: Client;

	public constructor(
		@inject(TYPES.Client) client: Client
	) {
		this.client = client;
	}

	public fetchData(): Promise<any[]> {
		return this.client.fetchData();
	}
}
