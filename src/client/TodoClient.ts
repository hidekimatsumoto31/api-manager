import axios from 'axios';
import { injectable } from "inversify";
import Client from "../interfaces/Client";

export type TodoObject = {
	id: number,
	userId: number,
  title: string;
  completed: boolean;
};

@injectable()
export class TodoClient implements Client {

	public async fetchData(): Promise<TodoObject[]> {
		const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
		return result.data
	}
}

