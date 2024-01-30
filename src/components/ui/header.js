import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex w-[1476px] h-[360px] justify-center items-center">
      <div className="relative flex w-[1440px] h-[360px] left-[36px]">
        <div className="absolute w-[1440px] h-[360px] top-0 left-0">
          <div className="absolute w-[1440px] h-[75px] top-0 left-0 bg-[#84b1b7]" />
          <div className="absolute top-[20px] left-[80px] font-semibold text-white text-[36px] tracking-[0] leading-[normal]">
            Tracking
          </div>
          <div className="absolute w-[88px] top-[27px] left-[1238px] font-semibold text-[#182b2e] text-[20px] tracking-[0] leading-[normal]">
            English
          </div>
          <div className="absolute w-[58px] top-[23px] left-[1325px] font-bold text-white text-[20px] text-left tracking-[0] leading-[normal] [direction:rtl]">
            عربي
          </div>
          <Image
            className="absolute top-[20px] left-[1374px]"
            alt="Emojione flag for"
            src="/images/arabic.svg"
            width={30}
            height={37}
          />
          <Image
            className="absolute top-[23px] left-[1201px]"
            alt="Emojione flag for"
            src="/images/english.svg"
            width={30}
            height={37}
          />
          <div className="absolute top-[18px] left-[468px] font-semibold text-white text-[32px] tracking-[0] leading-[normal]">
            Brushes
          </div>
          <div className="absolute top-[18px] left-[625px] font-semibold text-white text-[32px] tracking-[0] leading-[normal]">
            Contact Us
          </div>
          <div className="absolute top-[18px] left-[829px] font-semibold text-white text-[32px] tracking-[0] leading-[normal]">
            About Us
          </div>
          <Image
            className="absolute top-[25px] left-[37px]"
            alt="Vector"
            src="/images/truck.svg"
            width={40}
            height={40}
          />
          <div className="absolute top-[257px] left-[221px] font-bold text-[#182b2e] text-[35px] tracking-[0] leading-[normal]">
            Trendy
          </div>
          <Image
            className="absolute w-[264px] h-[300px] top-[60px] left-0 object-cover"
            alt="Ideogram"
            src="/images/logo.png"
            width={264}
            height={300}
          />
        </div>
        <div className="absolute w-[848px] h-[65px] top-[139px] left-[297px]">
          <div className="relative w-[846px] h-[65px] bg-[#a7c7cc] rounded-[13px]">
            <Image
              className="absolute w-[50px] h-[50px] top-[12px] left-[13px]"
              alt="System uicons search"
              src="/images/search.svg"
              width={50}
              height={50}
            />
            <p className="absolute top-[12px] left-[87px] font-medium text-white text-[36px] tracking-[0] leading-[normal]">
              Search Item ,type , Color
            </p>
          </div>
        </div>
        <div className="absolute top-[257px] left-[391px] font-bold text-[#182b2e] text-[35px] tracking-[0] leading-[normal]">
          New
        </div>
        <div className="absolute top-[257px] left-[525px] font-bold text-[#182b2e] text-[35px] tracking-[0] leading-[normal]">
          Offers
        </div>
        <div className="absolute top-[257px] left-[1229px] font-bold text-[#182b2e] text-[35px] tracking-[0] leading-[normal]">
          Size Guide
        </div>
        <Image
          className="absolute w-[38px] h-[34px] top-[162px] left-[1366px]"
          alt="Shopping cart"
          src="/images/like.svg"
          width={38}
          height={34}
        />
        <Image
          className="absolute w-[44px] h-[45px] top-[152px] left-[1286px]"
          alt="Like"
          src="/images/cart.svg"
          width={44}
          height={45}
        />
        <Image
          className="absolute w-[45px] h-[45px] top-[151px] left-[1206px]"
          alt="Mi user"
          src="/images/user.svg"
          width={45}
          height={45}
        />
        <div className="absolute w-[138px] h-[43px] top-[258px] left-[686px]">
          <div className="absolute top-0 left-0 font-bold text-[#182b2e] text-[35px] tracking-[0] leading-[normal]">
            Season
          </div>
          <Image
            className="absolute w-[20px] h-[15px] top-[19px] left-[116px]"
            alt="Vector"
            src="/images/arrow.svg"
            width={20}
            height={15}
          />
        </div>
        <div className="absolute w-[106px] h-[43px] top-[258px] left-[887px]">
          <div className="absolute top-0 left-0 font-bold text-[#182b2e] text-[35px] tracking-[0] leading-[normal]">
            Style
          </div>
          <Image
            className="absolute w-[20px] h-[15px] top-[19px] left-[84px]"
            alt="Vector"
            src="/images/arrow.svg"
            width={20}
            height={15}
          />
        </div>
        <div className="absolute w-[110px] h-[43px] top-[258px] left-[1056px]">
          <div className="absolute top-0 left-0 font-bold text-[#182b2e] text-[35px] tracking-[0] leading-[normal]">
            Color
          </div>
          <Image
            className="absolute w-[20px] h-[15px] top-[19px] left-[88px]"
            alt="Vector"
            src="/images/arrow.svg"
            width={20}
            height={15}
          />
        </div>
      </div>
    </div>
  );
}
