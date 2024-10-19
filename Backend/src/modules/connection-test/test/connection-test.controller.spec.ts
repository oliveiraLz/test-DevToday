import { Test, TestingModule } from "@nestjs/testing";
import { ConnectionTestController } from "../connection-test.controller";
import { ConnectionTestService } from "../connection-test.service";

describe("ConnectionTestController", () => {
  let controller: ConnectionTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConnectionTestController],
      providers: [ConnectionTestService],
    }).compile();

    controller = module.get<ConnectionTestController>(ConnectionTestController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
