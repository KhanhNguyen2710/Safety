// src/components/CardProduct.tsx

import { useFetchHangHoa } from "../../hook/useFetchHangHoa";
import giay from '../../assets/giaytrang.png'

function CardProduct() {
    // const { data: HangHoa, loading, error } = useFetchHangHoa();

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="mx-[10%]">
                <div className="flex justify-center font-bold  mt-3">
                    <p className="text-xl font-bold">Card Product</p>
                </div>
                {/* content */}
                {/* <ul>
                {HangHoa.map(HangHoa => (
                    <li key={HangHoa.id}>
                        <p>{HangHoa.ten}</p>
                        <p>{HangHoa.giaSi}</p>
                        <p>{HangHoa.description}</p>
                        <p>{HangHoa.maNSX}</p>
                        <p>{HangHoa.giaSi}</p>
                        
                    </li>
                ))}
            </ul> */}

                <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {/* Product */}
                        <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img alt="error" src={giay} className="h-full w-full object-center lg:h-full lg:w-full bg-slate-300" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Giày bảo hộ La La Ba La
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Màu đỏ</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">500.000</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default CardProduct;
