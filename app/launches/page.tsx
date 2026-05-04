import SimpleCrud from '@/components/SimpleCrud';
export default function P(){return <SimpleCrud table='launches' title='Launches' fields={['id','launch_name','product','platform','launch_date','status','checklist','revenue_goal','notes'] as any}/>}
