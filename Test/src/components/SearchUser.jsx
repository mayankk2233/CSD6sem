var fields = ['name', 'email', 'contact', 'designation', 'company', 'address']

function SearchUser({ sid, setSid, sres, onSearch, onEdit, onDelete }) {
    return (
        <div className="box">
            <h3>Search by ID</h3>
            <input
                type="number"
                placeholder="Enter ID"
                value={sid}
                onChange={e => { setSid(e.target.value); }}
                style={{ padding: '7px', border: '1px solid #aaa', width: '140px', marginRight: '8px' }}
            />
            <button onClick={onSearch}>Search</button>

            <br /><br />

            {sres == 'nf' && <p style={{ color: 'red' }}>User not found!</p>}

            {sres && sres != 'nf' && (
                <div>
                    {fields.map(f => (
                        <div key={f} className="row2">
                            <b>{f}</b><span>{sres[f]}</span>
                        </div>
                    ))}
                    <br />
                    <button className="eb" onClick={() => onEdit(sres)}>Edit</button>
                    <button className="db" style={{ marginLeft: '6px' }} onClick={() => onDelete(sres.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default SearchUser
