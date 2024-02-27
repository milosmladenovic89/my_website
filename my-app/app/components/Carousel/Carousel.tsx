

export default function Carousel() {
    return (
        <div className="w-full lg:w-1200p mx-auto mt-80">


            <div className="carousel carousel-center w-full">
                <div id="item1" className="carousel-item lg:w-1/3 mx-5">
                    <div className="border border-gray-700 rounded-2xl    h-80 box-grid-div w-full"></div>
                </div>
                <div id="item2" className="carousel-item w-1/3 mx-5">
                    <div className="border border-gray-700 rounded-2xl   h-80 box-grid-div w-full"></div>
                </div>
                <div id="item3" className="carousel-item w-1/3 mx-5">
                    <div className="border border-gray-700 rounded-2xl   h-80 box-grid-div w-full"></div>
                </div>
                <div id="item4" className="carousel-item w-1/3 mx-5">
                    <div className="border border-gray-700 rounded-2xl    h-80 box-grid-div w-full"></div>
                </div>


            </div>

            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs rounded-xl">1</a>
                <a href="#item2" className="btn btn-xs rounded-xl">2</a>
                <a href="#item3" className="btn btn-xs rounded-xl">3</a>
                <a href="#item4" className="btn btn-xs rounded-xl">4</a>
            </div>
        </div>
    )
}
