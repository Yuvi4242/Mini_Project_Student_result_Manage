import React from 'react'


export default function StudentDetails({ student, onBack }) {
if (!student) return (
<div>
<p>No student selected.</p>
<button onClick={onBack}>Back</button>
</div>
)


return (
<div>
<h2>Student Details</h2>
<p><b>ID:</b> {student.id}</p>
<p><b>Name:</b> {student.name}</p>
<p><b>Section:</b> {student.section}</p>
<p><b>Marks:</b> {student.marks}</p>
<p><b>Grade:</b> {student.grade}</p>
<button onClick={onBack}>Back</button>
</div>
)
}