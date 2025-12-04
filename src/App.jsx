import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

export default function App() {
  const [view, setView] = useState('LIST');  // LIST | ADD | EDIT | VIEW
  const [students, setStudents] = useState([]); 
  const [selected, setSelected] = useState(null); // selected student for EDIT or VIEW

  return (
    <div className="container">
      <h1>Student Result App</h1>

      {/* LIST VIEW */}
      {view === 'LIST' && (
        <StudentList
          students={students}
          setStudents={setStudents}
          onAdd={() => {
            setSelected(null);
            setView('ADD');
          }}
          onEdit={(student) => {
            setSelected(student);
            setView('EDIT');
          }}
          onView={(student) => {
            setSelected(student);
            setView('VIEW');
          }}
        />
      )}

      {/* ADD or EDIT FORM */}
      {(view === 'ADD' || view === 'EDIT') && (
        <StudentForm
          initialData={view === 'EDIT' ? selected : null}
          onCancel={() => setView('LIST')}
          onSaved={() => setView('LIST')}
        />
      )}

      {/* VIEW DETAILS */}
      {view === 'VIEW' && (
        <StudentDetails
          student={selected}
          onBack={() => setView('LIST')}
        />
      )}
    </div>
  );
}
