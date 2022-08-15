import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";

export default function About() {
  return (
    <div>
      {/* <!-- Hero content --> */}
      <div className="flex justify-center items-center">
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet="./assets/images/about-hero.png"
          />
          <img src="./assets/images/about-hero-mobile.png" alt="Squabs" />
        </picture>
      </div>

      {/* <!-- Small Intro --> */}
      <section className="mt-12 container text-white text-lg text-center">
        <div className="w-3/2">
          <p>
            Squabs is an uplifting animated series that provides an encouraging
            message that we all need to hear.
          </p>
          <p className="text-uppercase">IT IS A CALL TO BE YOUR BEST SELF</p>
        </div>
      </section>

      {/* <!-- Problems --> */}
      <section className="problems pt-24 pb-0 md:py-24">
        <div className="container text-white">
          <div className="md:flex items-center md:space-x-4">
            <div className="md:hidden">
              <img
                className="hero-background"
                src="./assets/images/about-problems.png"
                alt="Problems"
              />
            </div>
            <div className="md:w-1/2">
              <div className="mt-12 pt-12 about-problems-content">
                <div className="relative flex flex-col space-y-10">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div>
                      <div className="w-14 h-14 rounded-full flex text-text-black justify-center items-center number">
                        1
                      </div>
                    </div>
                    <div>
                      <p className="lg:text-lg xl:text-xl">
                        Youth lack encouragement. They are unsure about how to
                        move forward while staying true to themselves.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div>
                      <div className="w-14 h-14 rounded-full flex text-text-black justify-center items-center number">
                        2
                      </div>
                    </div>
                    <div>
                      <p className="lg:text-lg xl:text-xl">
                        There isn’t a consistently positive animated series,
                        telling viewers that it’s OK to be themselves.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div>
                      <div className="w-14 h-14 rounded-full flex text-text-black justify-center items-center number">
                        3
                      </div>
                    </div>
                    <div>
                      <p className="lg:text-lg xl:text-xl">
                        Quality programming lacks authenticity and fails to
                        showcase the power of genuine friendship, and positive
                        outlook on life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <img
                className="hero-background"
                src="./assets/images/about-problems.png"
                alt="Problems"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Solutions --> */}
      <section className="solutions md:py-24">
        <div className="container text-white">
          <div className="md:flex items-center md:space-x-4">
            <div className="md:w-1/3 2xl:md-1/2">
              <img
                className="hero-background"
                src="./assets/images/about-solutions.png"
                alt="Problems"
              />
            </div>
            <div className="md:w-2/3 2xl:md-1/2">
              <div className="mt-12 pt-20 md:pt-32 about-solutions-bg">
                <div className="relative flex flex-col space-y-10">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div>
                      <div className="w-14 h-14 rounded-full flex text-text-black justify-center items-center number">
                        1
                      </div>
                    </div>
                    <div>
                      <p className="lg:text-lg xl:text-xl">
                        We encourage youth, through a sharp, intelligent
                        animated series, to persue their own image of success by
                        embracing their unique bundle of artsy, brainly and wise
                        cracking selves.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div>
                      <div className="w-14 h-14 rounded-full flex text-text-black justify-center items-center number">
                        2
                      </div>
                    </div>
                    <div>
                      <p className="lg:text-lg xl:text-xl">
                        We encourage youth, through a sharp, intelligent
                        animated series,embracing their unique bundle of artsy,
                        brainly and wise to persue their own image of success by
                        cracking selves.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div>
                      <div className="w-14 h-14 rounded-full flex text-text-black justify-center items-center number">
                        3
                      </div>
                    </div>
                    <div>
                      <p className="lg:text-lg xl:text-xl">
                        We encourage youth, to persue their own image of success
                        by embracing their unique through a sharp, intelligent
                        animated seriesbundle of artsy, brainly and wise
                        cracking selves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Who we are --> */}
      <section className="py-24 md:py-44 text-white who-we-are container">
        <div className="flex items-center justify-center">
          <img src="./assets/images/who-we-are-title.png" alt="Problems" />
        </div>
        <div className="text-xl mt-8">
          <p>
            This show is about young pigeons figuring out who they are and
            staying true to themselves. The word “SQUABS” means “adolescent
            pigeons.” Therefore, the title of this show is the definition of
            what these characters are: young pigeons (and a sparrow) being the
            best versions of themselves.
          </p>
          <p className="text-brand-yellow">Let us meet them</p>
        </div>

        {/* <!-- Squabs --> */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          padination={{ clickable: false }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="squab-detail relative">
                <div className="squabs-background w-full h-[330px]"></div>
                <img
                  className="absolute bottom-[-16px]"
                  src="./assets/images/izek.png"
                  alt="Izek"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-4xl">Izek</h2>
                <div className="mt-4 text-xl">
                  <p>Carefree and his lighthearted commentry eases tension</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="squab-detail relative">
                <div className="squabs-background w-full h-[330px]"></div>
                <img
                  className="absolute bottom-[-16px]"
                  src="/assets/images/byrd.png"
                  alt="Byrd"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-4xl">Byrd</h2>
                <div className="mt-4 text-xl">
                  <p>Tough guy, provides strength and encouragement</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="squab-detail relative">
                <div className="squabs-background w-full h-[330px]"></div>
                <img
                  className="absolute bottom-[-16px]"
                  src="/assets/images/splat.png"
                  alt="Splat"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-4xl">Splat</h2>
                <div className="mt-4 text-xl">
                  <p>
                    Socially awkward, and his artsy insight is a source of comic
                    relief.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="squab-detail relative">
                <div className="squabs-background w-full h-[330px]"></div>
                <img
                  className="absolute bottom-[-16px]"
                  src="/assets/images/pistachio.png"
                  alt="Pistachio"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-4xl">Pistachio</h2>
                <div className="mt-4 text-xl">
                  <p>Carefree and his lighthearted commentry eases tension</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>

      {/* <!-- Our Audience --> */}
      <section className="py-24 md:pb-44 our-audience">
        <div className="relative container">
          <div>
            <img src="/assets/images/our-audience-title.png" alt="Audience" />
          </div>

          <div className="items-center md:flex">
            <div className="md:w-1/2">
              <div className="blue-bleeding-bg our-audience-body mt-8">
                <ul className="text-white list-disc">
                  <li className="lg:text-lg xl:text-xl">Ages 17-27</li>
                  <li className="lg:text-lg xl:text-xl">
                    Young people who dont fit in, and deal with obstacles that
                    seem too big to overcome.
                  </li>
                  <li className="lg:text-lg xl:text-xl">
                    Those who stick out,feel alone, and are overwhelmed by the
                    negative side of life.
                  </li>
                  <li className="lg:text-lg xl:text-xl">
                    People who need a break from reality, that also helps them
                    deal with reality.We provide this through oudlandish
                    characters, who deliver a positive message with a comic
                    relief.
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="w-full">
                <div className="flex items-center justify-center">
                  <img
                    src="/assets/images/squabs-group.png"
                    alt="Squabs Group"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Goal --> */}
      <section className="md:pb-44 goal text-white">
        <div className="container">
          <div className="flex items-center justify-center">
            <img src="/assets/images/goal-title.png" alt="Goals" />
          </div>
        </div>
        <div className="items-center mx-auto md:flex container">
          <div className="md:w-1/2">
            <img src="/assets/images/goals-image.png" alt="Fyle" />
          </div>
          <div className="mt-24 md:mt-0 md:w-1/2 md:flex items-center">
            <div className="lg:text-lg xl:text-xl lg:pt-12 xl:pt-24 purple-bleeding-bg goal-body">
              <div className="flex items-center space-x-2 md:space-x-4">
                <div>
                  <div className="w-14 h-14 rounded-full flex text-text-black justify-center items-center number">
                    1
                  </div>
                </div>
                <div>
                  <p>
                    Squabs is looking for a production investment to create its
                    first two seasons in the entirety.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4 mt-8">
                <div>
                  <div className="w-14 h-14 rounded-full flex text-text-black justify-center items-center number">
                    2
                  </div>
                </div>
                <div>
                  <p>
                    Secure a licensing deal with major networks in order to
                    reach an audience beyond our instagram following.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
