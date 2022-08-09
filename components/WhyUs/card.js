import Image from 'next/image'

export default function Card(props) {
    return (
        <div class="flex items-center w-full">
            <div class="block p-6 shadow-lg bg-white h-80 min-w-full m-6 rounded-3xl">
                <Image src={`${props.img}`} width={60} height={60} />
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{props.title}</h5>

            </div>
        </div>
    )
}
