import React, { useState } from 'react';
import Modal from 'react-modal'
const SignIn = () => {
    return (
        <div>
<Modal isOpen={true}>
    <form>
    <center> <h1 >Welcome,Again</h1> </center>
    <label> Phone no/email </label>
<input type="text"
required />
        </form> 
     </Modal>
        </div>
    )
}

export default SignIn;