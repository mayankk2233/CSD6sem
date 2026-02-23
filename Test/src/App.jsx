import { useState } from 'react'
import './App.css'
import UserTable from './components/UserTable'
import UserForm from './components/UserForm'
import SearchUser from './components/SearchUser'
import UserModal from './components/UserModal'

var data = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@gmail.com', contact: '9876543210', designation: 'Developer', company: 'TechCorp', address: 'Delhi' },
  { id: 2, name: 'Priya Singh', email: 'priya@gmail.com', contact: '9812345678', designation: 'Designer', company: 'DesignHub', address: 'Mumbai' },
]

var blank = { name: '', email: '', contact: '', designation: '', company: '', address: '' }
var nxt = 3

function App() {
  const [users, setUsers] = useState(data)
  const [tab, setTab] = useState('list')
  const [form, setForm] = useState(blank)
  const [eid, setEid] = useState(null)
  const [sid, setSid] = useState('')
  const [sres, setSres] = useState(null)
  const [pop, setPop] = useState(null)

  function ch(e) { setForm({ ...form, [e.target.name]: e.target.value }) }

  function addUser(e) {
    e.preventDefault()
    setUsers([...users, { ...form, id: nxt++ }])
    setForm(blank); setTab('list'); alert('Added!')
  }

  function updateUser(e) {
    e.preventDefault()
    setUsers(users.map(u => u.id == eid ? { ...form, id: eid } : u))
    setForm(blank); setEid(null); setTab('list'); alert('Updated!')
  }

  function delUser(id) {
    if (confirm('Delete?')) {
      setUsers(users.filter(u => u.id != id))
      if (pop?.id == id) setPop(null)
      setSres(null); setSid('')
    }
  }

  function editUser(u) {
    setForm({ name: u.name, email: u.email, contact: u.contact, designation: u.designation, company: u.company, address: u.address })
    setEid(u.id); setTab('add')
  }

  function search() { setSres(users.find(u => u.id == sid) || 'nf') }

  function clearAndGo(t) { setForm(blank); setEid(null); setTab(t) }

  return (
    <div className="wrap">
      <div className="hdr"><h2>User Management System</h2></div>

      <div className="tabs">
        {[['list', 'All Users'], ['add', eid ? 'Edit User' : 'Add User'], ['search', 'Search']].map(([t, lbl]) => (
          <button key={t}
            style={{ background: tab == t ? '#3f51b5' : '#ddd', color: tab == t ? 'white' : 'black' }}
            onClick={() => clearAndGo(t)}>
            {lbl}
          </button>
        ))}
      </div>

      {tab == 'list' && <>
        <p><b>Total Users: {users.length}</b></p>
        <UserTable users={users} onView={setPop} onEdit={editUser} onDelete={delUser} />
        <UserModal user={pop} onClose={() => setPop(null)} />
      </>}

      {tab == 'add' &&
        <UserForm form={form} eid={eid} onChange={ch}
          onSubmit={eid ? updateUser : addUser}
          onCancel={() => clearAndGo('list')} />
      }

      {tab == 'search' &&
        <SearchUser sid={sid} setSid={setSid} sres={sres}
          onSearch={search} onEdit={editUser} onDelete={delUser} />
      }
    </div>
  )
}

export default App
