// import { DataSource } from "typeorm";
// import { ConnectionTest } from "./entities/connection-test.entity";

// export const ConnectionTestProviders = [
//   {
//     provide: "CONNECTION_TEST_REPOSITORY",
//     useFactory: (dataSource: DataSource) => dataSource.getRepository(ConnectionTest),
//     inject: ["DATA_SOURCE"],
//   },
// ];

//in this file I configure a provider and I am getting an instance from the entity repository
