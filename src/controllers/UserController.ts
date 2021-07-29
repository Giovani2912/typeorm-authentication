import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import User from '../database/models/User';

class UserController{
    async create(req: Request, res: Response){
        const userRepository = getRepository(User);

        const { email, password } = req.body;

        const userExists = await userRepository.findOne({ where: {email}});

        if(userExists){
            return res.sendStatus(409)
        }

        const user = userRepository.create({ email, password });
        await userRepository.save(user);
        return res.json(user);

    }
}

export default new UserController();