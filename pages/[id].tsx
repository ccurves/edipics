import { Images } from "@/data/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

type Props = {};

const Pic = (props: Props) => {
  const [pic, setPic] = useState<Images | null>();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const images = localStorage.getItem("imgs");

    const i = JSON.parse(images);

    console.log(id);

    const found = i.find((obj) => {
      return obj.id === id;
    });

    setPic(found);

    console.log(i);
  }, [id]);

  return (
    <div>
      {/* <section classNameName="bg-white dark:bg-gray-900">
        <div classNameName="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <img
            classNameName="h-auto max-w-lg mx-auto"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt="image description"
          />

          
        </div>
      </section> */}
      <Head>
        <title>EdiPIcs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Helmet>
        <script type="text/javascript" src="/scripts/editor.js" />
      </Helmet> */}

      <Script src="/scripts/editor.js" />
      <div className="bg-white dark:bg-gray-900 h-screen">
        <main className="m-auto w-full max-w-[900px] rounded-xl bg-white py-4 px-5 shadow-[0_3px_6px_#00000029_,_0_3px_6px_#0000003b] dark:bg-slate-900 dark:text-white">
          <h1 className="mb-6 text-2xl font-semibold capitalize tracking-wide md:text-3xl">
            image editor
          </h1>

          <section className="flex select-none flex-col items-center justify-center gap-4 md:flex-row">
            <div
              id="editOptionsContainer"
              className="disabled-options order-2 w-full rounded border-2 border-gray-400 p-5 dark:shadow-none md:order-1 md:max-w-xs"
            >
              <form
                className="w-full space-y-4 overflow-hidden"
                aria-disabled="true"
              >
                <h2 className="-mb-3 ml-1 text-lg capitalize">filters</h2>

                <div
                  id="filterBtns"
                  className="custom-scrollbar grid max-h-min w-full snap-x grid-cols-8 grid-rows-1 gap-x-[104px] overflow-x-auto overflow-y-hidden rounded p-1 pr-[100px] md:grid-cols-4 md:grid-rows-2 md:gap-y-2"
                >
                  <button
                    type="button"
                    value="brightness"
                    className="active-filter col-span-1 h-9 min-w-[98px] snap-start scroll-ml-1 rounded py-1.5 capitalize text-stormGrey outline outline-1 outline-stormGrey dark:font-medium dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                  >
                    brightness
                  </button>
                  <button
                    type="button"
                    value="grayscale"
                    className="col-span-1 h-9 min-w-[98px] snap-start scroll-ml-1 rounded py-1.5 capitalize text-stormGrey outline outline-1 outline-stormGrey dark:font-medium dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                  >
                    grayscale
                  </button>
                  <button
                    type="button"
                    value="blur"
                    className="col-span-1 h-9 min-w-[98px] snap-start scroll-ml-1 rounded py-1.5 capitalize text-stormGrey outline outline-1 outline-stormGrey dark:font-medium dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                  >
                    blur
                  </button>
                  <button
                    type="button"
                    value="hue-rotate"
                    className="col-span-1 h-9 min-w-[98px] snap-start scroll-ml-1 rounded py-1.5 capitalize text-stormGrey outline outline-1 outline-stormGrey dark:font-medium dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                  >
                    hue rotate
                  </button>
                  <button
                    type="button"
                    value="opacity"
                    className="col-span-1 h-9 min-w-[98px] snap-start scroll-ml-1 rounded py-1.5 capitalize text-stormGrey outline outline-1 outline-stormGrey dark:font-medium dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                  >
                    opacity
                  </button>
                  <button
                    type="button"
                    value="contrast"
                    className="col-span-1 h-9 min-w-[98px] snap-start scroll-ml-1 rounded py-1.5 capitalize text-stormGrey outline outline-1 outline-stormGrey dark:font-medium dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                  >
                    contrast
                  </button>
                  <button
                    type="button"
                    value="saturate"
                    className="col-span-1 h-9 min-w-[98px] snap-start scroll-ml-1 rounded py-1.5 capitalize text-stormGrey outline outline-1 outline-stormGrey dark:font-medium dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                  >
                    saturate
                  </button>
                  <button
                    type="button"
                    value="sepia"
                    className="col-span-1 h-9 min-w-[98px] snap-start scroll-ml-1 rounded py-1.5 capitalize text-stormGrey outline outline-1 outline-stormGrey dark:font-medium dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                  >
                    sepia
                  </button>
                </div>

                <div className="mx-auto max-w-xs">
                  <label htmlFor="filterRangeInput" className="mt-2 space-y-8">
                    <p className="relative w-full">
                      <span
                        className="absolute top-0 left-0 capitalize"
                        id="filterName"
                      >
                        brightness
                      </span>
                      <span
                        className="absolute top-0 right-0 text-sm"
                        id="filterValue"
                      >
                        100%
                      </span>
                    </p>

                    <input
                      type="range"
                      name="filterRange"
                      id="filterRangeInput"
                      value="100"
                      min="0"
                      max="200"
                      step="1"
                      className="h-1.5 w-full accent-warmBlue support:hover:accent-royalBlue"
                    />
                  </label>
                </div>

                <section className="mx-auto max-w-xs">
                  <h2 className="mb-2 text-lg capitalize">rotate & flip</h2>

                  <div
                    id="flipRotateBtns"
                    className="flex items-center justify-evenly space-x-2 px-0.5 sm:space-x-3.5"
                  >
                    <button
                      type="button"
                      title="Vertical Flip"
                      value="vertical-flip"
                      className="flex-auto rounded px-3 py-2 text-center text-stormGrey outline outline-1 outline-stormGrey dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="m-auto"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m3 7l5 5l-5 5V7m18 0l-5 5l5 5V7m-9 13v2m0-8v2m0-8v2m0-8v2"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      value="horizontal-flip"
                      title="Horizontal Flip"
                      className="flex-auto rounded px-3 py-2 text-center text-stormGrey outline outline-1 outline-stormGrey dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="m-auto"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m17 3l-5 5l-5-5h10m0 18l-5-5l-5 5h10M4 12H2m8 0H8m8 0h-2m8 0h-2"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      value="rotate-left"
                      title="Rotate Left"
                      className="flex-auto rounded px-3 py-2 text-center text-stormGrey outline outline-1 outline-stormGrey dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="m-auto"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M6.56 7.98C6.1 7.52 5.31 7.6 5 8.17c-.28.51-.5 1.03-.67 1.58c-.19.63.31 1.25.96 1.25h.01c.43 0 .82-.28.94-.7c.12-.4.28-.79.48-1.17c.22-.37.15-.84-.16-1.15zM5.31 13h-.02c-.65 0-1.15.62-.96 1.25c.16.54.38 1.07.66 1.58c.31.57 1.11.66 1.57.2c.3-.31.38-.77.17-1.15c-.2-.37-.36-.76-.48-1.16a.97.97 0 0 0-.94-.72zm2.85 6.02c.51.28 1.04.5 1.59.66c.62.18 1.24-.32 1.24-.96v-.03c0-.43-.28-.82-.7-.94c-.4-.12-.78-.28-1.15-.48a.97.97 0 0 0-1.16.17l-.03.03c-.45.45-.36 1.24.21 1.55zM13 4.07v-.66c0-.89-1.08-1.34-1.71-.71L9.17 4.83c-.4.4-.4 1.04 0 1.43l2.13 2.08c.63.62 1.7.17 1.7-.72V6.09c2.84.48 5 2.94 5 5.91c0 2.73-1.82 5.02-4.32 5.75a.97.97 0 0 0-.68.94v.02c0 .65.61 1.14 1.23.96A7.976 7.976 0 0 0 20 12c0-4.08-3.05-7.44-7-7.93z"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      title="Rotate Right"
                      value="rotate-right"
                      className="flex-auto rounded px-3 py-2 text-center text-stormGrey outline outline-1 outline-stormGrey dark:text-slate-400 dark:outline-slate-400 support:hover:outline-2"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="m-auto"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M14.83 4.83L12.7 2.7c-.62-.62-1.7-.18-1.7.71v.66C7.06 4.56 4 7.92 4 12c0 3.64 2.43 6.71 5.77 7.68c.62.18 1.23-.32 1.23-.96v-.03a.97.97 0 0 0-.68-.94A5.978 5.978 0 0 1 6 12c0-2.97 2.16-5.43 5-5.91v1.53c0 .89 1.07 1.33 1.7.71l2.13-2.08a.99.99 0 0 0 0-1.42zm4.84 4.93c-.16-.55-.38-1.08-.66-1.59c-.31-.57-1.1-.66-1.56-.2l-.01.01c-.31.31-.38.78-.17 1.16c.2.37.36.76.48 1.16c.12.42.51.7.94.7h.02c.65 0 1.15-.62.96-1.24zM13 18.68v.02c0 .65.62 1.14 1.24.96c.55-.16 1.08-.38 1.59-.66c.57-.31.66-1.1.2-1.56l-.02-.02a.972.972 0 0 0-1.16-.17c-.37.21-.76.37-1.16.49c-.41.12-.69.51-.69.94zm4.44-2.65c.46.46 1.25.37 1.56-.2c.28-.51.5-1.04.67-1.59c.18-.62-.31-1.24-.96-1.24h-.02c-.44 0-.82.28-.94.7c-.12.4-.28.79-.48 1.17c-.21.38-.13.86.17 1.16z"
                        />
                      </svg>
                    </button>
                  </div>
                </section>

                <div className="mx-auto max-w-xs">
                  <button
                    type="reset"
                    id="resetFiltersBtn"
                    className="w-full rounded border border-stormGrey py-2 capitalize text-stormGrey dark:border-slate-400 dark:font-medium dark:text-slate-400 support:hover:bg-stormGrey support:hover:text-white"
                  >
                    reset filters
                  </button>
                </div>
              </form>
            </div>

            <div className="empty-preview order-1 flex h-52 w-full items-center justify-center overflow-hidden rounded md:order-2 md:h-[378px]">
              <img
                id="imagePreview"
                className="aspect-auto h-full w-full rounded object-contain"
                height="375"
                width="300"
                src={pic?.links.download}
              />
            </div>
          </section>

          <div className="m-auto flex w-full max-w-[270px] items-center justify-between gap-x-4 md:max-w-none md:justify-end">
            <button
              type="button"
              id="downloadImageBtn"
              aria-disabled="true"
              className="mt-4 h-10 w-32 rounded bg-warmBlue text-center capitalize tracking-wide text-white enabled:active:scale-95 disabled:opacity-50 dark:disabled:opacity-40 enabled:support:hover:bg-royalBlue"
            >
              save image
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pic;

// export const getStaticProps: GetStaticProps = async (context) => {
//   const id = context.params?.id as string;
//   return {};
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };
