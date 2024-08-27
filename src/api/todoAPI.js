import axios from "axios"


const host = 'http://localhost:8088/api/v1/todos'

export const getList = async () => {

  const res = await axios.get(`${host}/list`)

  return res.data
}

export const addOne = async (todo) => {

  const res = await axios.post(host, todo)

  return res.data

}