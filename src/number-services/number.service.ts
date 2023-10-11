import { Injectable } from "@nestjs/common";

@Injectable()
export class NumberService {

  findBilanganGanjil(maxNumber) {
    const bilanganGanjil = []
    for (let i=0;i<=maxNumber;i++) {
      if (i%2!=0) {
        bilanganGanjil.push(i)
      }
    }
    return bilanganGanjil
  }

  findBilanganPrima(maxNumber) {
    const bilanganPrima = []
    for (let i=0;i<=maxNumber;i++) {
      const pembagi = Array.from({length: i}, (v, k) => k+1)
      if (pembagi.map(p => i%p).filter(p => p==0).length == 2) {
        bilanganPrima.push(i)
      }
    }
    return bilanganPrima
  }

  findGenerateSegitia(number:string) {
    const segitiga = []
    number.split('').forEach((n,i) => {
      segitiga.push(`${n}`.padEnd(i+2,'0'))
    })
    return segitiga
  }
}