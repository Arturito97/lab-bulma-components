import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

function Signup () {
    return (
        <div>
            <Navbar />
            <form>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" />
            <CoolButton isSmall isSuccess={true}>Signup</CoolButton>
            </form>
        </div>
    )
}

export default Signup