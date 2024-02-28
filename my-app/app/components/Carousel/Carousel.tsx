

export default function Carousel() {
    return (
        <div className="w-full lg:w-1200p mx-auto mt-80 text-center">

            <div className="carousel carousel-center w-1/2 h-96 p-4 space-x-4 bg-neutral rounded-box">

                <div id="item1" className="carousel-item w-3/4">
                    <div className="border border-gray-700 rounded-2xl    h-full box-grid-div w-full"></div>
                </div>
                <div id="item2" className="carousel-item w-3/4">
                    <div className="border border-gray-700 rounded-2xl    h-full box-grid-div w-full"></div>
                </div>
                <div id="item3" className="carousel-item w-3/4">
                    <div className="border border-gray-700 rounded-2xl    h-full box-grid-div w-full"></div>
                </div>
                <div id="item4" className="carousel-item w-3/4">
                    <div className="border border-gray-700 rounded-2xl    h-full box-grid-div w-full"></div>
                </div>

            </div>

            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn rounded-xl h-2  w-6  btn-xs"></a>
                <a href="#item2" className="btn rounded-xl h-2  w-6  btn-xs"></a>
                <a href="#item3" className="btn rounded-xl h-2  w-6  btn-xs"></a>
                <a href="#item4" className="btn rounded-xl h-2  w-6  btn-xs"></a>
            </div>
        </div>
    )
}
