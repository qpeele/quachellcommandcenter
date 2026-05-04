import SimpleCrud from '@/components/SimpleCrud';
export default function P(){return <SimpleCrud table='tasks' title='Tasks' fields={['id','task_name','category','linked_to_type','linked_to_name','priority','status','due_date','owner','notes'] as any}/>}
