export default {
register() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve({
        firstName: 'Binh',
        lastName: 'Tran'
        })
    }, 1000)
    })
}
}   