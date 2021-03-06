import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../database/models/User';

class AuthController{
    async authenticate(req: Request, res: Response){
        const userRepository = getRepository(User);

        const { email, password } = req.body;

        const user = await userRepository.findOne({ where: {email}});

        if(!user){
            return res.sendStatus(401)
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword){
            return res.sendStatus(401);
        }

        const token = jwt.sign({ id: user.id }, 'secret', {expiresIn: '7d'});


        return res.json({
            user,
            token,
        })
    }
}

export default new AuthController();