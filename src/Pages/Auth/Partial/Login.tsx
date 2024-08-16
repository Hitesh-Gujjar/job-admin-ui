import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../../Component/TextField";
import { callPostApi } from "../../../asset/axios/axiosApi";

function Login() {
    const navigate = useNavigate();
    const [userDetails, setUsetDetails] = useState<any>({
        userId: "",
        password: "",
    });

    const handleLogin = async () => {

        const isLogin: any = await callPostApi('/user/login', userDetails);

        if (isLogin.data.staus) {
            const userData = isLogin.data;
            localStorage.setItem("user", JSON.stringify(userData));

            navigate('/');
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your job portal
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <TextField
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={userDetails?.userId}
                                    handleOnChange={(e: any) => {
                                        setUsetDetails({ ...userDetails, userId: e.target.value });
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <TextField
                                    name="password"
                                    id="password"
                                    type="password"
                                    value={userDetails?.password}
                                    handleOnChange={(e: any) => {
                                        setUsetDetails({
                                            ...userDetails,
                                            password: e.target.value,
                                        });
                                    }}
                                />

                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={() => handleLogin()}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{" "}
                        <Link
                            to={"/sign-up"}
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Create New Account
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
