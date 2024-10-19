import { Module } from "@nestjs/common";
import { ConnectionTestModule } from "./modules/connection-test/connection-test.module";
@Module({
  imports: [ConnectionTestModule],
  providers: [],
})
export class AppModule {}
