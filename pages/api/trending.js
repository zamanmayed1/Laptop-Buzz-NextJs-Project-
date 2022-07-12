import data from './data'
export default function handler(req, res) {
    const { Trendings } = data
    if (Trendings) return res.status(200).json(Trendings)
    return res.status(404).json({ "error": "Data Not Found" })

}