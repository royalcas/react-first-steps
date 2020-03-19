import React, { useState } from 'react';

export type FormModel = {
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    emailConfirm: string,
    idNumber: string,
}

const defaultState: FormModel = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    emailConfirm: '',
    idNumber: '',
}

export const FirstForm = () => {
    var [formData, setFormData] = useState(defaultState);
    return <div className="form-container">
        <form>
            <div className="form-input">
                <label>First Name</label>
                <input name="firstName"
                    value={formData.firstName}
                    onChange={({ target: { value } }) => setFormData({ ...formData, firstName: value })} type="text"></input>
            </div>
            <div className="form-input">
                <label>Last Name</label>
                <input name="lastName" value={formData.lastName}
                    onChange={({ target: { value } }) => setFormData({ ...formData, lastName: value })} type="text"></input>
            </div>

            <div className="form-input">
                <label>Email</label>
                <input name="email" value={formData.email}
                    onChange={({ target: { value } }) => setFormData({ ...formData, email: value })} type="text"></input>
            </div>
            <div className="form-input">
                <label>Confirm your Email</label>
                <input name="emailConfirm" value={formData.emailConfirm}
                    onChange={({ target: { value } }) => setFormData({ ...formData, emailConfirm: value })} type="text"></input>
            </div>
            <div className="form-input">
                <label>ID Number</label>
                <input name="idNumber" value={formData.idNumber}
                    onChange={({ target: { value } }) => setFormData({ ...formData, idNumber: value })}
                    type="text"></input>
            </div>

            <div className="form-input">
                <label>Password</label>
                <input name="password" value={formData.password}
                    onChange={({ target: { value } }) => setFormData({ ...formData, password: value })}
                    type="password"></input>
            </div>
            <div className="form-actions">
                <button type="submit">Save</button>
            </div>

            {JSON.stringify(formData)}


        </form>
    </div >;
}