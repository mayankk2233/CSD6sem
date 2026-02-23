var fields = ['name', 'email', 'contact', 'designation', 'company', 'address']

function UserForm({ form, eid, onChange, onSubmit, onCancel }) {
    return (
        <div className="box">
            <h3>{eid ? 'Edit User' : 'Add New User'}</h3>
            <form onSubmit={onSubmit}>
                <div className="grid">
                    {fields.map(f => (
                        <div key={f}>
                            <label>{f.charAt(0).toUpperCase() + f.slice(1)} :</label><br />
                            <input
                                name={f}
                                value={form[f]}
                                onChange={onChange}
                                placeholder={f}
                                required
                                type={f == 'email' ? 'email' : 'text'}
                            />
                        </div>
                    ))}
                </div>
                <br />
                <button type="submit" className="sbtn">{eid ? 'Update' : 'Add User'}</button>
                <button type="button" onClick={onCancel} style={{ marginLeft: '8px' }}>Cancel</button>
            </form>
        </div>
    )
}

export default UserForm
