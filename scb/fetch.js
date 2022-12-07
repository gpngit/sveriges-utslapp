//scb
import { headers, SCB_URL, sectorValueTexts, typeValueTexts } from "./SCB_headers"
//firebase
import { getDatabase, ref, set, update } from "firebase/database"

const getData = async (URL, headers) => {
    const response = await fetch(URL, headers)
    const data = await response.json()
    return data.data
}

const postDate = () => {
    const db = getDatabase()
    const today = new Date()
    set(ref(db, 'scb/'), {
        date: today.toString(),
        data: 'string'
    })
}

const postScbData = (body) => {
    const db = getDatabase()
    body.forEach((obj, i) => {
        const updates = {}
        updates['/scb/data/' + i] = obj
        return update(ref(db), updates)
    })
}

export const getDataFromScbAndTransferToFirebase = async () => {
    let apiData = await getData(SCB_URL, headers)
    let ownDataFormat = await apiData.map(data => {
        return {
            type: typeValueTexts.find(element => element.val === data.key[0]),
            sector: sectorValueTexts.find(element => element.val === data.key[1]),
            year: data.key[2],
            value: data.values[0]
        }
    })
    postDate()
    postScbData(ownDataFormat)
}