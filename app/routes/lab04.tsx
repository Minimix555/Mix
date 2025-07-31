import Footer from "./components/Footer";
import Header from "./components/Header";   

export default function MyTermProject() {
    const myPage = "Mix Term Project";
    const myTitle = "Thanin Panjai";
    const mystudentID = "026730491010-7";
    const myTermProject = [ //  {} - Objects
    {
        tpId: 1,
        tpSubject : "Web Technology",
        tpDesc : "พัฒนาเว็ป zzz",
        tpCover : "image/projs/TP01.png",
        tpUrl : "http://busitlab.rmutto.ac.th/~026730491010-7/",
        tpTeam : true
    },
    {
        tpId: 2,
        tpSubject : "Web Technology",
        tpDesc : "พัฒนาเว็ป zzz",
        tpCover : "image/projs/TP01.png",
        tpUrl : "http://busitlab.rmutto.ac.th/~026730491010-7/",
        tpTeam : false
    }, 
    {
        tpId: 3,
        tpSubject : "Web Technology",
        tpDesc : "พัฒนาเว็ป zzz",
        tpCover : "image/projs/TP01.png",
        tpUrl : "http://busitlab.rmutto.ac.th/~026730491010-7/",
        tpTeam : true
    },
    ]
        const tpSingle = myTermProject.filter(tpTmp =>
            tpTmp.tpTeam === true
        )

        const myTeamProject = myTermProject.map((tpObject , index) =>
            <div className="grid grid-cols-5 mx-auto border-gray-300" key={index}> 
            <div className="w-32 p-1">
            <img src={tpObject.tpCover} className="w-full rounded-full" title = {tpObject.tpSubject+ " (ID: " +tpObject.tpId+")"} />
            </div>
            <div className="p-4 col-span-3 mb-auto">
            <h2 className="text-lg font-semibold text-gray-800"> {tpObject.tpSubject} </h2>
            <p className="text-gray-600 text-sm mt-2"> {tpObject.tpSubject} </p>
        </div>
            <div className="p-4 mb-auto">
            <a href={tpObject.tpUrl} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2">Preview</a>
            </div>
            </div>
        )

    return (
            <>
            <Header title={myPage} />
            <p className="text-xl text-center">
            Name: {myTitle} 
            StudentID: {mystudentID}
        </p>
            <div className = "w-1/2 grid mx-auto h-100 overflow-auto rounded-2x1 border-grey-300 m-6 ">
            {myTeamProject}
            </div>
        <Footer title="Thanin Panjai 026730491010-7"/>
        </>
    )
}

function ITteam ({isTeam}){
    if (isTeam) {
        return (<p>
            group
            </p>)
            return (<p>
                ungroup
            </p>);
    }
}