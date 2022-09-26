import { Controller, Get, Post, Put, Delete, Body, Param, Query, Req, Res, UsePipes, ValidationPipe, ParseIntPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/createUsers.dto';
import { FindOneParams } from './validation/FindOneParams ';
import { UsersService } from './users.service';
import { VcuserPipe } from './pipes/vcuser.pipe';
import { AuthGuardGuard } from './guard/auth-guard.guard';

@Controller('users')
// @UseGuards(AuthGuardGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get(':id/:postID')
    // not recommend
    // getUserByID(@Req() request: Request, @Res() response: Response): object {
    //     return response.send({
    //         id: request.params.id,
    //         userName: 'mohamed',
    //         age: 25
    //     }
    //     )
    // }
    // recommend
    @UsePipes(new ValidationPipe())
    getUserByID(@Param() param: FindOneParams, @Param('postID', ParseIntPipe) postID: number) {
        const data = this.usersService.getUserByID(param, postID)
        if (data) {
            return data
        } else {
            throw new HttpException("No user to show", HttpStatus.NOT_FOUND);
        }
    }

    @Get()
    @UseGuards(AuthGuardGuard)
    getAllUsers(): object[] {
        return [
            {
                id: 1,
                userName: 'mohamed',
                age: 25
            },
            {
                id: 2,
                userName: 'ahmed',
                age: 40
            },
        ]
    }
    // param
    @Get('param')
    getDataQuery(@Query('name', ParseIntPipe) _name, @Query() query): object {
        return {
            state: 1,
            post: {
                name: _name,
                age: query.age
            }
        }
    }
    // => Not recommend 
    // @Post()
    // creteUser(@Req() request: Request, @Res() response: Response): object {
    //     return response.send({
    //         state: 1,
    //         post: {
    //             name: request.body.name,
    //             description: request.body.description,
    //             qty: request.body.qty,
    //         }
    //     })
    // }

    // recommend for post 
    @Post()
    @UsePipes(new ValidationPipe())
    creteUsers(@Body(VcuserPipe) user: CreateUserDto): object {
        return ({
            state: 1,
            id: user.id,
            age: user.age,
            name: user.name,
        })
    }

}
