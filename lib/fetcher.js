import useSWR from "swr"

const url = "http://localhost:3000/"
// const url = process.env.baseURL
const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint) {
    const { data, error } = useSWR(`${url}${endpoint}`, response)
    console.log(`${url}${endpoint}`);
    return {

        data,
        isLoading: !error && !data,
        isError: error
    }
}