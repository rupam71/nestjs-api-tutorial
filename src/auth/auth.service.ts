import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Auth, AuthDocument } from "./auth.schema";
import { CreateAuthDto } from "./types/createAuth.dto";

@Injectable()
export class AuthService{
    constructor(@InjectModel(Auth.name) private authModel: Model<AuthDocument>) {}
    async signup(createAuth: CreateAuthDto) {
        try {
            const createdAuth = new this.authModel(createAuth);
            await createdAuth.save();
            return createdAuth;
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async create(createCatDto: any): Promise<Auth> {
        const createdCat = new this.authModel(createCatDto);
        return createdCat.save();
      }

    signin() {
        return {
            msg: 'I have signin'
        }
    }
}