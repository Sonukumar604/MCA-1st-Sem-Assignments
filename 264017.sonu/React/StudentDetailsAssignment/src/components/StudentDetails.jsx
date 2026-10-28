function StudentDetails({ name, rollNumber, className, marks, index }) {
  const initials = name.split(' ').map((part) => part[0]).join('')

  return (
    <tr>
      <td className="student-cell">
        <span className={`student-avatar avatar-${index + 1}`} aria-hidden="true">{initials}</span>
        <span className="student-name">{name}</span>
      </td>
      <td className="roll-number">{rollNumber}</td>
      <td><span className="class-pill">{className}</span></td>
      <td className="marks-cell"><span className="marks-value">{marks}</span><span className="marks-out-of"> / 100</span></td>
    </tr>
  )
}

export default StudentDetails
