var fields = ['id', 'name', 'email', 'contact', 'designation', 'company', 'address']

function UserModal({ user, onClose }) {
    if (!user) return null

    return (
        <div className="overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <h3>User Info</h3>
                {fields.map(f => (
                    <div key={f} className="row2">
                        <b>{f}</b><span>{user[f]}</span>
                    </div>
                ))}
                <br />
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default UserModal
