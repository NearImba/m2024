interface MobileTypes {
    name: string;
    width: number;
    height: number;
}

export const mobileTypes: MobileTypes[] = [
    // {
    //     name: 'iPhone 5/SE',
    //     width: 375,
    //     height: 667,
    // },
    {
        name: 'iPhone XR',
        width: 414,
        height: 896,
    },
    {
        name: 'iPhone 14 Pro Max',
        width: 430,
        height: 932,
    }
]

export const defaultMobileType = mobileTypes[0];