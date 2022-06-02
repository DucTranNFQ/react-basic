export default {
    fetch() {
        return new Promise((resolve) => {
            const timeId = setTimeout(() => {
                clearTimeout(timeId);
                resolve({
                    status: '200',
                })
            }, 1000)
        })
    }
}   