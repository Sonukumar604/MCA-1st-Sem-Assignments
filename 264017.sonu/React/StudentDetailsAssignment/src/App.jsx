import './App.css'
import StudentDetails from './components/StudentDetails.jsx'

const students = [
  { id: 'ST-2401', name: 'Aarav Sharma', rollNumber: '2401', class: 'MCA', marks: 92 },
  { id: 'ST-2402', name: 'Meera Kapoor', rollNumber: '2402', class: 'MCA', marks: 88 },
  { id: 'ST-2403', name: 'Kabir Singh', rollNumber: '2403', class: 'MCA', marks: 76 },
  { id: 'ST-2404', name: 'Ananya Verma', rollNumber: '2404', class: 'MCA', marks: 95 },
  { id: 'ST-2405', name: 'Rohan Gupta', rollNumber: '2405', class: 'MCA', marks: 84 },
]

function App() {
  const average = Math.round(students.reduce((sum, student) => sum + student.marks, 0) / students.length)

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Campus home">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>campus<span className="brand-dot">.</span></span>
        </a>
        <div className="topbar-right">
          <span className="term-label">ACADEMIC YEAR 2025–26</span>
          <span className="profile-avatar" aria-label="Profile: Alex Morgan">AM</span>
        </div>
      </header>

      <section className="content" id="home">
        <div className="breadcrumb"><span>Academics</span><span className="breadcrumb-slash">/</span><span className="breadcrumb-current">Students</span></div>
        <div className="heading-row">
          <div>
            <p className="eyebrow">STUDENT DIRECTORY</p>
            <h1>Student roster</h1>
            <p className="page-description">An overview of your class and their latest results.</p>
          </div>
          <button className="export-button" type="button" onClick={() => window.print()}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M4 13v3h12v-3" /></svg>
            Export list
          </button>
        </div>

        <div className="summary-grid" aria-label="Class summary">
          <article className="summary-card">
            <span className="summary-icon students-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M16 20v-1.7a3.3 3.3 0 0 0-3.3-3.3H6.3A3.3 3.3 0 0 0 3 18.3V20m6.5-8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm6.5-6.6a3.5 3.5 0 0 1 0 6.8m2 3.4h.7a3.3 3.3 0 0 1 3.3 3.3V20" /></svg></span>
            <span className="summary-copy"><span className="summary-label">TOTAL STUDENTS</span><strong>{students.length}</strong></span>
            <span className="summary-note">In this class</span>
          </article>
          <article className="summary-card">
            <span className="summary-icon average-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m3 16 6-6 4 4 8-8m-6 0h6v6" /></svg></span>
            <span className="summary-copy"><span className="summary-label">CLASS AVERAGE</span><strong>{average}<small>/100</small></strong></span>
            <span className="summary-note positive-note"><span aria-hidden="true">↗</span> Overall performance</span>
          </article>
          <article className="summary-card">
            <span className="summary-icon class-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Zm3.5 2 5.5 2.8 5.5-2.8M6.5 12v5l5.5 2.5 5.5-2.5v-5" /></svg></span>
            <span className="summary-copy"><span className="summary-label">CLASS</span><strong className="class-summary">MCA <small>• Semester 1</small></strong></span>
            <span className="summary-note">Postgraduate programme</span>
          </article>
        </div>

        <section className="roster-panel" aria-labelledby="roster-title">
          <div className="panel-heading">
            <div><h2 id="roster-title">All students</h2><p>Student information and marks</p></div>
            <span className="record-count">{students.length} records</span>
          </div>
          <div className="table-scroll">
            <table>
              <thead><tr><th scope="col">STUDENT</th><th scope="col">ROLL NUMBER</th><th scope="col">CLASS</th><th scope="col">MARKS</th></tr></thead>
              <tbody>
                {students.map((student, index) => (
                  <StudentDetails
                    key={student.id}
                    name={student.name}
                    rollNumber={student.rollNumber}
                    className={student.class}
                    marks={student.marks}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <footer className="table-footer"><span>Showing <strong>{students.length}</strong> of <strong>{students.length}</strong> students</span><span className="updated-label"><span aria-hidden="true">●</span> Updated just now</span></footer>
        </section>
        <footer className="page-footer"><span>© 2025 Campus Portal</span><span>Student records <span className="footer-divider">·</span> Academic services</span></footer>
      </section>
    </main>
  )
}

export default App
