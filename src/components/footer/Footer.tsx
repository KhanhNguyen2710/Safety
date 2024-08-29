

export default function Footer() {
  return (
    <>
    
      <div className="flex flex-wrap justify-around">
        {/* Offices Section */}
        <div > 
          <h5 className="text-xl mb-2">
            Offices
          </h5>
          <div className="flex  ">
            <div >
              <p className="mt-4">
                Da Nang
              </p>
              <p className="mt-2 text-left">
                Hà Nội: 335 Trương Định, P.Tương Mai, Q.Hoàng Mai
                <br />
                Số 1150 Nguyễn Khoái, P Lĩnh Nam, Q Hoàng Mai, Hà Nội
                <br />
                TP.HCM: Số 656/55 Quang Trung, P 11, Q. Gò Vấp, Tp HCM
              </p>
            </div>
            <div >
              <p>
                Office 2
              </p>
              <p>
                Address 2
              </p>
              <p>
                City, Country
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div >
          <h5 className="text-xl mb-2">
            Services
          </h5>
          <div className="flex flex-wrap ">
            <div className="w-full sm:w-1/2">
              <a href="#" className="block ">
                Service 1
              </a>
              <a href="#" className="block ">
                Service 2
              </a>
            </div>
            <div className="w-full sm:w-1/2">
              <a href="#" className="block ">
                Service 3
              </a>
              <a href="#" className="block  ">
                Service 4
              </a>
            </div>
          </div>
        </div>
      </div>
   

      <p className="mt-4 text-center text-sm ">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </>
  );
}
