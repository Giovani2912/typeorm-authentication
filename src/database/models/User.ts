import {Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from 'typeorm'
import { v4 as uuid } from "uuid";
import bcrypt from 'bcryptjs';


@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
    }
    
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
      this.password = bcrypt.hashSync(this.password, 8);
    }
}


    
export default User