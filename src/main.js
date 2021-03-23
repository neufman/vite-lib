export function fakeMethod(){
    import('google-libphonenumber')
        .then(() => {
            console.info('PhoneNumberUtil imported')
        })
        .catch(() => {
            console.warn('PhoneNumberUtil import error')
        })
}

export function anotherFakeMethod(){
    console.info('Another fake method')
}

