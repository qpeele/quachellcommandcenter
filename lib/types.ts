export type BookStatus = 'Idea'|'Outline'|'Drafting'|'Editing'|'Formatting'|'Cover Needed'|'Published';
export type Priority='High'|'Medium'|'Low';
export type TaskStatus='Ideas'|'To Do'|'In Progress'|'Waiting On'|'Done';
export interface Book {id:string;title:string;series:string;genre:string;status:BookStatus;word_count:number;next_step:string;launch_date:string;notes:string}
export interface Task {id:string;task_name:string;category:string;linked_to_type:string;linked_to_name:string;priority:Priority;status:TaskStatus;due_date:string;owner:string;notes:string}
export interface Business {id:string;name:string;leads:number;clients:number;proposals:number;contracts:number;revenue:number;follow_ups:string;notes:string}
export interface MoneyEntry {id:string;type:'income'|'expense';category:string;amount:number;date:string;notes:string}
export interface Launch {id:string;launch_name:string;product:string;platform:string;launch_date:string;status:'planned'|'in-progress'|'completed';checklist:string;revenue_goal:number;notes:string}
export interface Note {id:string;title:string;category:string;body:string;linked_to:string;created_at:string}
