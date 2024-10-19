import { Test, TestingModule } from "@nestjs/testing";
import { ConnectionTestService } from "../connection-test.service";

describe("ConnectionTestService", () => {
  let service: ConnectionTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectionTestService],
    }).compile();

    service = module.get<ConnectionTestService>(ConnectionTestService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
