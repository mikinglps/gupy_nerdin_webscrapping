export default function dateCalculate(date: Date): number{
    const current = new Date();
    let diff = current.valueOf() - date.valueOf();
    let oneDay = 1000 * 60 * 60 * 24
    let diffDays = diff / oneDay
    return diffDays
}