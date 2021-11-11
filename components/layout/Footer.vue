<template>
  <div class="footer border-t-2 border-gray-400">
    <div class="container mx-auto">
      <div class="flex w-full mt-5">
        <div class="w-4/5">
          <div class="block text-3xl">
            <span class="font-bold text-black">Daniel</span>
            <span class="font-bold text-red-500">Drew</span>
          </div>
          <div class="flex divide-x-2 divide-x-reverse divide-gray-300 mt-5">
            <div class="pl-5">
              <p>تلفن پشتیبانی: 123456789</p>
            </div>
            <div class="px-5">
              <p>تلفن پشتیبانی: 123456789</p>
            </div>
            <div class="px-5">
              <p>۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</p>
            </div>
          </div>
        </div>
        <div class="w-1/5 pr-36">
          <button @click.prevent="up"
                  class="
              lg:flex hidden
              bg-gray-100
              text-gray-400
              rounded-lg
              px-4
              py-3
              border-2 border-gray-500
              cursor-pointer
            "
          >
            <span> بازشگت به بالا </span>
            <span class="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-5 mx-24 my-10">
        <div class="col-span-1 cursor-pointer px-5">
          <div class="block text-center my-3 pr-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path
                d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z"
              />
            </svg>
          </div>
          <div>
            <p>امکان پرداخت در محل</p>
          </div>
        </div>
        <div class="col-span-1 cursor-pointer px-5">
          <div class="block text-center my-3 pr-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path
                d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z"
              />
            </svg>
          </div>
          <div>
            <p>امکان پرداخت در محل</p>
          </div>
        </div>
        <div class="col-span-1 cursor-pointer px-5">
          <div class="block text-center my-3 pr-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path
                d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z"
              />
            </svg>
          </div>
          <div>
            <p>امکان پرداخت در محل</p>
          </div>
        </div>
        <div class="col-span-1 cursor-pointer px-5">
          <div class="block text-center my-3 pr-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path
                d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z"
              />
            </svg>
          </div>
          <div>
            <p>امکان پرداخت در محل</p>
          </div>
        </div>
        <div class="col-span-1 cursor-pointer px-5">
          <div class="block text-center my-3 pr-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path
                d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z"
              />
            </svg>
          </div>
          <div>
            <p>امکان پرداخت در محل</p>
          </div>
        </div>
      </div>
      <div class="border-t-2 border-gray-400">
        <div class="grid grid-cols-4 my-10">
          <div class="col-span-1">
            <nav>
              <nuxt-link class="text-2xl text-black" to="/">با دنیل</nuxt-link>
              <ul>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
              </ul>
            </nav>
          </div>
          <div class="col-span-1">
            <nav>
              <nuxt-link class="text-2xl text-black" to="/">با دنیل</nuxt-link>
              <ul>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
              </ul>
            </nav>
          </div>
          <div class="col-span-1">
            <nav>
              <nuxt-link class="text-2xl text-black" to="/">با دنیل</nuxt-link>
              <ul>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
              </ul>
            </nav>
          </div>
          <div class="col-span-1">
            <nav>
              <nuxt-link class="text-2xl text-black" to="/">با دنیل</nuxt-link>
              <ul>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
                <li class="text-gray-400 text-sm py-3">فرصت های شغلی</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    up() {
      window.scrollTo(0, 0)
    }
  },
}
</script>
