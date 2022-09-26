import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param, Query, Redirect } from '@nestjs/common';
import { Request, Response } from 'express'
import { CreateItemDto } from './dto/create-item.dto';

import { Item } from './interfaces/item.interface';
import { ItemService } from './item.service';


@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) { }

    // req and res => not recommended
    // @Get('ab*cd') => //abcd, ab_cd, abecd
    // findAll1() {
    //     return 'This route uses a wildcard';
    // }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }


    @Get()
    async findAll(@Req() req: Request, @Res() res: Response): Promise<Response> {
        return res.send({
            state: 0,
            get: 'get all data'
        })
    }

    @Get('')
    findAllData(): Item[] {
        return this.itemService.findAll();
    }


    // get with param 

    // @Get(':id')
    // getWithParam(@Param() param): object {
    //     return {
    //         state: 1,
    //         getParam1: param.id,
    //     }
    // }

    // get with param 2
    // @Get(':ids')
    // getWithParam2(@Param('ids') ids): object {
    //     return {
    //         state: 1,
    //         getParam2: ids,
    //     }
    // }
    @Get(':id')
    getWithParam(@Param() param): Item {
        return this.itemService.findOne(param.id)
    }

    // get with Query 
    @Get(':name')
    getWithQuery(@Query() query): object {
        return {
            state: 1,
            getQuery: query.name,
        }
    }

    // post with dto in body
    @Post(':id?')
    // @HttpCode(204)
    // @Header('Cache-Control', 'none')
    // => Not recommend 
    // setData(@Req() request: Request, @Res() response: Response): object {
    //     return response.send({
    //         state: 1,
    //         post: {
    //             id: request.params.id,
    //             name: request.body.name,
    //             description: request.body.description,
    //             qty: request.body.qty,
    //         }
    //     })
    // }

    setData(@Body() items: CreateItemDto): object {
        return {
            state: 1,
            post: {
                name: items.name,
                description: items.description,
                qty: items.qty,
            }
        }
    }

    @Delete(':id')
    deleteData(@Param() param): object {
        return {
            state: 1,
            Delete: param.id
        }
    }

    // post with dto in body
    @Put(':id')
    updateData(@Body() items: CreateItemDto, @Param('id') id: string): object {
        return {
            state: 1,
            update: {
                id: id,
                name: items.name,
                description: items.description,
                qty: items.qty,
            }
        }
    }
}
