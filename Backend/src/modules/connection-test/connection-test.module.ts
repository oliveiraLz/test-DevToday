import { Module } from "@nestjs/common";
import { ConnectionTestService } from "./connection-test.service";
import { ConnectionTestController } from "./connection-test.controller";
// import { ConnectionTestProviders } from "./connection-test.providers";

@Module({
  imports: [],
  controllers: [ConnectionTestController],
  providers: [ConnectionTestService],
  exports: [],
})
export class ConnectionTestModule {}
