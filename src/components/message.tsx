import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../styles/contact.css"
import Loading from '../assets/loading.svg'
import emailjs from '@emailjs/browser';

//Email validator API Axios config
const defaultConfig = {
    method: 'GET',
    url: 'https://mailcheck.p.rapidapi.com/',
    params: {
        domain: ''
    },
    headers: {
        'X-RapidAPI-Key': 'f9ae71ae59msh5734b039ff2ad17p10e338jsn68ded081820e',
        'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
    }
    };

const Message = ()=> {
    const [notification, setNotification] = useState(false)
    const [status, setStatus] = useState('')
    const [config, setConfig] = useState(defaultConfig)
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const email = useRef<any>(null)
    const name = useRef<any>(null)
    const message = useRef<any>(null)
    const form = useRef<any>(null)
    const msgBox = useRef<HTMLDivElement>(null)

    //Handle Submit 
    const handleSubmit = (e: any)=> {
        e.preventDefault();
        axiosFetchData(config)
    }

    //Fetch Data
    const axiosFetchData = async (configs: object) => {
         try {
            setLoading(true)
            await axios.request(configs).then(response => {
                    checkValidity(response.data)
                })
        } catch (e) {
            console.log(e) 
        }
    }

    //check validity email
    const checkValidity = (data: any)=> {
        setTimeout(()=> {
            setLoading(false)
            if (data.valid === true) {
                console.log(form.current)
                emailjs
                .sendForm('service_49kdodc', 'template_rkza0p9', form.current, {
                  publicKey: 'K6BrxtYI_7BYrMwEA',
                })
                .then(() => {
                    email.current.value = ''
                    name.current.value = ''
                    message.current.value = ''
                })
                .then(
                  () => {
                    console.log('SUCCESS!')
                    setStatus('Success! Message has been sent.')
                    setNotification(true)
                    setTimeout(()=> {
                        setNotification(false)
                    }, 3000)
                  },
                  (error) => {
                    console.log('FAILED...', error.text)
                    setStatus('Failed! Message has not been sent.')
                    setNotification(true)
                    setTimeout(()=> {
                        setNotification(false)
                    }, 3000)
                  },
                )
            } else {
                 console.log("Email is not valid!")
                 setStatus('Inavlid! Email address is not valid.')
                 setNotification(true)
                 setTimeout(()=> {
                    setNotification(false)
                }, 3000)
            }
        }, 2000)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      });
    const handleOutsideClick = (e: any) => {
        if (msgBox.current && !msgBox.current.contains(e.target)) {
            setOpen(false)
        }
      };
    return(
        <div ref={msgBox}>
            <div className="flex flex-row items-center mx-auto gap-[10rem] py-[2rem] ">
                <div className="transition font-[gabarito] text-xl text-white hover:scale-110 animate-bounce">
                    <button onClick={()=> open ? setOpen(false) : setOpen(true)}>Contact me <i className="bg-[#93DEFF] rounded-md px-[0.5rem] py-[0.2rem] fa fa-envelope align-middle"></i></button>
                </div>
                <div className={loading ? "hidden" : ""}>
                    <div className={open ? "contact absolute right-0 top-[7.2rem]" : "absolute right-0 top-[7.2rem] contactclose"}>
                        <div className="shadow-2xl flex flex-row bg-[#93DEFF] rounded-md w-[25rem] mx-auto p-[1rem] gap-[2rem] items-center">
                            <fieldset disabled={open ? false : true}>
                                <form ref={form} onSubmit={handleSubmit} className="flex flex-col bg-white rounded-lg w-[100%] mx-auto p-[1rem] gap-[1rem] items-center">
                                    <div>
                                        <input ref={email} onChange={(e)=>setConfig({...config, params: {domain: e.target.value}})} type="text" name="user_email" placeholder="Email" className="border-gray border rounded-md font-bold font-[thasadith] px-[0.6rem]"/>
                                    </div>
                                    <div>
                                        <input ref={name} type="text" name="user_name" placeholder="Name" className="border-gray border rounded-md font-bold font-[thasadith] px-[0.6rem]"/>
                                    </div>
                                    <div>
                                        <input ref={message} type="text" name="message" maxLength={200}  placeholder="Message" className="border-gray border rounded-md font-bold font-[thasadith] px-[0.6rem]"/>
                                    </div>
                                    <div>
                                        <input type="submit" className="transition font-[gabarito] bg-[#93DEFF] px-[0.5rem] rounded-sm text-white shadow-2xl hover:scale-110"></input>
                                    </div>
                                </form>
                            </fieldset>
                            <div className="font-bold font-[thasadith] text-white text-3xl font-normal">
                                We'll get in touch soon!
                            </div>
                        </div>
                    </div>
                </div>
                <div className={loading ? "" : "hidden"}>
                        <div className={"contact absolute right-0 top-[8.2rem]"}>
                            <div className="shadow-2xl flex flex-row bg-[#93DEFF] rounded-md w-[25rem] mx-auto p-[1rem] gap-[2rem] items-center">
                                <div className="flex flex-col bg-white rounded-lg w-[100%] mx-auto p-[1rem] gap-[1rem] items-center">
                                    <img src={Loading} className="animate-spin h-[2rem]" alt=""/>
                                    <div className="animate-pulse font-bold font-[thasadith] text-black text-3xl font-bold">
                                        Sending...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className={notification ? "relative notification" : "notificationclose"}>
                <div className="bg-white rounded-md shadow-2xl absolute top-[2rem]">
                    <div className="font-[gabarito] text-md p-[2rem]">
                        {status}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message