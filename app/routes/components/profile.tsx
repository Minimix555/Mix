export default function Profile() {
    return (
        <><h1 className="text -2xl text-sky-500 text-center">Profile</h1>
        <div className="p-10 bg-red-50 rounded">
            <img src="image/myprofile.png" className="rounded-full w-32 shadow-lg border-4 border-nutral-100 mx-auto" />
            <h2 className="text-xl text-center text-red-900 font-bold m-5"> About Me</h2>
            <p className="text-center w-1/2 mx-auto">
                ธนินท์ ปานใจ
                สาขา IT
                </p>
        </div><div>
                <div className="ps-5 pe-5 pt-1 pb-1 bg-amber-300 rounded w-16 flex justify-center mt-5"></div>
                <a href="/">Back</a>
            </div></>

    );
}