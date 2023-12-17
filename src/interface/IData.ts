export interface IData {
    id: number,
    title?: string,
    prevYear: number,
    nextYear: number,
    content: {
        year: number,
        descr: string
    }[]
}