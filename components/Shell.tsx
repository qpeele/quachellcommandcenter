'use client';
import Link from 'next/link';import {Menu} from 'lucide-react';import {useState} from 'react';
const links=['/','/books','/tasks','/businesses','/money','/launches','/notes'];
export default function Shell({children}:{children:React.ReactNode}){const [o,s]=useState(false);return <div className='min-h-screen flex'><aside className={`bg-slate-900 text-white p-4 w-64 fixed md:static h-full ${o?'block':'hidden md:block'}`}><h1 className='font-bold mb-4'>Quachell Command Center</h1>{links.map(l=><Link className='block py-2' href={l} key={l}>{l==='/'?'Dashboard':l.slice(1)}</Link>)}</aside><main className='flex-1 p-4 md:p-6 md:ml-0'><button className='md:hidden mb-3' onClick={()=>s(!o)}><Menu/></button>{children}</main></div>}
