import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  Unique,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { hash } from 'bcrypt';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Bill', description: 'First Name' })
  @Column({ name: 'first_name', length: 255 })
  firstName: string;

  @ApiProperty({ example: 'Gates', description: 'Last Name' })
  @Column({ name: 'last_name', length: 255 })
  lastName: string;

  @ApiProperty({ example: 'dev.lacarte@gmail.com', description: 'email' })
  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @ApiProperty({ example: 'p01234', description: 'password' })
  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @ApiProperty({ example: '1984-01-01', description: 'Birthday' })
  @Column({ type: 'timestamp' })
  birthdate: Date;

  @ApiProperty({ example: '2020-01-11', description: 'Created At' })
  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   createdAt: Date;

//   @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
//   updatedAt: Date


  @ApiProperty({ example: true, description: 'is user Active?' })
  @Column({ name: 'is_active', type: 'bool', default: true })
  isActive: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
}
