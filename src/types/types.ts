export enum BoxType {
    CHECK = 'CHECK',
    NUMBER = 'NUMBER',
}

export interface IBox {
    type: BoxType
    isChecked: boolean
    value: number
}