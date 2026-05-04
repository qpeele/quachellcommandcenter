import SimpleCrud from '@/components/SimpleCrud';
export default function P(){return <SimpleCrud table='money' title='Money' fields={['id','type','category','amount','date','notes'] as any}/>}
