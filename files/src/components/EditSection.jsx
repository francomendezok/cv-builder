/* eslint-disable react/prop-types */

function Btn ({img, alt, text, btnClass, callback}) {

    return (
        <button className={btnClass} onClick={callback}>
            <img className="m-auto h-1/2 mb-2" src={img} alt={alt} />
            {text}
        </button>
    )
}

export default function EditSection () {
    return (
        <div className="editLayout h-4/5 w-full flex flex-col items-center justify-around">
            <div className="flex flex-col items-center justify-evenly text-sm text-center h-1/2 w-1/2 shadow-lg rounded-lg">
                <Btn img={'../src/assets/file.png'} alt={'Content'} btnClass={'btnContent'} text={'Content'}/>
                <Btn img={'../src/assets/edit.png'} alt={'Edit'} btnClass={'btnCustomize'} text={'Customize'}/>
            </div>
            <div className="flex flex-col items-center justify-evenly text-sm text-center h-1/2 w-1/2 shadow-lg rounded-lg">
                <Btn img={'../src/assets/clear.png'} alt={'Clear'} btnClass={'btnClear'} text={'Clear Resume'}/>
                <Btn img={'../src/assets/example.png'} alt={'Example'} btnClass={'btnExample'} text={'Load Example'}/>
            </div>
        </div>
    )
}