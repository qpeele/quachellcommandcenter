'use client';
import {seed} from '@/lib/seed';
const k='qcc_data';
export type DB=typeof seed;
export function init(){if(typeof window==='undefined')return; if(!localStorage.getItem(k)) localStorage.setItem(k,JSON.stringify(seed));}
export function getDB():DB{init(); return JSON.parse(localStorage.getItem(k) || JSON.stringify(seed));}
export function setDB(db:DB){localStorage.setItem(k,JSON.stringify(db));}
