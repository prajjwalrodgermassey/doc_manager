import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UsersRoles {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  role_id: number;

  @Column('varchar')
  created_by: string;

  @Column('varchar')
  updated_by: string;

  @Column('varchar', { nullable: true })
  deleted_by: string;

  @CreateDateColumn()
  created_at: number;

  @UpdateDateColumn()
  updated_at: number;

  @DeleteDateColumn()
  deleted_at: number;

  @ManyToOne(() => User, (userInfo) => userInfo.users_roles)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user: User;

  @ManyToOne(() => Role, (roleInfo) => roleInfo.users_roles)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'role_id' })
  role: Role;
}
