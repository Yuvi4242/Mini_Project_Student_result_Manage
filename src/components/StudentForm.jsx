import React, { useState } from 'react'
import { createStudent, updateStudent } from '../services/studentService'


export default function StudentForm({ initialData=null, onCancel, onSaved }) {
const isEdit = !!initialData
const [name, setName] = useState(initialData?.name || '')
const [section, setSection] = useState(initialData?.section || '')
const [marks, setMarks] = useState(initialData?.marks || '')
const [grade, setGrade] = useState(initialData?.grade || '')
const [saving, setSaving] = useState(false)


const handleSubmit = async (e) => {
e.preventDefault()
const payload = { name: name.trim(), section: section.trim(), marks: Number(marks), grade: grade.trim() }
try {
setSaving(true)
if (isEdit) await updateStudent(initialData.id, payload)
else await createStudent(payload)
alert('Saved. Click Load Students to refresh.')
onSaved()
} catch (err) {
alert('Save failed: ' + err.message)
} finally { setSaving(false) }
}


return (
<div>
<h2>{isEdit ? 'Edit Student' : 'Add Student'}</h2>
<form onSubmit={handleSubmit} className="student-form">
<label>Name
<input value={name} onChange={e=>setName(e.target.value)} required />
</label>


<label>Section
<input value={section} onChange={e=>setSection(e.target.value)} required />
</label>


<label>Marks
<input type="number" value={marks} onChange={e=>setMarks(e.target.value)} required />
</label>


<label>Grade
<input value={grade} onChange={e=>setGrade(e.target.value)} required />
</label>


<div className="form-actions">
<button type="submit" disabled={saving}>{saving? 'Saving...':'Save'}</button>
<button type="button" onClick={onCancel}>Cancel</button>
</div>
</form>
</div>
)
}