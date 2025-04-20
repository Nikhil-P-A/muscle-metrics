"use client";
import { useState } from "react";

export default function Signup(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        console.log('Username: '+username);
        console.log('E Mail: '+email);
        console.log('Password: '+password);
    }
    return(
        <main className="h-[100vh]">
            <div className="flex flex-col items-center justify-center h-[100vh]">
            <div>Sign Up</div>
            <div>
                <InputBox label="Username" placeholder="Ex: Nikhil" value={username} onChange={(e) => setUsername(e.target.value)}></InputBox>
                <InputBox label="E-mail" placeholder="Ex: abcd@gmail.com"  value={email} onChange={(e) => setEmail(e.target.value)}></InputBox>
                <InputBox label="Password" placeholder="Ex: 1234"  value={password} onChange={(e) => setPassword(e.target.value)}></InputBox>
            </div>
            <div className="my-1">
            <Button name="Sign Up" onClick={handleSignUp}></Button>
            </div>
            </div>
        </main>
    );
}

interface InputBox{
    label?: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({label, placeholder, type, value, onChange}: InputBox){
    return <div className="flex flex-col">
        <label>{label}</label>
        <input type={type || "text"} placeholder={placeholder} value={value} onChange={onChange} required className="border rounded-sm p-1"/>
    </div>
}

interface Button{
    name: string;
    onClick: () => void;
}
function Button({name, onClick}:Button){
    return <div>
        <button className="border rounded-sm p-1 w-40 hover:bg-amber-100" onClick={onClick}>{name}</button>
    </div>
}