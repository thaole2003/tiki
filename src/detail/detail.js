import data from "../../db.json" assert { type: "json" };

const urlParams = new URLSearchParams(location.search);

const id = urlParams.get("id");

let book = data.filter(function (book) {
  return book.id == id;
});

book = book[0];
console.log(book);
const contentElement = document.querySelector("#content");
let listcategories = data.filter(function (categuri) {
  return categuri.categories.id === book.categories.id
})
console.log("sanpham tuong tu")
console.log(listcategories)
const _content = /*html*/ `
<div class="container place-content-center mx-auto " >
<div class="md:hidden grid grid-cols-1 p-4">
  <div class="">
    <img src="${book.images[0].base_url}" class="w-full" alt="" />
  </div>
  <div class="p-3">
    <p class="text-xl">${book.name}</p>
  </div>
  <div>
    <div class="flex">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
          fill="#FDD835"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
          fill="#FDD835"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
          fill="#FDD835"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
          fill="#FDD835"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
          fill="#FDD835"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
          fill="#FDD835"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
          fill="#FDD835"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
          fill="#FDD835"
        />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
          fill="#FDD835"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
          fill="#FDD835"
        />
      </svg>
      <div class="flex gap-3">
        <p class="pl-2">77</p>
        <p>Đã bán 407</p>
      </div>
    </div>
  </div>
  <div>
    <p>${book.list_price}</p>
  </div>
  <div>
    <div class="flex py-2 gap-1">
      <img src="../images/detail1.png " class="w-4 h-5" alt="" />
      <p>Thưởng lên đến 9,41 ASA ≈ 5.249 Xu</p>
    </div>
  </div>
  <div>
    <div class="flex justify-between">
      <p>18 Mã Giảm Giá</p>
      <div class="flex gap-3">
        <button class="boder border-2 border-blue-500 rounded-lg">
          <p class="px-2">Giam 10k</p>
        </button>
        <button class="boder border-2 border-blue-500 rounded-lg">
          <p class="px-2">Giam 20k</p>
        </button>
        <button>
          <img src="../images/detail1.png" alt="" />
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="flex justify-between">
      <div class="">
        <p class="text-xl">Nhập địa chỉ giao hàng</p>
      </div>
      <button>
        <img src="../images/detail1.png" alt="" />
      </button>
    </div>
  </div>
</div>
</div>
<div class="flex space-x-3 container mx-auto">
<div class="flex-none w-1/3">
  <div class="bg-white p-4 justify-center hidden md:block">
    <img
      src="${book.images[0].base_url}"
     
    />
  </div>
  <div class="md:block hidden">
    <div class="grid grid-cols-5 gap-4 p-4 ml-9">
     
      ${book.images
        .map(function (image) {
          return `<img src="${image.base_url}" alt="">`;
        })
        .join("")}
    </div>
  </div>
  <div class="md:block hidden">
    <div class="flex">
      <p>Chia sẻ:</p>
      <div class="flex gap-2 px-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14Z"
            fill="#25479B"
          />
          <mask
            id="mask0_1_2602"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="10"
            y="6"
            width="8"
            height="16"
          >
            <path
              d="M12.2409 21.7782H14.9429V14.0042H16.9689L17.3689 11.5742H14.9429V9.81423C14.9429 9.24723 15.2929 8.65123 15.7929 8.65123H17.1729V6.22223H15.4829V6.23223C12.8359 6.33323 12.2929 7.93923 12.2459 9.62523H12.2409V11.5752H10.8889V14.0042H12.2409V21.7782Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1_2602)">
            <path
              d="M12.2409 21.7782H14.9429V14.0042H16.9689L17.3689 11.5742H14.9429V9.81423C14.9429 9.24723 15.2929 8.65123 15.7929 8.65123H17.1729V6.22223H15.4829V6.23223C12.8359 6.33323 12.2929 7.93923 12.2459 9.62523H12.2409V11.5752H10.8889V14.0042H12.2409V21.7782Z"
              fill="#25479B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.66675 4.66669H23.3337V23.3337H4.66675V4.66669Z"
              fill="white"
            />
          </g>
        </svg>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
            fill="#0084FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.848 15.928L13.077 14.028L9.61995 15.928L13.422 11.867L15.237 13.767L18.651 11.867L14.848 15.928ZM14.157 7.20001C10.315 7.20001 7.19995 10.102 7.19995 13.681C7.19995 15.721 8.21195 17.541 9.79295 18.729V21.2L12.161 19.892C12.793 20.068 13.463 20.163 14.157 20.163C17.999 20.163 21.114 17.261 21.114 13.681C21.114 10.101 17.999 7.20001 14.157 7.20001Z"
            fill="white"
          />
        </svg>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
            fill="#CC2127"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.2 6.79999C10.334 6.79999 7.19995 9.93799 7.19995 13.807C7.19995 16.692 8.94095 19.169 11.428 20.244C11.411 19.756 11.428 19.174 11.552 18.645L12.456 14.813C12.456 14.813 12.232 14.363 12.232 13.7C12.232 12.659 12.836 11.88 13.586 11.88C14.226 11.88 14.535 12.361 14.535 12.936C14.535 13.579 14.125 14.541 13.913 15.431C13.738 16.177 14.289 16.786 15.023 16.786C16.353 16.786 17.249 15.075 17.249 13.046C17.249 11.506 16.214 10.352 14.327 10.352C12.197 10.352 10.867 11.942 10.867 13.72C10.867 14.332 11.049 14.765 11.332 15.1C11.462 15.253 11.479 15.315 11.432 15.492C11.398 15.621 11.322 15.932 11.29 16.056C11.243 16.234 11.098 16.296 10.938 16.231C9.95695 15.831 9.49795 14.755 9.49795 13.545C9.49795 11.547 11.182 9.15199 14.52 9.15199C17.203 9.15199 18.968 11.095 18.968 13.18C18.968 15.94 17.435 18 15.177 18C14.418 18 13.704 17.59 13.461 17.124C13.461 17.124 13.052 18.744 12.967 19.057C12.819 19.591 12.535 20.125 12.272 20.545C12.884 20.72 13.53 20.815 14.2 20.815C18.066 20.815 21.2 17.677 21.2 13.807C21.2 9.93699 18.066 6.79999 14.2 6.79999Z"
            fill="white"
          />
        </svg>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
            fill="#55ACEE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.413 8.64503C20.018 8.89803 19.11 9.26602 18.663 9.26602C18.153 8.73302 17.433 8.40002 16.635 8.40002C15.085 8.40002 13.829 9.65602 13.829 11.205C13.829 11.42 13.854 11.63 13.9 11.831C11.798 11.776 9.49995 10.723 8.11595 8.92002C7.26595 10.393 8.00095 12.03 8.96595 12.627C8.63595 12.652 8.02795 12.589 7.74195 12.31C7.72195 13.287 8.19195 14.582 9.90595 15.052C9.57595 15.229 8.99195 15.178 8.73795 15.141C8.82695 15.966 9.98195 17.044 11.246 17.044C10.796 17.565 9.10095 18.51 7.19995 18.209C8.49095 18.995 9.99595 19.45 11.589 19.45C16.116 19.45 19.631 15.781 19.442 11.256L19.44 11.24L19.442 11.205L19.44 11.165C19.852 10.882 20.405 10.384 20.8 9.72802C20.57 9.85402 19.884 10.106 19.244 10.169C19.654 9.94802 20.263 9.22203 20.413 8.64503Z"
            fill="white"
          />
        </svg>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
            fill="#242424"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.44867 12.5467C9.61267 12.3827 9.85267 12.3187 10.0767 12.3787C10.3007 12.4387 10.4757 12.6147 10.5347 12.8387C10.5947 13.0627 10.5287 13.3017 10.3647 13.4657C10.1047 13.7217 9.79267 14.0327 9.47667 14.3477L9.20667 14.6177L9.07267 14.7497L8.81267 15.0097L8.24867 15.5717L8.00367 15.8147L7.89467 15.9247L7.83667 15.9817L7.82867 15.9897C6.67467 17.1447 6.67467 19.0167 7.82867 20.1707C8.98367 21.3257 10.8567 21.3257 12.0107 20.1707L14.5357 17.6357C14.6987 17.4717 14.9377 17.4067 15.1617 17.4657C15.3857 17.5257 15.5617 17.7007 15.6217 17.9247C15.6817 18.1477 15.6187 18.3867 15.4547 18.5517L12.9277 21.0867C12.1327 21.8877 11.0487 22.3367 9.91967 22.3337C8.19967 22.3337 6.64967 21.2967 5.98967 19.7077C5.33267 18.1187 5.69567 16.2897 6.91267 15.0727L9.44867 12.5467ZM16.3017 10.7827C16.5557 10.5297 16.9657 10.5297 17.2187 10.7827C17.4717 11.0357 17.4717 11.4457 17.2187 11.6987L11.6967 17.2187C11.4437 17.4727 11.0337 17.4727 10.7807 17.2187C10.5277 16.9667 10.5277 16.5557 10.7807 16.3027L16.3017 10.7827ZM15.0747 6.91467C15.9997 5.98467 17.3027 5.53667 18.6037 5.69967C19.3477 5.78867 20.0547 6.07567 20.6507 6.53067C21.6297 7.27367 22.2387 8.40367 22.3237 9.63067C22.4077 10.8557 21.9577 12.0587 21.0897 12.9287L18.5527 15.4547C18.3877 15.6187 18.1487 15.6817 17.9247 15.6217C17.7007 15.5607 17.5267 15.3857 17.4667 15.1617C17.4067 14.9367 17.4717 14.6977 17.6367 14.5347L20.1737 12.0127C20.9207 11.2647 21.2117 10.1757 20.9377 9.15567C20.6647 8.13567 19.8677 7.33867 18.8457 7.06567C17.8257 6.79167 16.7357 7.08367 15.9897 7.83167L13.4667 10.3667C13.3027 10.5317 13.0637 10.5967 12.8387 10.5367C12.6147 10.4767 12.4387 10.3027 12.3787 10.0777C12.3187 9.85367 12.3817 9.61367 12.5467 9.44967L15.0747 6.91467Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</div>
<div class="grow py-3 float-left md:block hidden">
  <div class="flex gap-2">
    <p class="pr-5">Tác giả: ${
      book.authors ? book.authors[0].name : "Không xác định tác giả"
    }</p>
    <p>Đứng thứ 13 trong</p>
    <p>Top 1000</p>
    <p>Sách tư duy - Kỹ năng sống</p>
    <p>bán chạy tháng này</p>
  </div>
  <h2 class="text-xl">${book.name}</h2>
  <div class="flex space-x-2">
    <p class="flex">
    ★★★★★
    </p>
    <p>(Xem 2942 đánh giá)</p>
    <p>Đã bán 1000+</p>
  </div>
  <div class="flex space-x-4">
    <div class="grid grid-cols-1">
      <div class="py-2">
        <div
          class="float-left boder border-2 border-gray-100 rounded-lg"
        >
          <div class="flex gap-3 py-2 px-4">
            <p class="text-3xl text-red-500">${book.list_price}</p>
            <p class="py-3">${book.original_price}</p>
            <p class="py-3">-23%</p>
          </div>
          <div class="px-4 pb-3 pr-44">
            <div class="flex py-2 px-4 bg-purple-100 rounded-lg gap-1">
              <img
                src="../images/detail1.png "
                class="w-4 h-5"
                alt=""
              />
              <p>Thưởng lên đến 7,31 ASA ≈ 3.969 Xu</p>
             
            </div>
          </div>
        </div>
      </div>
      <div class="py-2">
        <div
          class="py-2 float-left boder border-2 border-gray-100 rounded-lg"
        >
          <div class="py-1 px-3">
            <p>15 Mã Giảm Giá</p>
          </div>
          <div class="px-3 pr-48">
            <div class="flex gap-2">
              <div
                class="px-2 boder border-2 border-blue-500 rounded-lg"
              >
                <p>Giảm 10k</p>
              </div>
              <div
                class="px-2 boder border-2 border-blue-500 rounded-lg"
              >
                <p>Giảm 20k</p>
              </div>
              <div
                class="px-2 boder border-2 border-blue-500 rounded-lg"
              >
                <p>Giảm 30k</p>
              </div>
              <button class="">
                <img src="../images/detail1.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="py-2">
        <div class="flex px-3 font-normal">
          <p>Giao đến</p>
          <p>Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</p>
          <p>-</p>
          <p class="text-blue-600">Đổi địa chỉ</p>
        </div>
      </div>
      <div class="flex gap-2 py-2">
        <div class="boder border-2 border-gray-200 rounded-lg">
          <div class="px-3">
            <div class="flex gap-2">
              <img src="../images/tiki now.png" alt="" />
              <p>Trước 18:00 hôm nay</p>
            </div>
            <div>
              <p>19.000đ</p>
            </div>
            <div class="py-1">
              <div
                class="flex py-1 px-4 bg-purple-100 rounded-lg gap-2"
              >
                <img src="../images/detail1.png " class="w-3 h-4" alt="" />
                <p class="text-xs">Freeship 100% chỉ với 34 ASA</p>
                <div class="py-1">
              
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="boder border-2 border-gray-200 rounded-lg">
          <div class="px-3">
            <div class="flex gap-2">
              <img src="../images/tiki fast.png" alt="" />
              <p>Trước 18:00 hôm nay</p>
            </div>
            <div>
              
              <p>10.000đ (Freeship 30K đh 149K)</p>
            </div>
            <div class="py-1">
              <div
                class="flex py-1 px-4 bg-purple-100 rounded-lg gap-2"
              >
                <img src="../images/detail1.png " class="w-3 h-4" alt="" />
                <p class="text-xs">Freeship 100% chỉ với 18 ASA</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-3">
        <div>
          <p class="text-xl">Số Lượng</p>
        </div>
        <div class="flex">
        <button class="boder border-2 border-gray-200" id='hic'  onclick="tru()">
          <div class="pt-1">
            <p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.834 10.834H10.839H9.16099H4.16699V9.16699H9.16099H15.834V10.834Z"
                  fill="#787878"
                />
              </svg>
            </p>
          </div>
        </button>
  
       <div class="pl-2 h-7 w-[30px] border border-gray-300 justify-center" id="ssp"> ${ssp}</div>
      
        <button class="boder border-2 border-gray-200" id='cong'  onclick="cong()">
          <div class="pt-1" >
            <p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1_2734"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="4"
                  width="12"
                  height="12"
                >
                  <path
                    d="M15.834 10.822H10.839V15.834H9.16099V10.822H4.16699V9.17799H9.16099V4.16699H10.839V9.17799H15.834V10.822Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1_2734)">
                  <path
                    d="M15.834 10.822H10.839V15.834H9.16099V10.822H4.16699V9.17799H9.16099V4.16699H10.839V9.17799H15.834V10.822Z"
                    fill="#787878"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 0H20V20H0V0Z"
                    fill="#787878"
                  />
                </g>
              </svg>
            </p>
          </div>
        </button>
      </div>
    </div>
    <div class="py-5">
      <button onclick="muahang()"  class="px-20 py-3 bg-red-500 rounded-lg">
        <p>Chọn mua</p>
      </button>
    </div>
    </div>
    <div class="lg:block hidden">
      <div class="flex gap-4">
        <img src="../images/tki.png" alt="" />
        <div>
          <p>Tiki Trading</p>
          <img src="../images/offi.png" alt="" />
        </div>
      </div>
      <div class="flex gap-10 px-3">
        <div class="">
          <p>${book.rating_average} / 5</p>
        </div>
        <div class="ml-16">
          <p>408k+</p>
        </div>
      </div>
      <div class="flex gap-10 px-5">
        <div class="pl-2">
          <p class="text-xs">4.7tr+</p>
        </div>
        <div class="space-x-4 pl-14">
          <p class="text-xs">Theo dõi</p>
        </div>
      </div>
      <div class="flex gap-2 py-3">
        <button class="boder border-2 border-blue-500 rounded-lg">
          <div class="flex gap-2 px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p>Xem Shop</p>
          </div>
        </button>
        <button class="boder border-2 border-blue-500 rounded-lg">
          <div class="flex gap-2 px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p>Theo Dõi</p>
          </div>
        </button>
      </div>
      <div class="py-2">
        <hr class="bg-gray-400" />
      </div>
      <div class="py-3">
        <div class="flex gap-14 px-7">
          <div class="pl-1 ">
            <img src="../images/true.png" alt="" />
          </div>
          <div class="pl-2">
            <img src="../images/like.png" alt="" />
          </div>
          <div class="pl-7">
            <img src="../images/hoan.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-3 gap-3 px-2">
          <div class="">
            <p class="pl-2">Hoàn tiền</p>
            <p class="pl-6">111%</p>
            <p>nếu hàng giả</p>
          </div>
          <div>
            <p class="pl-1">Mở hộp</p>
            <p class="pl-1">kiểm tra</p>
            <p>nhận hàng</p>
          </div>
          <div>
            <p>Đổi trả trong</p>
            <p class="pl-4">30 ngày</p>
            <p class="pl-3">nếu sp lỗi</p>
          </div>
        </div>
      </div>
      <div class="py-2">
        <div
          class="boder border-2 border-gray-200 py-4 px-3 rounded-lg"
        >
          <div class="flex gap-20">
            <div>
              <p>8 nhà bán khác</p>
              <p>Giá từ 75.210 ₫</p>
            </div>
            <div class="boder border-2 border-blue-600 rounded-lg">
              <div class="py-2 px-4">
                <p>So Sánh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div class="container mx-auto">
<p class="text-xl">Sản Phẩm Tương Tự</p>
<div class="lg:grid-cols-6 gap-2 grid grid-cols-1 overflow-hidden p-6 text-center justify-center">
    ${listcategories.map(function (category){
        if(listcategories.length === 1 ){
            return ` <div class="text-[15px] text-red-500"> Không Có Sản Phẩm Tương Tự</div> `
        }
        if( book.id === category.id){
            return ""
        }
        
        return ` 
        <a class=""  href="detail.html?id=${category.id}">
        <div class=" items-center hover:shadow-lg ">
        <center>
        <img class="max-h-[120px] " src="${category.images[0].base_url}" alt="">
       
        </center>
        <p class="mt-2 text-[13px]  max-w-[300px]">${category.name}</p>
        <div class="my-2 flex gap-x-4">
        <div class="flex gap-x-3">
        <div class="flex mt-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
        fill="#FDD835" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
        fill="#FDD835" />
    </svg><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
        fill="#FDD835" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
        fill="#FDD835" />
    </svg><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
        fill="#FDD835" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
        fill="#FDD835" />
    </svg><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
        fill="#FDD835" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
        fill="#FDD835" />
    </svg><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00002 1.33331V12.6346L12.12 14.6666L11.5547 9.91731L14.6667 6.42798L10.196 5.52398L8.00002 1.33331Z"
        fill="#FDD835" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M8.00001 1.33331V12.6346L3.88001 14.6666L4.44534 9.91731L1.33334 6.42798L5.80401 5.52398L8.00001 1.33331Z"
        fill="#FDD835" />
    </svg>
    </div>
        <p class="text-yellow-500 ">${category.rating_average}</p>
        </div>
        </div>
        <div class=" flex items-end gap-x-2 ">
            <!-- Giá đã giảm -->
            <p class=" text-red-500 text-[15px] "> ${category.current_seller ? category.current_seller.price : "Đang Cập Nhật"
    }đ
            </p>
            <!-- Giá chưa giảm -->
            <p class=" text-[12px] text-gray-400">${category.original_price ? category.original_price : ""} đ</p>
            <!-- giảm  -->
            <div class=" px-1 border-red-500 text-red-500 border text-[10px]">${parseInt(((category.original_price -category.current_seller.price) * 100) / category.original_price)
    } %</div>
            
        </div>
        
    </div>
    </a>
        `
    }).join(" ")}
</div>
</div>
<div class="container mx-auto p-4">

<div class="p-4  md:w-4/5 w-full">
    <h3 class="">Thông Tin Chi Tiết</h3>
    <div class="flex">
        <div class="w-1/4 bg-gray-300">
            <p class="py-2 px-4">Công ty phát hành</p>
            <p class="py-2 px-4">Ngày xuất bản</p>
            <p class="py-2 px-4">Kích thước</p>
            <p class="py-2 px-4">Dịch Giả</p>
            <p class="py-2 px-4">Loại bìa</p>
            <p class="py-2 px-4">Số trang</p>
            <p class="py-2 px-4">Nhà xuất bản</p>
        </div>
        <div class="w-3/4">
        <p class="py-2 px-4">${
          book.specifications[0].attributes[0]
            ? book.specifications[0].attributes[0].value
            : "Đang cập nhật"
        }</p>
        <p class="py-2 px-4 bg-gray-200">${
          book.specifications[0].attributes[1]
            ? book.specifications[0].attributes[1].value
            : "Đang cập nhật"
        }</p>
        <p class="py-2 px-4 ">${
          book.specifications[0].attributes[2]
            ? book.specifications[0].attributes[2].value
            : "Đang cập nhật"
        }</p>
        <p class="py-2 px-4 bg-gray-200">${
          book.specifications[0].attributes[3]
            ? book.specifications[0].attributes[3].value
            : "Đang cập nhật"
        }</p>
        <p class="py-2 px-4 ">${
          book.specifications[0].attributes[4]
            ? book.specifications[0].attributes[4].value
            : "Đang cập nhật"
        }</p>
        <p class="py-2 px-4 bg-gray-200">${
          book.specifications[0].attributes[5]
            ? book.specifications[0].attributes[5].value
            : "Đang cập nhật"
        }</p>
        <p class="py-2 px-4 ">${
          book.specifications[0].attributes[6]
            ? book.specifications[0].attributes[6].value
            : "Đang cập nhật"
        }</p>
        </p>
    </div>
</div>
</div>
<div class="container mx-auto float-left md:w-4/5 w-full ">
<p class="text-xl">Mô Tả Sản Phẩm</p>
<p class="p-2">${book.description}</p>
</div>

`;
contentElement.innerHTML = _content;
