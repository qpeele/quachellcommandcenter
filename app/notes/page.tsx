import SimpleCrud from '@/components/SimpleCrud';
export default function P(){return <SimpleCrud table='notes' title='Notes' fields={['id','title','category','body','linked_to','created_at'] as any}/>}
