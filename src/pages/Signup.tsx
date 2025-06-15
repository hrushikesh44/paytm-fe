import { useRef } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;

    await axios.post(BACKEND_URL + "/signup", {
      username,
      password,
      firstName,
      lastName,
    });
    navigate("/signin");
  }

  return (
    <div
      className="bg-neutral-900 h-screen flex justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundRepeat: "repeat",
        backgroundSize: "8px 8px",
      }}>
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <Subheading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder="JohnDoe"
            label={"Username"}
            reference={usernameRef}
          />
          <InputBox
            placeholder=" "
            label={"Password"}
            reference={passwordRef}
          />
          <InputBox
            placeholder="John"
            label={"First Name"}
            reference={firstNameRef}
          />
          <InputBox
            placeholder="Doe"
            label={"Last Name"}
            reference={lastNameRef}
          />
          <div className="pt-4">
            <Button
              label={"Sign up"}
              onClick={signup}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
