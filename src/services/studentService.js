const BASE = 'http://localhost:3001/students'


export async function getStudents() {
const res = await fetch(BASE)
if (!res.ok) throw new Error('Failed to fetch')
return res.json()
}


export async function getStudentById(id) {
const res = await fetch(`${BASE}/${id}`)
if (!res.ok) throw new Error('Failed to fetch')
return res.json()
}


export async function createStudent(payload) {
const res = await fetch(BASE, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
})
if (!res.ok) throw new Error('Failed to create')
return res.json()
}


export async function updateStudent(id, payload) {
const res = await fetch(`${BASE}/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
})
if (!res.ok) throw new Error('Failed to update')
return res.json()
}


export async function deleteStudent(id) {
const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' })
if (!res.ok) throw new Error('Failed to delete')
return true}