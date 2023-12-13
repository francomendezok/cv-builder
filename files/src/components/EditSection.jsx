function Btn ({img, alt, text, btnClass, callback}) {

    return (
        <button className={btnClass} onClick={callback}>
            <img src={img} alt={alt} />
            {text}
        </button>
    )
}

export default function EditSection () {
    return (
        <div className="editLayout border-4 border-red-500 h-4/5 w-full flex flex-col items-center justify-around">
            <div className="flex flex-col items-center justify-evenly shadow-lg rounded-lg">
                <Btn text={'Content'}/>
                <Btn text={'Customize'}/>
            </div>
            <div className="flex flex-col items-center justify-evenly shadow-lg rounded-lg">
                <Btn text={'Clear Resume'}/>
                <Btn text={'Load Example'}/>
            </div>
        </div>
    )
}