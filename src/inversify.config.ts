import "reflect-metadata";
import { Container } from "inversify";
import Client from "./interfaces/Client";
import TYPES from "./interfaces/types";
import { TodoClient } from "./client/TodoClient";

const container = new Container();
container.bind<Client>(TYPES.Client).to(TodoClient);

export default container;
