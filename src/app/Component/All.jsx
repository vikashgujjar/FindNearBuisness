"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  FaUser,
  FaConciergeBell,
  FaImages,
  FaGift,
  FaGlobe,
  FaStar,
  FaEnvelope,
  FaPhoneAlt,
  FaRegCommentDots,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaCircleCheck, FaLocationDot, FaWhatsapp as FaWhatsappFa6 } from "react-icons/fa6";
import { IoIosThumbsUp } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import { Reveal, Stagger, StaggerItem } from "@/app/ui/motion";
import { AdSlot } from "@/app/ui/AdSlot";
import { Avatar } from "@/app/ui/Avatar";
import { useAuth } from "@/app/context/AuthContext";
import {
  useQueryParam,
  useListingIdFromPath,
  useApi,
  listingHref,
  apiFetch,
  clearApiCache,
  formatDate,
} from "@/app/lib/api";
import { MapGrid, Glow } from "@/app/ui/decor";
import AllRightSide from "@/app/Component/AllRightSide";
let y = [
  {
    id: "ld-abo",
    label: "About",
    icon: <FaUser />,
  },
  {
    id: "ld-ser",
    label: "Services",
    icon: <FaConciergeBell />,
  },
  {
    id: "ld-gal",
    label: "Gallery",
    icon: <FaImages />,
  },
  {
    id: "ld-off",
    label: "Offers",
    icon: <FaGift />,
  },
  {
    id: "ld-360",
    label: "360 View",
    icon: <FaGlobe />,
  },
  {
    id: "ld-rev",
    label: "Write Review",
    icon: <FaStar />,
  },
];
let N = {
  id: null,
  name: "Rolexo Villas in California",
  logo: "/img/dashboard/all1.webp",
  cover_image: "/img/dashboard/all1.webp",
  rating: 5,
  reviews_count: 526,
  likes_count: 1,
  is_verified: true,
  address: "28800 Orchard Lake Road, Suite 180, Farmington Hills, U.S.A.",
  email: "thedirectoryfinder@gmail.com",
  phone: "7904462944",
  whatsapp: "7904462944",
  description:
    "Rolexo Villas in California is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum....",
  services: [1, 2, 3, 4].map((e) => ({
    name: "Villas Plots",
    image: `/img/dashboard/offered${e}.webp`,
  })),
  service_areas: [
    "Sablon",
    "Saco",
    "Santa Cruz Garden",
    "Napa County",
    "Los Angeles County",
    "Franco County",
    "Monterey County",
  ],
  gallery: ["/img/photoGallery/gallery3.webp", "/img/photoGallery/gallery1.webp", "/img/photoGallery/gallery2.webp"],
  offers: [
    {
      id: 1,
      title: "Villa Offer 10%",
      description:
        "Special booking March offer. It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 5e3,
      image: "/img/dashboard/all1.webp",
    },
  ],
  view_360_embed:
    "https://www.google.com/maps/embed?pb=!4v1615094507523!6m8!1m7!1sCAoSLEFGMVFpcFAxZ0hoalZZU25Wb2xDbVVROWdZNlYxWnc2UGU1YjVDckVjeEYz!2m2!1d37.779626!2d-122.5134699!3f256.26044!4f13.954989999999995!5f0.7820865974627469",
  reviews: [
    {
      id: 1,
      name: "Rn53 Themes",
      created_at: "2021-03-07",
      rating: 5,
      avatar: "/img/dashboard/alll4.webp",
      message:
        "Rolexo Villas is well-known to all as a premier builder of villas and apartments. Even though they have various departments they stay united in giving the customers the best service. I really had a good service right from on time delivery, quality of work, perfection in work completion. The relationship does not end in just in hand over but they stand strong in all tuff times for the commitment given. After 3+ years of handover they addressed the compound wall cracks which expanded and in a week condition. They still respond to any queries / faults on time and track it to closure.",
    },
  ],
};
let k = ["Core real estates", "Museo Villas and Plots", "ccc"].map((e) => ({
  name: e,
  slug: null,
  cover_image: "/img/dashboard/allBottom.webp",
}));
let S = [
  {
    label: "Excellent",
    stars: 5,
    color: "bg-emerald-500",
  },
  {
    label: "Good",
    stars: 4,
    color: "bg-emerald-400",
  },
  {
    label: "Satisfactory",
    stars: 3,
    color: "bg-pin-400",
  },
  {
    label: "Below Average",
    stars: 2,
    color: "bg-orange-400",
  },
  {
    label: "Poor",
    stars: 1,
    color: "bg-rose-500",
  },
];
function C_(props) {
  let { id, title, highlight, children } = props;
  return (
    <Reveal as="section" id={id} className="panel scroll-mt-40 p-5 sm:p-7">
      <h2 className="mb-5 text-xl font-bold text-night-900 sm:text-2xl">
        <span className="text-gradient">{highlight}</span> {title}
      </h2>
      {children}
    </Reveal>
  );
}
function All() {
  var e, t, a, i, f, v, C, P, I;
  let A = useRouter(),
    { user, isLoggedIn } = useAuth(),
    R = useQueryParam("slug"),
    O = useListingIdFromPath(),
    { data } = useApi("/listings?per_page=1", {
      auth: false,
      skip: null !== R || null !== O,
    }),
    F = R || data?.data?.[0]?.slug,
    {
      data: M,
      error,
      reload,
    } = useApi(O ? `/listings/${O}?by_id=1` : F ? `/listings/${encodeURIComponent(F)}` : null, {
      cacheable: false,
    }),
    D = error?.status === 404,
    U = M?.data || (error && !D ? N : null),
    G = M?.related || (U === N ? k : []),
    [z, B] = useState(3),
    [V, H] = useState(y[0].id),
    [Z, $] = useState(null),
    [Y, Q] = useState({
      reviewCity: "",
      reviewMessage: "",
    }),
    [X, J] = useState(null);
  useEffect(() => {
    var e;
    U &&
      $({
        liked: !!U.is_liked,
        count: U.likes_count ?? 0,
      });
  }, [U]),
    useEffect(() => {
      if (!M?.data || (!R && !O)) return;
      let e = listingHref(M.data);
      window.location.pathname !== e && window.history.replaceState(window.history.state, "", e),
        (document.title = [M.data.name, M.data.city].filter(Boolean).join(", "));
    }, [M, R, O]),
    useEffect(() => {
      if (!U) return;
      let e = new IntersectionObserver((e) => e.forEach((e) => e.isIntersecting && H(e.target.id)), {
        rootMargin: "-40% 0px -55% 0px",
      });
      return (
        y.forEach((t) => {
          let a = document.getElementById(t.id);
          a && e.observe(a);
        }),
        () => e.disconnect()
      );
    }, [U]);
  let K = (e) =>
      Q({
        ...Y,
        [e.target.name]: e.target.value,
      }),
    ee = async (e) => {
      if ((e.preventDefault(), !isLoggedIn)) return A.push("/user-login/sign");
      if (U?.id) {
        J({
          busy: true,
        });
        try {
          let e = await apiFetch(`/listings/${U.id}/reviews`, {
            method: "POST",
            body: {
              rating: z,
              message: Y.reviewMessage,
              city: Y.reviewCity,
            },
          });
          J({
            ok: e.message,
          }),
            Q({
              reviewCity: "",
              reviewMessage: "",
            }),
            clearApiCache("/account"),
            reload();
        } catch (e) {
          J({
            error: e.message,
          });
        }
      }
    },
    et = async () => {
      if (!isLoggedIn) return A.push("/user-login/sign");
      if (U?.id)
        try {
          let e = await apiFetch(`/listings/${U.id}/like`, {
            method: "POST",
          });
          $({
            liked: e.liked,
            count: e.likes_count,
          }),
            clearApiCache("/account");
        } catch (e) {}
    };
  if (D)
    return (
      <div className="bg-mist py-24">
        <div className="container-x panel mx-auto max-w-lg p-10 text-center">
          <h1 className="text-2xl font-bold text-night-900">Listing not found</h1>
          <p className="mt-2 text-sm text-slate-500">This business may have been removed or is waiting for approval.</p>
          <Link href="/service" className="btn-primary mt-6">
            Browse categories
          </Link>
        </div>
      </div>
    );
  if (!U)
    return (
      <div className="bg-mist" aria-busy="true">
        <div className="h-72 animate-pulse bg-night-950 sm:h-80" />
        <div className="container-x grid gap-6 py-8 lg:grid-cols-[1fr_360px] lg:py-12">
          <div className="panel h-96 animate-pulse bg-white" />
          <div className="panel h-96 animate-pulse bg-white" />
        </div>
      </div>
    );
  let ea = U.reviews || [],
    es = Number(U.rating || 0),
    el = ea.length,
    ei = U.description?.startsWith(U.name);
  return (
    <div className="bg-mist">
      <section className="relative overflow-hidden bg-night-950 text-white">
        <img
          loading="lazy"
          decoding="async"
          src={U.cover_image || U.logo}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/80 to-night-950/40" />
        <MapGrid opacity={0.4} />
        <Glow className="-right-20 -top-20 h-80 w-80" color="bg-magenta-500/30" />
        <Stagger
          onLoad
          gap={0.08}
          className="container-x relative flex flex-col gap-6 py-10 sm:py-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <StaggerItem className="flex flex-col gap-5 sm:flex-row sm:items-end">
            <img
              loading="lazy"
              decoding="async"
              src={U.logo || U.cover_image}
              alt={U.name}
              className="h-24 w-24 shrink-0 rounded-3xl object-cover ring-4 ring-white/20 sm:h-32 sm:w-32"
            />
            <div>
              <span className="chip bg-emerald-500 text-white">Open now</span>
              <h1 className="mt-2 flex flex-wrap items-center gap-2 text-2xl font-extrabold sm:text-4xl">
                {U.name} {U.is_verified && <FaCircleCheck className="text-xl text-cyan-300" title="Verified" />}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                <span className="chip bg-pin-500 text-night-900">{es.toFixed(1)}</span>
                <span className="flex gap-0.5 text-pin-400">
                  {[undefined, undefined, undefined, undefined, undefined].map((e, t) => (
                    <FaStar key={t} className={t < Math.round(es) ? "" : "text-white/25"} />
                  ))}
                </span>
                <span className="text-slate-300">
                  {U.reviews_count ?? el}
                  {" Reviews"}
                </span>
              </div>
              {U.address && (
                <p className="mt-3 flex gap-2 text-sm text-slate-300">
                  <FaLocationDot className="mt-0.5 shrink-0 text-magenta-400" /> {U.address}
                </p>
              )}
              {U.email && (
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                  <FaEnvelope className="text-cyan-300" /> {U.email}
                </p>
              )}
            </div>
          </StaggerItem>
          <StaggerItem className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <a href={`tel:${U.phone}`} className="btn-primary">
              <FaPhoneAlt />
              {" Call Now"}
            </a>
            <a
              href={`https://wa.me/${U.whatsapp || U.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark bg-emerald-500 hover:bg-emerald-600"
            >
              <FaWhatsappFa6 />
              {" WhatsApp"}
            </a>
            <button
              type="button"
              onClick={et}
              aria-pressed={!!Z?.liked}
              className={`btn-dark ${Z?.liked ? "bg-rose-500 hover:bg-rose-600" : "bg-white/10 hover:bg-white/20"}`}
            >
              <IoIosThumbsUp /> {Z?.count ?? 0} {Z?.count === 1 ? "Like" : "Likes"}
            </button>
            <a href="#quote" className="btn-dark bg-white/10 hover:bg-white/20">
              <FaRegCommentDots />
              {" Get Quote"}
            </a>
          </StaggerItem>
        </Stagger>
      </section>
      <nav
        aria-label="Listing sections"
        className="sticky top-16 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl lg:top-[76px]"
      >
        <ul className="container-x no-scrollbar flex gap-1 overflow-x-auto py-2">
          {y.map((e) => (
            <li key={e.id} className="shrink-0">
              <a
                href={`#${e.id}`}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${V === e.id ? "bg-night-900 text-white" : "text-slate-500 hover:bg-mist hover:text-night-900"}`}
              >
                <span className="text-xs">{e.icon}</span>
                {e.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container-x grid gap-6 py-8 lg:grid-cols-[1fr_360px] lg:py-12">
        <div className="min-w-0 space-y-6">
          <C_ id="ld-abo" highlight="About" title={U.name}>
            <div className="mb-4 flex gap-2">
              {[FaFacebook, FaTwitter, FaWhatsappFa6, FaLinkedin].map((Ce, t) => (
                <span key={t} className="grid h-9 w-9 place-items-center rounded-full bg-mist text-brand-600">
                  <Ce />
                </span>
              ))}
            </div>
            <p className="whitespace-pre-line leading-relaxed text-slate-600">
              {ei ? (
                <>
                  <b className="text-night-900">{U.name}</b>
                  {U.description.slice(U.name.length)}
                </>
              ) : (
                U.description || "This business hasn't added a description yet."
              )}
            </p>
          </C_>
          <C_ id="ld-ser" highlight="Service" title="Offered">
            {U.services?.length ? (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {U.services.map((e, t) => (
                  <div key={t} className="group relative overflow-hidden rounded-2xl bg-night-900">
                    {e.image && (
                      <img
                        loading="lazy"
                        decoding="async"
                        src={e.image}
                        alt={e.name}
                        className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 to-transparent" />
                    <h3 className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-white">{e.name}</h3>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">No services listed yet.</p>
            )}
            {U.service_areas?.length > 0 && (
              <>
                <h3 className="mb-3 mt-7 font-bold text-night-900">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {U.service_areas.map((e) => (
                    <span key={e} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600">
                      {e}
                    </span>
                  ))}
                </div>
              </>
            )}
          </C_>
          <C_ id="ld-gal" highlight="Photo" title="Gallery">
            {U.gallery?.length ? (
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                loop={U.gallery.length > 1}
                modules={[Autoplay, Pagination]}
                className="deals-swiper overflow-hidden rounded-2xl !pb-8"
              >
                {U.gallery.map((e, t) => (
                  <SwiperSlide key={t}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={e}
                      alt={`Gallery image ${t + 1}`}
                      className="aspect-[16/9] w-full rounded-2xl object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-sm text-slate-500">No photos yet.</p>
            )}
          </C_>
          <C_ id="ld-off" highlight="Special" title="Offers">
            {U.offers?.length ? (
              <div className="space-y-4">
                {U.offers.map((e) => (
                  <div key={e.id} className="flex flex-col gap-5 rounded-2xl bg-mist p-4 sm:flex-row">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={e.image || U.logo}
                      alt=""
                      className="aspect-video w-full rounded-xl object-cover sm:w-56"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-night-900">{e.title}</h3>
                      {e.description && <p className="mt-1 text-sm text-slate-500">{e.description}</p>}
                      {e.code && (
                        <span className="chip mt-2 self-start bg-brand-50 text-brand-700">
                          {"Code: "}
                          {e.code}
                        </span>
                      )}
                      {null != e.price && (
                        <span className="mt-3 font-display text-2xl font-extrabold text-gradient">
                          ${Number(e.price).toLocaleString("en-US")}
                        </span>
                      )}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {e.link ? (
                          <a href={e.link} target="_blank" rel="noopener noreferrer" className="btn-dark btn-sm">
                            View More
                          </a>
                        ) : (
                          <Link href="/Coupon-deals" className="btn-dark btn-sm">
                            View More
                          </Link>
                        )}
                        <a href="#quote" className="btn-primary btn-sm">
                          Send Enquiry
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">No offers right now. Send an enquiry to ask about current deals.</p>
            )}
          </C_>
          <C_ id="ld-360" highlight="360" title="Degree View">
            {U.view_360_embed || U.video_embed ? (
              <iframe
                title="360-degree view"
                src={U.view_360_embed || U.video_embed}
                className="h-72 w-full rounded-2xl border-0 sm:h-96"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <p className="text-sm text-slate-500">No 360 view available for this business.</p>
            )}
          </C_>
          <C_ id="ld-rev" highlight="Write Your" title="Review">
            <p className="text-sm text-slate-500">
              Writing great reviews may help others discover the places that are just apt for them. Here are a few tips
              to write a good review:
            </p>
            <div className="my-5 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((e) => (
                <button
                  key={e}
                  type="button"
                  onClick={() => B(e)}
                  aria-label={`${e} star`}
                  className="p-0.5 text-2xl transition hover:scale-125"
                >
                  <FaStar className={e <= z ? "text-pin-500" : "text-slate-300"} />
                </button>
              ))}
              <span className="ml-2 text-sm font-semibold text-slate-500">
                {z}
                {" Star"}
              </span>
            </div>
            <form onSubmit={ee} className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="reviewName"
                value={user?.name || ""}
                readOnly
                className="field"
                placeholder="Name"
              />
              <input
                type="text"
                name="reviewMobile"
                value={user?.phone || ""}
                readOnly
                className="field"
                placeholder="Mobile Number"
              />
              <input
                type="email"
                name="reviewEmail"
                value={user?.email || ""}
                readOnly
                className="field"
                placeholder="Email"
              />
              <input
                type="text"
                name="reviewCity"
                value={Y.reviewCity}
                onChange={K}
                className="field"
                placeholder="City"
              />
              <textarea
                name="reviewMessage"
                value={Y.reviewMessage}
                onChange={K}
                required
                className="field sm:col-span-2"
                placeholder="Write your review"
                rows="4"
              />
              {X?.ok && (
                <p className="text-sm font-semibold text-emerald-600 sm:col-span-2" role="status">
                  {X.ok}
                </p>
              )}
              {X?.error && (
                <p className="text-sm font-semibold text-rose-600 sm:col-span-2" role="alert">
                  {X.error}
                </p>
              )}
              <button
                type="submit"
                disabled={X?.busy}
                className="btn-primary sm:col-span-2 sm:justify-self-start disabled:opacity-60"
              >
                {isLoggedIn ? (X?.busy ? "Submitting…" : "Submit Review") : "Log in to review"}
              </button>
            </form>
          </C_>
          <Reveal className="panel p-5 sm:p-7">
            <h2 className="mb-5 text-xl font-bold text-night-900 sm:text-2xl">
              <span className="text-gradient">User</span>
              {" Reviews"}
            </h2>
            <div className="grid gap-6 md:grid-cols-[200px_1fr]">
              <div className="rounded-2xl bg-night-900 p-5 text-center text-white">
                <p className="font-display text-5xl font-extrabold">{es.toFixed(1)}</p>
                <div className="mt-2 flex justify-center gap-0.5 text-pin-400">
                  {[undefined, undefined, undefined, undefined, undefined].map((e, t) => (
                    <FaStar key={t} className={t < Math.round(es) ? "" : "text-white/25"} />
                  ))}
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  {"based on "}
                  {el}
                  {" reviews"}
                </p>
              </div>
              <ul className="space-y-2.5">
                {S.map((e) => {
                  let t = ea.filter((t) => Math.round(t.rating) === e.stars).length,
                    a = el ? `${(t / el) * 100}%` : "0%";
                  return (
                    <li key={e.label} className="grid grid-cols-[110px_1fr] items-center gap-3 text-sm text-slate-600">
                      <span>{e.label}</span>
                      <span className="h-2.5 overflow-hidden rounded-full bg-mist">
                        <span
                          className={`block h-full rounded-full ${e.color}`}
                          style={{
                            width: a,
                          }}
                        />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className="mt-6 space-y-4">
              {ea.length ? (
                ea.map((e) => (
                  <li key={e.id} className="flex gap-4 rounded-2xl bg-mist p-4">
                    <Avatar src={e.avatar} name={e.name} className="h-12 w-12 shrink-0 rounded-full object-cover" />
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3">
                        <h3 className="font-bold text-night-900">{e.name}</h3>
                        <span className="flex gap-0.5 text-xs text-pin-500">
                          {[...Array(e.rating)].map((e, t) => (
                            <FaStar key={t} />
                          ))}
                        </span>
                        <span className="text-xs text-slate-400">{formatDate(e.created_at)}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.message}</p>
                    </div>
                  </li>
                ))
              ) : (
                <li className="rounded-2xl bg-mist p-4 text-sm text-slate-500">
                  No reviews yet. Be the first to review this business.
                </li>
              )}
            </ul>
          </Reveal>
          {G.length > 0 && (
            <Reveal className="panel p-5 sm:p-7">
              <h2 className="mb-5 text-xl font-bold text-night-900 sm:text-2xl">Related listings</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {G.map((e) => (
                  <Link
                    key={e.name}
                    href={e.slug ? listingHref(e) : "/all"}
                    className="group overflow-hidden rounded-2xl bg-mist"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={e.cover_image || e.logo || "/img/dashboard/allBottom.webp"}
                      alt={e.name}
                      className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <p className="p-3 font-semibold text-night-900">{e.name}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
          <AdSlot slot="detail_bottom" />
        </div>
        <aside className="min-w-0">
          <AllRightSide move="quote" listing={U} />
        </aside>
      </div>
    </div>
  );
}
export default All;
