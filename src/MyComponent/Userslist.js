import React from 'react'

function Userslist() {
    const users=[
        {name:"Puja", id:'1',email:"p@g.com", class:"11"},
        {name:"Piya", id:'2', email:"pi@g.com", class:"12"},
        {name:"Peter", id:'3', email:"pe@g.com", class:"13"}

    ]
  return (
    <div>
    <table border='1'>
        <tbody>
            <tr>
             <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>class</td>
                <td>Operations</td>


            </tr>
            {
                users.map((item,i) =>
                <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.class}</td>

                    <td>
                    <button >Delete</button>
                    </td>
                </tr>
                )
            }
        </tbody>
    </table>
    </div>
  )
}
export default Userslist;