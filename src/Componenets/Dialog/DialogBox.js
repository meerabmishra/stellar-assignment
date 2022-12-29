import React from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import SwipeDownIcon from '@mui/icons-material/SwipeDown';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

const DialogBox = ({toggle, setToggle}) => {

    const handleClickOpen = () => {
        setToggle(true);
    };

    const handleClose = () => {
        setToggle(false);
    };


    return (
        <div>
            <Dialog
                // fullScreen={fullScreen}
                open={toggle}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <div className='container w-auto'>
                    <DialogContent className='w-fit'>
                        <DialogContentText>
                            <div className='flex flex-row'>
                                <div className='mx-4 my-2 shadow-none'>
                                    {/* <Card >
                                        <CardContent > */}
                                            <div className='mt-7'>
                                                <div className='flex mb-2 ml-5'>
                                                    <div>
                                                        <p className='text-2xl text-blue-600 mt-2 mr-4'><ion-icon name="cash-outline" /></p>
                                                    </div>
                                                    <div>
                                                        <p className='text-xl text-blue-600 mt-1 font-bold'>Stars Payroll</p>
                                                    </div>
                                                    
                                                </div>

                                                <div className='flex'>
                                                    <div className='mt-4 pr-2 '>
                                                       < SwipeDownIcon fontSize='large'/>
                                                    </div>
                                                    <div className='flex-col'>
                                                        <div>
                                                            <p className='text-lg font-bold text-slate-600'>Easy to use</p>
                                                        </div>
                                                        <div>
                                                            <p className='text-slate-500'>Simple and user friendly design for easy adaptation</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex'>
                                                    <div className='mt-8 mr-2'>
                                                        <AppsOutlinedIcon fontSize='large'/>
                                                    </div>
                                                    <div className='flex-col'>
                                                        <div>
                                                            <p className='text-lg font-bold text-slate-600'>Additional integrated benefits</p>
                                                        </div>
                                                        <div>
                                                            <p className='text-slate-500 text-left'>
                                                                Integrate with our software's for HR, Statutory Employee Self service portals
                                                                & much more.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex'>
                                                    <div className='mt-7 mr-2'>
                                                        <CachedOutlinedIcon fontSize='large'/>
                                                    </div>
                                                    <div className='flex-col'>
                                                        <div>
                                                            <p className='text-lg font-bold text-slate-600'>Automated Compliance</p>
                                                        </div>
                                                        <div>
                                                            <p className='text-slate-500'>Set Compliance like PF, TDS, PT & ESIC on auto pilot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* </CardContent>
                                    </Card> */}
                                </div>
                                <div className='mx-4 my-2 shadow-md'>
                                    <Card variant="outlined" className='w-100'>
                                        <CardContent>
                                            <div className='mb-8'>
                                                <h1 className='text-2xl text-sky-600 text-center font-bold'>Lets Get Started</h1>
                                                <h3 className='text-lg text-center'>One account for all Stars products</h3>
                                            </div>
                                            <div className='mx-5'>
                                                <div className='mb-2 mx-'>
                                                    <span>
                                                        <ion-icon name="business-outline"></ion-icon>
                                                        <input type="text" placeholder='Company Name' className='border-none mx-1' />
                                                    </span>
                                                    <hr className='w-full text-black border-slate-500' />
                                                </div>

                                                <div className='mb-2'>
                                                    <span>
                                                        <ion-icon name="mail-outline"></ion-icon>
                                                        <input type="text" placeholder='Email Adress' className='border-none mx-1' />
                                                    </span>
                                                    <hr className='w-full text-black border-slate-500' />
                                                </div>

                                                <div className='mb-2'>
                                                    <span>
                                                        <ion-icon name="call-outline"></ion-icon>
                                                        <input type="text" placeholder='Contact Number' className='border-none mx-1' />
                                                    </span>
                                                    <hr className='w-full text-black border-slate-500' />
                                                </div>

                                                <div className='mb-6'>
                                                    <span>
                                                        <ion-icon name="lock-open-outline"></ion-icon>
                                                        <input type="text" placeholder='Password' className='border-none mx-1' />
                                                    </span>
                                                    <hr className='w-full text-black border-slate-500' />
                                                </div>

                                                <div className='mb-5'>
                                                    <span className='flex'>
                                                        <input type="checkbox" className='mr-2' />
                                                        <p className='text-sm'>I agree to the <strong>terms of services</strong> & <strong>privacy policy</strong></p>
                                                    </span>
                                                </div>

                                                <div className='mb-5'>
                                                    <Button variant="contained" color="primary" size='small' className='w-full'>
                                                        SIGN UP NOW
                                                    </Button>
                                                </div>
                                                <p className='mb-5 text-center'>Or</p>
                                                <div className='flex mb-4'>
                                                    <Button size='small' className='px-2'>
                                                        <img src="https://i.itworldcanada.com/wp-content/uploads/2022/08/google-logo-696x392.jpg"
                                                            className='w-16 h-8'
                                                        />
                                                    </Button>
                                                    <Button size='small' className='px-2'>
                                                        <img src="https://simg.nicepng.com/png/small/14-143196_moravian-college-linkedin-linkedin-circle-logo-transparent.png"
                                                            className='w-10 h-8'
                                                        />
                                                    </Button>
                                                    <Button size='small' className='px-2'>
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlJ6No3s5MBB3r7JyNzE7_fIR_24RYS_FcXC8qoiL4lvtuSghgUzYC7jBmGflwLWTfZg&usqp=CAU"
                                                            className='w-10 h-8'
                                                        />
                                                    </Button>
                                                </div>

                                            </div>
                                        </CardContent>
                                    </Card>


                                </div>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                </div>

            </Dialog>
        </div>
    )
}

export default DialogBox