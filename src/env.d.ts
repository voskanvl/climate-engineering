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
}
