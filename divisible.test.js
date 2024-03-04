import { expect, test } from 'vitest'
import {divisible} from './divisible'

test('3 is divisible by 3, expect Fizz',()=>{
    expect(divisible(3)).toBe('Fizz')
})

test('25 is divisible by 5, expect Buzz', ()=>{
    expect(divisible(25)).toBe('Buzz')
})

test('15 is divisible by 5 and 3, expect FizzBuzz',()=>{
    expect(divisible(15)).toBe('FizzBuzz')
})

test('7 is not divisible by 3 and 5, expect 7', ()=>{
    expect(divisible(7)).toBe(7)
})
