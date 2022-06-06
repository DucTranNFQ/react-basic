const fetchAPI = {
    async getAll(url = "") {
        return await fetch(url);
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
    async post(data = {}, url = "") {
        return await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },
    async put(data = {}, url = "", id = "") {
        return await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },
    async delete(url = "", id = "") {
        return await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
    },
};

export default fetchAPI;
