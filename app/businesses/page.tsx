import SimpleCrud from '@/components/SimpleCrud';
export default function P(){return <SimpleCrud table='businesses' title='Roherri Businesses' fields={['id','name','leads','clients','proposals','contracts','revenue','follow_ups','notes'] as any}/>}
