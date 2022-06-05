const fetchAPI = {
    async getAll(url = "") {
        return await fetch(url)
            .then((res) => res.json())
            .then((result) => {
                return result.map((item) => {
                    return {
                        key: item.id,
                        ...item,
                    };
                });
            });
    },
    async get(url = "", id = "") {
        return await fetch(`${url}/${id}`)
            .then((res) => res.json())
            .then((result) => {
                return {
                    key: result.id,
                    ...result,
                };
            });
    },
    async post(url = "", data = {}) {
        return await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },
    put(url = "", id = "") {},
    async delete(url = "", id = "") {
        return await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
    },
};

export default fetchAPI;
