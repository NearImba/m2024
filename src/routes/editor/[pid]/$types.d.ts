export type PageLoad = (args: { params: { pid: string } }) => { pid: string };
export type PageData = ReturnType<PageLoad>;