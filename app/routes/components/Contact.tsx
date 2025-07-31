export default function Contact({lable,link,icon} : {lable : any, link : any, icon : any}) {
    return (
        <div className="w-16">
            <a href={link}>
                <img src={icon} className="w-full" title={lable} />
            </a>
        </div>
    );
}