import { PartialType } from '@nestjs/swagger';
import { CreateConnectionTestDto } from './create-connection-test.dto';

export class UpdateConnectionTestDto extends PartialType(CreateConnectionTestDto) {}
