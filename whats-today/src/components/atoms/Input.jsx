export default function Input({name, type, width, height}) {
    return (
        <input 
            type={type}
            className={`flex w-${width} h-${height} px-4 items-center outline-none border border-sky-300 rounded-full focus:border-2 focus:border-sky-600 focus:bg-sky-100 focus:font-semibold transition duration-500`}
            name={name}
        >
        </input>
    );
}