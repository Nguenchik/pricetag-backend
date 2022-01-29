import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { ContactInfo } from './contact-info.entity';
import { Meeting } from './meeting.entity';
import { Task } from './task.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo)
    private contactInfoRepo: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRepo: Repository<Meeting>,
    @InjectRepository(Task) private taskRepo: Repository<Task>,
  ) {}

  async seed() {
    // const ceo = new Employee()
    // ceo.name = 'Mr. Ceo'
    const ceo = this.employeeRepo.create({ name: 'Mr. CEO' });
    await this.employeeRepo.save(ceo);

    const ceoContactInfo = this.contactInfoRepo.create({
      email: 'test@ttest.com',
      phone: '123',
      // employeeId: ceo.id,
    });
    ceoContactInfo.employee = ceo;
    await this.contactInfoRepo.save(ceoContactInfo);

    const manager = this.employeeRepo.create({
      name: 'Alex',
      manager: ceo,
    });

    const task1 = this.taskRepo.create({ name: 'Hire people' });
    await this.employeeRepo.save(task1);
    const task2 = this.taskRepo.create({ name: 'Present to CEO' });
    await this.employeeRepo.save(task2);

    manager.tasks = [task1, task2];

    const meeting1 = this.meetingRepo.create({ zoomUrl: 'meeting.com' });

    meeting1.attendees = [ceo];
    await this.meetingRepo.save(meeting1);

    await this.employeeRepo.save(manager);
  }

  getEmployeeById(id: number) {
    // return this.employeeRepo.findOne(id, {
    //   relations: [
    //     'manager',
    //     'directReports',
    //     'tasks',
    //     'contactInfo',
    //     'meetings',
    //   ],
    // });
    return this.employeeRepo
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.directReports', 'directReports')
      .leftJoinAndSelect('employee.meetings', 'meetings')
      .leftJoinAndSelect('employee.tasks', 'tasks')
      .where('employee.id = :employeeId', { employeeId: id })
      .getOne();
  }

  deleteEmployee(id: number) {
    return this.employeeRepo.delete(id);
  }
}
