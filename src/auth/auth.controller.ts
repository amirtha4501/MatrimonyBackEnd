import { Controller, Post, Body, ValidationPipe, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthSignupDto } from './dto/auth.signup.dto';
import { AuthService } from './auth.service';
import { AuthSigninDto } from './dto/auth.signin.dto';
// import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authSignupDto: AuthSignupDto): Promise<void> {
        return this.authService.signUp(authSignupDto);
    }

    // @Post('/upload')
    // @UseInterceptors(FileInterceptor('file'))
    // uploadFile(@UploadedFile() file) {
    // console.log(file);
    // }

    @Post('/signin')
    signIn(@Body() authSigninDto: AuthSigninDto): Promise<{ accessToken: string }> {
        return this.authService.signIn(authSigninDto);

    }

}
