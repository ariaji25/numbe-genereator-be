import { assert } from "console"
import { NumberService } from "./number.service"

describe('Number Service', () => {
  let service : NumberService
  beforeEach(()=>{
    service = new NumberService()
  })

  it('Bilangan Ganjil', ()=>{
    const maxNumber = 10
    const bilanganGanjil = service.findBilanganGanjil(maxNumber)
    expect(bilanganGanjil.length).toEqual(5)
    expect(bilanganGanjil).toEqual([1,3,5,7,9])
  })

  it('Bilangan Prima', ()=>{
    const maxNumber = 10
    const bilanganPrima = service.findBilanganPrima(maxNumber)
    console.log(bilanganPrima)
    expect(bilanganPrima).toEqual([2,3,5,7])
  })

  it('Segitiga Bilangan', ()=>{
    const input='12350000'
    const segitiga = service.findGenerateSegitia(input)
    expect(segitiga[0]).toEqual('10')
    expect(segitiga[1]).toEqual('200')
    expect(segitiga[2]).toEqual('3000')
    expect(segitiga[3]).toEqual('50000')
  })
})