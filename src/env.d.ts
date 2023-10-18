/// <reference types="astro/client" />
declare module "*.yaml" {
    const value: any
    export default value
}
declare module "*.yml" {
    const value: any
    export default value
}
declare module "*.png" {
    const value: string
    export default value
}

declare interface Links {
    name: string
    href: string
    img: ImageMetadata
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
    icon: ImageMetadata
    href: string
}
declare interface CatalogFilter {
    catalog: { name: string; href: string }[]
    vendor: { name: string; id: string }[]
    square: { name: string; id: string }[]
    test: { name: string; id: string }[]
}
