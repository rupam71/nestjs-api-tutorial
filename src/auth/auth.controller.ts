import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./types/createAuth.dto";

@Controller('auth') //POST /auth
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('signup') //POST /auth/signup
    signup(@Body() createAuth: CreateAuthDto) {
        return this.authService.signup(createAuth)
    }

    @Post('signin') //POST /auth/signin
    signin() {
        return this.authService.signin()
    }
}