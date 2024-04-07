import { Link } from "react-router-dom";
import { HiChevronUp } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import { useState } from "react";

const Nav1 = () => {
    const [showCategories, setShowCategories] = useState(false);
    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };

    return (
        <nav className="bg-gray-200 py-4 px-6 flex w-full justify-center justify-evenly items-center">
            <h1 className="text-xl font-bold mb-4 flex gap-[6px] items-center cursor-pointer" onClick={toggleCategories}>
                All Categories
                <span className={`transition-transform duration-300 transform ${showCategories ? 'rotate-180' : ''}`}>
                    {showCategories ? <HiChevronUp /> : <HiChevronDown />}
                </span>
            </h1>
            {
                showCategories && (
                    <div className="absolute top-[20%] w-[80%]">
                        <div className="flex gap-[10px] justify-evenly ">
                            <div className="div1 flex flex-col">
                                <Link to="/category1">Link1</Link>
                                <Link to="/category2">Link2</Link>
                                <Link to="/category3">Link3</Link>
                                <Link to="/category4">Link4</Link>
                                <Link to="/category5">Link5</Link>
                                <Link to="/category6">Link6</Link>
                            </div>
                            <div className="div1  flex flex-col">
                                <Link to="/category7">Link7</Link>
                                <Link to="/category8">Link8</Link>
                                <Link to="/category9">Link9</Link>
                                <Link to="/category10">Link10</Link>
                                <Link to="/category11">Link11</Link>
                            </div>
                            <div className="div1  flex flex-col">
                                <Link to="/category12">Link12</Link>
                                <Link to="/category13">Link13</Link>
                                <Link to="/category14">Link14</Link>
                                <Link to="/category15">Link15</Link>
                                <Link to="/category16">Link16</Link>
                            </div>
                            <div className="div1  flex flex-col">
                                <Link to="/category17">Link17</Link>
                                <Link to="/category18">Link18</Link>
                                <Link to="/category19">Link19</Link>
                                <Link to="/category20">Link20</Link>
                                <Link to="/category21">Link21</Link>
                                <Link to="/category22">Link22</Link>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="flex gap-[10px] items-center justify-evenly ">
                <Link to="/cars" className="text-blue-600 hover:underline mb-2">Cars</Link>
                <Link to="/motorcycle" className="text-blue-600 hover:underline mb-2">Motorcycle</Link>
                <Link to="/mobile" className="text-blue-600 hover:underline mb-2">Mobile Phone</Link>
                <Link to="/houses" className="text-blue-600 hover:underline mb-2">House</Link>
                <Link to="/scooters" className="text-blue-600 hover:underline mb-2">Scooters</Link>
            </div>
        </nav>
    );
}

export default Nav1;
