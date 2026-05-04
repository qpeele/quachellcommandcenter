import SimpleCrud from '@/components/SimpleCrud';
export default function P(){return <SimpleCrud table='books' title='Books' fields={['id','title','series','genre','status','word_count','next_step','launch_date','notes'] as any}/>}
