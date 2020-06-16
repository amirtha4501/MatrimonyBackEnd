import { Controller, Get, Param, Query, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { GetProfilesFilterDto } from './dto/get-profiles-filter.dto';
import { Profile } from './profile.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('profiles')
@UseGuards(AuthGuard())
export class ProfilesController {
    constructor(private profilesService: ProfilesService) { }

    // @Get()
    // getProfiles(@Query(ValidationPipe) filterDto: GetProfilesFilterDto): Profile[] {
    //     if(Object.keys(filterDto).length) {
    //         return this.profilesService.getProfilesWithFilters(filterDto);
    //     } 
    //     else {
    //         return this.profilesService.getAllProfiles();
    //     }
    // }

    @Get('/:id')
    getProfileById(@Param('id', ParseIntPipe) id: number ): Promise<Profile> {
        return this.profilesService.getProfileById(id)
    }

}
