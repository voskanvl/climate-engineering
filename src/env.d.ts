/// <reference types="astro/client" />
declare module "*.yaml" {
    const value: any
    export default value
}
declare module "*.yml" {
    const value: any
    export default value
}

declare interface Links {
    name: string
    href: string
    img: string
}
declare interface Deal extends Links {
    costs: {
        old: number
        new: number
    }
}
declare interface PopularType extends Links {
    cost: number
}
declare interface JobsType {
    caption: string
    text: string
    icon: string
    href: string
}
