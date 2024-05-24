import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [Form, setForm] = useState({ site: "", username: "", password: "" })
    const [PasswordArray, setPasswordArray] = useState([])

const getPassword = async () =>{
    let req = await fetch('http://localhost:3000/')
    let password = await req.json()
    console.log(password)
    setPasswordArray(password)
   
}

    useEffect(() => {
        getPassword()
    }, [])


    const showpass = () => {
        passwordRef.current.type = 'password'
        // if open to close
        if (ref.current.src === 'data:image/jpeg;base64,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') {
            ref.current.src = 'data:image/png;base64,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'
            alert('Hiding Password')
            passwordRef.current.type = 'password'
        }
        else {
            ref.current.src = 'data:image/jpeg;base64,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'
            alert('Showing Password')
            passwordRef.current.type = 'text'
        }
    }

    const savepass = async () => {
       if(Form.site.length > 3 && Form.username.length > 3 && Form.password.length > 3){

        // IF ANY SUCH ID EXISTS IN THE DB, DELETE IT
        await fetch('http://localhost:3000/', 
        {
        method: "DELETE", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id: Form.id})
        })

        setPasswordArray([...PasswordArray, { ...Form, id: uuidv4() }])
        await fetch('http://localhost:3000/', 
        {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...Form, id: uuidv4()})
        })
        // localStorage.setItem('password', JSON.stringify([...PasswordArray, { ...Form, id: uuidv4() }]))
        // console.log([...PasswordArray, Form])
       }
       else{
        alert('Error: password not saved')
       }
        

        // AGAIN EMPTY THE FORM AFTER SAVING THE PASSWORD
        setForm({
            site: "", username: "", password: ""
        })
    }

    const deletepass = async (id) => {
        console.log('Deleting password with id: ', id)
        let con = confirm("Do you really want to delete password?")
        if (con) {
            setPasswordArray(PasswordArray.filter(item => item.id !== id))
        let res = await fetch('http://localhost:3000/', 
        {
        method: "DELETE", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ id})
        })
            // localStorage.setItem('password', JSON.stringify(PasswordArray.filter(item => item.id !== id)))

        }

        // console.log([...PasswordArray, Form])
    }

    const editpass = (id) => {
        console.log('Editting password with id: ', id)
        // form ko set kr rahe hai
        setForm({...PasswordArray.filter(i => i.id === id)[0], id: id})
        // table ko wapas update kr rahe hai without the mentioned id which we want to edit
        setPasswordArray(PasswordArray.filter(item => item.id !== id))

    }

    const handleChange = (e) => {
        setForm({ ...Form, [e.target.name]: e.target.value })
    }

    const copytext = (text) => {
        // NOT WORKING PROPERLY
        // toast('🦄 Wow so easy!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //     });
        alert('Copied to Clipboard')
        navigator.clipboard.writeText(text)

    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <ToastContainer/>
           
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="p-2 md:px-0 md:mycontainer min-h-[88.2vh]">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-600'> &lt;</span>Pass<span className='text-green-600'>Draft/&gt;</span>
                </h1>
                <p className='text-green-700 text-center font-semibold text-lg'>Your Own Password Manager</p>
                <div className='flex flex-col pt-2 md:p-4 b-10 gap-9 justify-center items-center'>
                    <input value={Form.site} onChange={handleChange} className="rounded-full h-7 border-2 w-full p-4 py-1 border-green-600 text-black" type="text" name='site' id='site' placeholder='Enter Website URL' />
                    <div className='flex flex-col md:flex-row w-full gap-8' >

                        <input value={Form.username} onChange={handleChange} className="rounded-full h-7 border-2 w-full p-4 py-1 border-green-600 text-black" type="text" name="username" id='username' placeholder='Enter Username' />

                        <div className="relative">
                            <input ref={passwordRef} value={Form.password} onChange={handleChange} className="rounded-full h-7 border-2 w-full p-4 py-1 border-green-600 text-black" type="password" name='password' id='password' placeholder='Enter Password' />
                            <span className="absolute right-[1px] top-[1px] text-black">
                                <img ref={ref} className=' cursor-pointer py-1 px-1 h-6' onClick={showpass} width={30} src="data:image/png;base64,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" alt="eye" />

                            </span>
                        </div>

                    </div>

                    <button onClick={savepass} className='flex text-xl  justify-center items-center rounded-full px-3 py-1 bg-green-600 hover:bg-green-500 font-bold gap-2 w-fit border-green-900 border-2'>
                        <lord-icon
                            src="https://cdn.lordicon.com/hqymfzvj.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Save Password</button>
                </div>

                <div className='passwords'>
                    <h2 className='text-center font-bold py-2 text-2xl text-green-900'>Your passwords</h2>
                    {PasswordArray.length === 0 && <div>No Password</div>}

                    {PasswordArray.length != 0 && <table className="table-auto w-full rounded-xl overflow-hidden mb-9">
                        <thead className=' bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {PasswordArray.map((item, index) => {
                                return <tr key={index}>
                                    < td className='text-center  py-2 font-semibold border border-white flex justify-center items-center'>

                                        <a className='text-blue-800 underline' href={item.site} target='_blank'> {item.site} </a>
                                        <span onClick={() => { copytext(item.site) }} className='lordiconcopy cursor-pointer flex justify-center items-center mx-2'>
                                            <lord-icon
                                                style={{ "width": "25px", "height": "25px" }}
                                                src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </span>
                                    </ td >
                                    < td className='text-center  py-2 font-semibold border border-white '>
                                        <div className='flex justify-center items-center'>
                                            {item.username}
                                            <span onClick={() => { copytext(item.username) }} className='lordiconcopy cursor-pointer flex justify-center items-center mx-2'>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </ td >
                                    < td className='text-center  py-2 font-semibold border border-white '>
                                        <div className='flex justify-center items-center'>
                                            {item.password}
                                            <span onClick={() => { copytext(item.password) }} className='lordiconcopy cursor-pointer flex justify-center items-center mx-2'>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </ td >
                                    < td className='text-center  py-2 font-semibold border border-white '>
                                        <div className='flex justify-center items-center gap-4'>
                                            <span onClick={() => { deletepass(item.id) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                            <span onClick={() => { editpass(item.id) }}>
                                                <img style={{ "width": "20px", "height": "20px" }} src="data:image/png;base64,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" alt="" />
                                            </span>
                                        </div>

                                    </ td >
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager

