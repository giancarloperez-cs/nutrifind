import Header from "../components/Header.jsx"
import SectionTitle from "../components/SectionTitle.jsx"
import React, {useState} from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState (false);
} 

function RecipeBrowser(){
    return(
        <div className="">
            <Header
            headingText={"The Recipe Browser"}
            subheadingText={"Find Recipes Tailored to you"}
            bodyText={"(will revise this later) Utilize our filters in order to find recipes and cooking instructions that meet your exact needs, whether it be financial, dietary, or (another word)"}
            />
            <SectionTitle
            headerText={"Filters"}
            />
            <div className="py-90 bg-light">
            </div>
        </div>
    )
}

export default RecipeBrowser