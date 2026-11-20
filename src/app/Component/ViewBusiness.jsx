"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFileInvoice,
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { MapGrid, Glow } from "@/app/ui/decor";
import { Stagger, StaggerItem, Reveal } from "@/app/ui/motion";
import { useAuth } from "@/app/context/AuthContext";
import { Avatar } from "@/app/ui/Avatar";
import {
  useQueryParam,
  useApi,
  listingHref,
  apiFetch,
  productHref,
  formatPrice,
  eventHref,
  blogHref,
} from "@/app/lib/api";
let g = [
  {
    title: "Classified Templates",
    text: "Kick start your online presence with Bizbook Classified Templates. Template includes Classified ads, listing, products, events, blogs & community. Try it today!",
  },
  {
    title: "HTML Templates",
    text: "We design most beautiful website templates with the latest trend and user-friendly websites.",
  },
  {
    title: "Custom Websites",
    text: "We are the leading custom website developers and custom HTML websites are usually the most important thing about an online presence.",
  },
  {
    title: "Template Customization",
    text: "We offer professional website template customization for the templates we built and released here at styleshout. Choose a template and submit to us the customization requirements and we will work on the design until the desired result is achieved.",
  },
  {
    title: "Available for freelance",
    text: 'Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.',
  },
  {
    title: "Custom Directory Template",
    text: 'We have to directory templates "The Directory" and "Findbee Directory Template", If you are interested in our directory template and need any template related customization or addition work we will help you to integrate this.',
  },
  {
    title: "Website re-design",
    text: "Are you looking for a website redesign? Our expert web designers can build attractive and wonderful websites for sustainable brands.",
  },
];
let p = [
  {
    href: "https://www.facebook.com/53themes",
    Icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://twitter.com/53themes",
    Icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "https://wa.me/98769876987",
    Icon: FaWhatsapp,
    label: "WhatsApp",
  },
  {
    href: "https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg",
    Icon: FaYoutube,
    label: "YouTube",
  },
];
function Cx(e) {
  let { error } = e;
  return error?.status === 404 ? (
    <div className="bg-mist py-24">
      <div className="container-x panel mx-auto max-w-lg p-10 text-center">
        <h1 className="text-2xl font-bold text-night-900">Business not found</h1>
        <p className="mt-2 text-sm text-slate-500">This profile may have been removed.</p>
        <Link href="/community" className="btn-primary mt-6">
          Browse community
        </Link>
      </div>
    </div>
  ) : (
    <div className="bg-mist" aria-busy="true">
      <div className="h-72 animate-pulse bg-night-950" />
      <div className="container-x grid gap-6 py-10 lg:grid-cols-[1fr_380px]">
        <div className="panel h-96 animate-pulse bg-white" />
        <div className="panel h-96 animate-pulse bg-white" />
      </div>
    </div>
  );
}
let f = (e) => (/^https?:\/\//.test(e) ? e : `https://${e}`);
function ViewBusiness() {
  var e, t, a, l;
  let { user } = useAuth(),
    { data, error } = (function () {
      var e, t;
      let a = useQueryParam("id"),
        { data: n } = useApi("/community?per_page=1", {
          auth: false,
          skip: null !== a,
        }),
        s = a || n?.data?.[0]?.id;
      return useApi(s ? `/vendors/${encodeURIComponent(s)}` : null, {
        cacheable: false,
      });
    })(),
    [y, j] = useState({
      enquiry_name: "",
      enquiry_email: "",
      enquiry_mobile: "",
      enquiry_message: "",
    }),
    [N, S] = useState(null),
    _ = (e) =>
      j({
        ...y,
        [e.target.name]: e.target.value,
      });
  useEffect(() => {
    user &&
      j((e) => ({
        ...e,
        enquiry_name: e.enquiry_name || user.name || "",
        enquiry_email: e.enquiry_email || user.email || "",
        enquiry_mobile: e.enquiry_mobile || user.phone || "",
      }));
  }, [user]);
  let k = !data && error && 404 !== error.status;
  if (!data && !k) return <Cx error={error} />;
  let T = data?.data,
    C = data?.listings || [],
    P = data?.products?.[0],
    q = data?.events?.[0],
    I = data?.blogs?.[0],
    E = T ? T.company_name || T.name : "Rn53 Themes Net",
    O = T ? C[0]?.address || T.city : "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A",
    B = T ? T.phone : "8765768675",
    A = T ? T.email : "info@futureittouch.com",
    R = T ? T.whatsapp || T.phone : "98769876987",
    F = T
      ? [
          {
            href: T.facebook,
            Icon: FaFacebookF,
            label: "Facebook",
          },
          {
            href: T.twitter,
            Icon: FaTwitter,
            label: "Twitter",
          },
          {
            href: T.whatsapp && `https://wa.me/${T.whatsapp}`,
            Icon: FaWhatsapp,
            label: "WhatsApp",
          },
          {
            href: T.youtube,
            Icon: FaYoutube,
            label: "YouTube",
          },
        ].filter((e) => e.href)
      : p,
    D = T
      ? C.map((e) => {
          var t;
          return {
            title: e.name,
            text: [e.category?.name, e.address].filter(Boolean).join(" \xb7 "),
            href: listingHref(e),
          };
        })
      : g,
    W = async (e) => {
      if ((e.preventDefault(), !C[0]))
        return S({
          error: "This business isn't taking enquiries yet.",
        });
      S({
        busy: true,
      });
      try {
        let e = await apiFetch(`/listings/${C[0].id}/enquiries`, {
          method: "POST",
          body: {
            name: y.enquiry_name,
            email: y.enquiry_email,
            phone: y.enquiry_mobile,
            message: y.enquiry_message,
          },
        });
        S({
          ok: e.message,
        }),
          j((e) => ({
            ...e,
            enquiry_message: "",
          }));
      } catch (e) {
        S({
          error: e.message,
        });
      }
    };
  return (
    <div className="bg-mist">
      <section className="relative overflow-hidden bg-night-950 text-white">
        <img
          loading="lazy"
          decoding="async"
          src={T?.cover_image || "/img/viewBusiness/business.webp"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/75 to-night-950/30" />
        <MapGrid opacity={0.35} />
        <Glow className="-right-20 top-0 h-80 w-80" color="bg-magenta-500/30" />
        <Stagger
          onLoad
          className="container-x relative flex flex-col gap-6 pb-10 pt-16 sm:pt-24 lg:flex-row lg:items-end"
        >
          <StaggerItem>
            <Avatar
              src={T ? T.avatar : "/img/viewBusiness/rn.webp"}
              name={E}
              alt="Business logo"
              textClass="text-4xl"
              className={`h-24 w-24 rounded-3xl sm:h-32 sm:w-32 ${!T || T.avatar ? "bg-white object-contain p-2" : ""}`}
            />
          </StaggerItem>
          <StaggerItem className="min-w-0 flex-1">
            <h1 className="flex flex-wrap items-center gap-2 text-3xl font-extrabold sm:text-4xl">
              {E} {(!T || T.is_verified) && <FaCircleCheck className="text-xl text-cyan-300" />}
            </h1>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {O && (
                <li className="flex gap-2">
                  <FaMapMarkerAlt className="mt-0.5 shrink-0 text-magenta-400" />
                  {O}
                </li>
              )}
              <li className="flex flex-wrap gap-x-5 gap-y-2">
                {B && (
                  <a href={`tel:${B}`} className="flex items-center gap-2 hover:text-white">
                    <FaPhone className="text-cyan-300" /> {B}
                  </a>
                )}
                {A && (
                  <a href={`mailto:${A}`} className="flex items-center gap-2 hover:text-white">
                    <FaEnvelope className="text-brand-400" /> {A}
                  </a>
                )}
                {(!T || T.website) && (
                  <a
                    href={f(T ? T.website : "www.rn53themes.net")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <FaGlobe className="text-pin-400" /> {T ? T.website : "www.rn53themes.net"}
                  </a>
                )}
                {(!T || T.tax_number) && (
                  <span className="flex items-center gap-2">
                    <FaFileInvoice className="text-slate-400" />
                    {" Tax no: "}
                    {T ? T.tax_number : "TX6543 HYG76"}
                  </span>
                )}
              </li>
            </ul>
            <ul className="mt-4 flex gap-2">
              {F.map((e) => {
                let { href, Icon, label } = e;
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </StaggerItem>
          <StaggerItem className="grid grid-cols-3 gap-2 sm:flex">
            <a href="#home_enquiry_form" className="btn-primary">
              Get Quote
            </a>
            <a href={`tel:${B}`} className="btn-dark bg-white/10 hover:bg-white/20">
              Call Now
            </a>
            <a
              href={`https://wa.me/${R}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark bg-emerald-500 hover:bg-emerald-600"
            >
              WhatsApp
            </a>
          </StaggerItem>
        </Stagger>
      </section>
      <div className="container-x grid gap-6 py-10 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0 space-y-6">
          <Reveal className="panel p-6 sm:p-8">
            <span className="eyebrow">About Company</span>
            <h2 className="mt-3 text-2xl font-extrabold text-night-900 sm:text-3xl">
              {T ? E : "Feel the professional Rn53 Themes - Easy to build your web presence"}
            </h2>
            {T ? (
              <p className="mt-4 whitespace-pre-line leading-relaxed text-slate-600">
                {T.bio || "This business hasn't added an introduction yet."}
              </p>
            ) : (
              <p className="mt-4 leading-relaxed text-slate-600">
                {"Official website of Rn53 Themes, Affiliated to "}
                <Link href="/view-business" className="font-semibold text-brand-600">
                  Themeforest
                </Link>
                {". We provide the best HTML and "}
                <Link href="/view-business" className="font-semibold text-brand-600">
                  fully functional website
                </Link>
                {
                  " templates. Our services include template customization, custom template design, directory PHP template, HTML to PHP conversions, and more. We are one of the best web development team we always interesting to develop beautiful websites."
                }
              </p>
            )}
            <Stagger gap={0.05} className="mt-8 grid gap-4 sm:grid-cols-2">
              {D.map((e, t) => (
                <StaggerItem key={e.title + t} className="relative rounded-2xl bg-mist p-5">
                  <span className="font-display text-sm font-extrabold text-gradient">
                    {String(t + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-bold text-night-900">
                    {e.href ? (
                      <Link href={e.href} className="after:absolute after:inset-0 hover:text-brand-600">
                        {e.title}
                      </Link>
                    ) : (
                      e.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{e.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
          {(!T || P || q || I) && (
            <div className="grid gap-5 md:grid-cols-3">
              {(!T || P) && (
                <Reveal className="panel overflow-hidden">
                  <h2 className="px-5 pt-5 text-lg font-bold text-night-900">Products</h2>
                  <Link href={P ? productHref(P.slug) : "/products-inner"} className="group block p-5">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={P?.image || "/img/viewBusiness/product1.webp"}
                      alt="Product"
                      className="aspect-video w-full rounded-2xl object-cover"
                    />
                    <h4 className="mt-3 font-semibold text-night-900 group-hover:text-brand-600">
                      {P ? P.name : "8 x 4 Metal Trailer - Exc Tyres"}
                    </h4>
                    <div className="mt-1 flex items-center gap-2 text-sm">
                      <span className="font-bold text-night-900">{P ? formatPrice(P.price) : "$400"}</span>
                      {(!P || P.old_price > P.price) && (
                        <span className="text-slate-400 line-through">{P ? formatPrice(P.old_price) : "$500"}</span>
                      )}
                      {(!P || P.discount_percent > 0) && (
                        <span className="chip bg-pin-500 text-night-900">{P ? P.discount_percent : 20}% off</span>
                      )}
                    </div>
                  </Link>
                </Reveal>
              )}
              {(!T || q) && (
                <Reveal className="panel overflow-hidden" delay={0.1}>
                  <h2 className="px-5 pt-5 text-lg font-bold text-night-900">Events</h2>
                  <Link href={q ? eventHref(q.slug) : "/events-inner"} className="group block p-5">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={q?.image || "/img/viewBusiness/product2.webp"}
                      alt="Event"
                      className="aspect-video w-full rounded-2xl object-cover"
                    />
                    <h4 className="mt-3 font-semibold text-night-900 group-hover:text-brand-600">
                      {q ? q.title : "Digital Marketing Seminar 2020"}
                    </h4>
                  </Link>
                </Reveal>
              )}
              {(!T || I) && (
                <Reveal className="panel overflow-hidden" delay={0.2}>
                  <h2 className="px-5 pt-5 text-lg font-bold text-night-900">Blogs</h2>
                  <Link href={I ? blogHref(I.slug) : "/blog-inner"} className="group block p-5">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={I?.image || "/img/viewBusiness/product3.webp"}
                      alt="Blog"
                      className="aspect-video w-full rounded-2xl object-cover"
                    />
                    <h4 className="mt-3 font-semibold text-night-900 group-hover:text-brand-600">
                      {I ? I.title : "Digital Marketing"}
                    </h4>
                  </Link>
                </Reveal>
              )}
            </div>
          )}
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Reveal className="rounded-3xl bg-night-900 p-6 text-white shadow-card-hover">
            <h4 className="text-xl font-bold">Send Enquiry</h4>
            <form name="home_enquiry_form" id="home_enquiry_form" onSubmit={W} className="mt-5 scroll-mt-32 space-y-3">
              <input
                type="text"
                name="enquiry_name"
                required
                placeholder="Enter name*"
                value={y.enquiry_name}
                onChange={_}
                className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
              />
              <input
                type="email"
                name="enquiry_email"
                required
                placeholder="Enter email*"
                pattern={"^[\\w]{1,}[\\w.+\\-]{0,}@[\\w\\-]{2,}([.][a-zA-Z]{2,}|[.][\\w\\-]{2,}[.][a-zA-Z]{2,})$"}
                title="Invalid email address"
                value={y.enquiry_email}
                onChange={_}
                className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
              />
              <input
                type="text"
                name="enquiry_mobile"
                required
                placeholder="Enter mobile number *"
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number must start with 7-9 and be 10 digits long"
                value={y.enquiry_mobile}
                onChange={_}
                className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
              />
              <textarea
                name="enquiry_message"
                rows="3"
                placeholder="Enter your query or message"
                value={y.enquiry_message}
                onChange={_}
                className="field border-white/10 bg-white/10 text-white focus:bg-white/15"
              />
              {N?.ok && (
                <p className="text-sm font-semibold text-emerald-300" role="status">
                  {N.ok}
                </p>
              )}
              {N?.error && (
                <p className="text-sm font-semibold text-rose-300" role="alert">
                  {N.error}
                </p>
              )}
              <button type="submit" disabled={N?.busy} className="btn-primary w-full py-3 disabled:opacity-60">
                {N?.busy ? "Sending…" : "Submit"}
              </button>
            </form>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
export default ViewBusiness;
