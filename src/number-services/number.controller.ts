import { Controller, Get, Query } from "@nestjs/common";
import { NumberService } from "./number.service";

@Controller('/number')
export class NumberController {
  constructor(
    private numberService: NumberService
  ){}

  @Get('/bilangan-ganjil')
  findBilanganGanjil(
    @Query('maxNumber') maxNumber: number
  ) {
    return {
      bilanganGanjil: this.numberService.findBilanganGanjil(maxNumber)
    }
  }

  @Get('/bilangan-prima')
  findBilanganPrima(
    @Query('maxNumber') maxNumber: number
  ) {
    return {
      bilanganPrima: this.numberService.findBilanganPrima(maxNumber)
    }
  }

  @Get('/segitiga')
  generateSegitiga(
    @Query('number') number: string
  ) {
    return {
      segitiga: this.numberService.findGenerateSegitia(number)
    }
  }
}