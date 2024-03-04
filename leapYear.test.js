import { expect, test } from 'vitest';
import { leapYear } from './leapYear';

test('2000 is a leap year', ()=>{
    expect(leapYear(2000)).toBe(true)
});

test('2001 is not a leap year', ()=>{
    expect(leapYear(2001)).toBe(false)
});

test('1984 is a leap year', ()=>{
    expect(leapYear(1984)).toBe(true)
});

test('2036 is a leap year', ()=>{
    expect(leapYear(2036)).toBe(true)
});

test('1900 is a leap year', ()=>{
    expect(leapYear(1900)).toBe(true)
});

test('2301 is a leap year', ()=>{
    expect(leapYear(2301)).toBe(false)
});