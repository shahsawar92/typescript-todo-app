 type Todo = {
    complete: boolean,
    text: string,
    index?: number;
}
type T=(select:Todo)=>void
