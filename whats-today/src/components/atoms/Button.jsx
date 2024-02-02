export default function Button({ name, func }) {
    return (
        <button type="submit" className="flex px-6 py-2 bg-sky-400 rounded-3xl justify-center items-center hover:bg-sky-600 transition duration-500 cursor-pointer custom-button">
            <span className="text-center text-white font-semibold">{name}</span>
        </button>
    );
}
