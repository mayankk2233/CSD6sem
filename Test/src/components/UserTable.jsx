function UserTable({ users, onView, onEdit, onDelete }) {
    if (users.length == 0) return <p>No users found.</p>

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Email</th><th>Contact</th><th>Designation</th><th>Company</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(u => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.contact}</td>
                        <td>{u.designation}</td>
                        <td>{u.company}</td>
                        <td>
                            <button className="vb" onClick={() => onView(u)}>View</button>
                            <button className="eb" onClick={() => onEdit(u)}>Edit</button>
                            <button className="db" onClick={() => onDelete(u.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable
