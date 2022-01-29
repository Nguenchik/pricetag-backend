import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getHello(): Promise<any> {
    await this.employeeService.seed();
    // return this.employeeService.getEmployeeById(1);
    // return this.employeeService.deleteEmployee(1);
  }
}
