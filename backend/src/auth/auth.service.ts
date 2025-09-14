import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/user.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private jwtService: JwtService,
    ) {}
    
    async register(name: string, email: string, password: string) {
        const existingUser = await this.userModel.findOne({ where: { email } });

        if (existingUser) {
            throw new BadRequestException('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userModel.create({
            name,
            email,
            password: hashedPassword,
        }as any);

        const payload = { username: newUser.email, sub: newUser.id, role: newUser.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
