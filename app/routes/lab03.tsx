// Filename: lab03.tsx
import Profile from "./components/profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Myprofile(){
    return(
            <><Profile />
            <div className="flex items-center m-5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">
        </div>
    </div>
            <Contact
            lable="FB MixMinnie"
            link="https://www.facebook.com/mix.minnie/"
            icon="image/FB.png" 
            />
            <Contact
                lable ="IG"
                link="https://www.facebook.com/mix.minnie/"
                icon="image/IG.png" />
                <div className="ps-5 pe-5 pt-3 pb-1 bg-rose w-16 flex justifly-center mt-5">
                <a href="/">Back</a>            
        </div>
        <Footer 
             title = {"Mix_testAPP"} />
            </>
    );
}