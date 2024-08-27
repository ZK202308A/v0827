import axios from "axios"


const host = 'http://localhost:8088/api/v1/todos'

export const getList = async (pageNum) => {

  const res = await axios.get(`${host}/list`, {params : {page: pageNum || 1}})

  return res.data
}

export const addOne = async (todo) => {

  const res = await axios.post(host, todo)
  return res.data
}

export const getOne = async (mno) => {

  const res = await axios.get(`${host}/${mno}`)
  return res.data

}

export const deleteOne = async (mno) => {

  const res = await axios.delete(`${host}/${mno}`)
  return res.data

}

export const putOne = async (todo) => {

  const res = await axios.put(`${host}/${todo.mno}`, todo)

  return res.data
}