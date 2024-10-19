import { Repository } from "typeorm";
import { ConnectionTest } from "./entities/connection-test.entity";

export class ConnectionTestRepository {
  constructor(private repository: Repository<ConnectionTest>) {}

  // Future Methods that we need to implement:
  // save, findOne, findAll, update, delete ...
}
