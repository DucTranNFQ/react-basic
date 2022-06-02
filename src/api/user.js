export default {
    fetchUserData() {
        return new Promise((resolve) => {
            const timeId = setTimeout(() => {
                clearTimeout(timeId);
                resolve({
                    email: 'tblyduc2412@gmail.com',
                    password: '123',
                })
            }, 1000)
        })
    },

    token() {
        return new Promise(resolve => {
            const timeId = setTimeout(() => {
                clearTimeout(timeId);
                resolve({
                    token: '200',
                })
            }, 1000)
        })
    }
}   