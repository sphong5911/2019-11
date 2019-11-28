import { Await, Option } from '../utils/fetchUtil.js'

export const jsonFetch = async (url, headerOption, body) => {
    const option = Option.postJson
    console.dir(option)
    option.body = JSON.stringify(body)
    option.headers = Object.assign(option.headers, headerOption)
    const result = await Await(url, option)

    return result
}

export default { jsonFetch }