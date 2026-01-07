export default function Login(){

    return(
        <div className="w-full h-screen md:flex md:flex-col gap-6 md:justify-center items-center">
            <h1 className="text-4xl">
          Login  
          </h1>
          <div>
          <label htmlFor="email">Enter your email</label><br />
          <input className="border rounded-md" type="text" id="email" placeholder="" />
          </div>
          <div>
          <label htmlFor="password">Enter your password</label> <br />
          <input className="border rounded-md" type="text" id="password" placeholder="" />
          </div>
        </div>
    )
}