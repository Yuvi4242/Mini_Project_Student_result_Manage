import React, { useState } from 'react'
import { getStudents, deleteStudent } from '../services/studentService'


export default function StudentList({ students, setStudents, onAdd, onEdit, onView }) {
const [loading, setLoading] = useState(false)


const handleLoad = async () => {
try {
setLoading(true)
const data = await getStudents()
setStudents(data)
} catch (err) {
alert('Error: ' + err.message)
} finally { setLoading(false) }
}


const handleDelete = async (id) => {
if (!confirm('Delete this student?')) return
try {
await deleteStudent(id)
alert('Deleted. Click Load Students to refresh.')
} catch (err) {
alert('Delete failed: ' + err.message)
}
}


return (
<div>
<div className="toolbar">
<button onClick={handleLoad} disabled={loading}>{loading? 'Loading...' : 'Load Students'}</button>
<button onClick={onAdd}>Add Student</button>
</div>


<table className="students-table">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Section</th>
<th>Marks</th>
<th>Grade</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{students && students.length>0 ? (
students.map(s => (
<tr key={s.id}>
<td>{s.id}</td>
<td>{s.name}</td>
<td>{s.section}</td>
<td>{s.marks}</td>
<td>{s.grade}</td>
<td>
<button onClick={() => onEdit(s)}>Edit</button>
<button onClick={() => handleDelete(s.id)}>Delete</button>
<button onClick={() => onView(s)}>View</button>
</td>
</tr>
))
) : (
<tr><td colSpan="6">No students loaded. Click "Load Students".</td></tr>
)}
</tbody>
</table>
</div>
)
}