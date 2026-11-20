"use client";

import { FaCalendarDays, FaClock, FaLocationDot, FaUser, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa6";
import Link from "next/link";
import { PageHero } from "@/app/ui/blocks";
import { Reveal } from "@/app/ui/motion";
import { splitTitle, ArticleCover, DateBadge, ShareBar, RegisterForm, AuthorCard } from "@/app/Component/ArticleParts";
import { useQueryParam, useApi, formatDate, galleryHref } from "@/app/lib/api";
let m = [
  {
    icon: FaCalendarDays,
    label: "Date",
    value: "07, Jan 2020",
  },
  {
    icon: FaClock,
    label: "Time",
    value: "12:00AM",
  },
  {
    icon: FaLocationDot,
    label: "Address",
    value: "3738 Grim Avenue, California",
  },
  {
    icon: FaUser,
    label: "Contact Person",
    value: "Rebecca G Torres",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "987654855",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "rebecca@business.com",
  },
  {
    icon: FaGlobe,
    label: "Website",
    value: "www.rebecca.com",
  },
];
function EventInner() {
  var e, t;
  let a = useQueryParam("slug"),
    { data } = useApi("/events?per_page=1", {
      auth: false,
      skip: null !== a,
    }),
    x = a || data?.data?.[0]?.slug,
    { data: h, error } = useApi(x ? `/events/${encodeURIComponent(x)}` : null, {
      auth: false,
    }),
    p = h?.data,
    g = !p && error && 404 !== error.status;
  if (error?.status === 404)
    return (
      <div className="bg-mist py-24">
        <div className="container-x panel mx-auto max-w-lg p-10 text-center">
          <h1 className="text-2xl font-bold text-night-900">Event not found</h1>
          <p className="mt-2 text-sm text-slate-500">This event may have ended or been removed.</p>
          <Link href="/events" className="btn-primary mt-6">
            See all events
          </Link>
        </div>
      </div>
    );
  if (!p && !g)
    return (
      <div className="bg-mist" aria-busy="true">
        <div className="h-48" />
        <div className="container-x grid gap-6 pb-10 lg:grid-cols-[1fr_380px]">
          <div className="panel aspect-[16/9] animate-pulse bg-white" />
          <div className="panel h-96 animate-pulse bg-white" />
        </div>
      </div>
    );
  let b = p
      ? splitTitle(p.title)
      : {
          title: "Lunar New Year",
          highlight: "2020",
        },
    v = p
      ? [
          {
            icon: FaCalendarDays,
            label: "Date",
            value: formatDate(p.event_date),
          },
          {
            icon: FaClock,
            label: "Time",
            value: p.event_time,
          },
          {
            icon: FaLocationDot,
            label: "Address",
            value: [p.address, p.city].filter(Boolean).join(", "),
          },
          {
            icon: FaUser,
            label: "Contact Person",
            value: p.contact_person,
          },
          {
            icon: FaPhone,
            label: "Phone",
            value: p.phone,
          },
          {
            icon: FaEnvelope,
            label: "Email",
            value: p.email,
          },
          {
            icon: FaGlobe,
            label: "Website",
            value: p.website,
          },
        ].filter((e) => e.value)
      : m;
  return (
    <div className="bg-mist">
      <PageHero
        compact
        eyebrow="Event"
        title={b.title}
        highlight={b.highlight}
        crumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Events",
            href: "/events",
          },
          {
            label: p ? p.title : "Lunar New Year 2020",
          },
        ]}
        waveFill="#F3F8FE"
      />
      <div className="container-x grid gap-6 pb-10 lg:grid-cols-[1fr_380px]">
        <div className="min-w-0 space-y-6">
          <ArticleCover
            image={(p && p.image) || "/img/blogInner/event-inner.webp"}
            date={
              p ? (
                DateBadge(p.event_date)
              ) : (
                <>
                  JAN
                  <br />
                  07
                </>
              )
            }
            title={p ? p.title : "Lunar New Year 2020"}
          />
          {p ? (
            <Reveal
              className={
                "panel space-y-4 p-6 leading-relaxed text-slate-600 sm:p-8 [&_p:first-child]:text-lg [&_p:first-child]:font-semibold [&_p:first-child]:text-night-900"
              }
            >
              <div
                className="space-y-4"
                dangerouslySetInnerHTML={{
                  __html: p.description || "<p>Details coming soon.</p>",
                }}
              />
            </Reveal>
          ) : (
            <Reveal className="panel space-y-4 p-6 leading-relaxed text-slate-600 sm:p-8">
              <p className="text-lg font-semibold text-night-900">
                Celebrate as the sights, sounds and aromas of Asia come alive during this local San Diego festival
                that’s fit for the whole family happening weekends January 11, 2020 - February 2, 2020 (to include
                Monday, January 20, 2020.)
              </p>
              <p>
                You won’t want to miss SeaWorld San Diego’s one-of-a-kind Lunar New Year celebration, featuring an
                incredible Chinese acrobats show, local performers, and delicious culinary delights. Dig into the
                Asian-inspired offerings of Ramen, Lo Mein, Bao Buns, Dim Sum, rice dishes and more.
              </p>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </Reveal>
          )}
          <ShareBar title="Share this event" />
        </div>
        <aside className="min-w-0 space-y-5">
          {(!p || p.registration_enabled) && <RegisterForm type="events" slug={p?.slug} />}
          <Reveal className="panel p-6">
            <h3 className="mb-4 text-lg font-bold text-night-900">Event information</h3>
            <ul className="space-y-3">
              {v.map((e) => {
                let { icon: Icon, label, value } = e;
                return (
                  <li key={label} className="flex gap-3 text-sm">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-400">{label}</span>
                      {"Website" === label ? (
                        <a
                          href={/^https?:\/\//.test(value) ? value : `https://${value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-brand-600 hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="block break-words font-semibold text-night-900">{value}</span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal className="panel p-6">
            <h3 className="mb-4 text-lg font-bold text-night-900">Location</h3>
            <iframe
              title="Event location"
              src={
                p?.map_embed ||
                (p
                  ? `https://maps.google.com/maps?q=${encodeURIComponent([p.address, p.city].filter(Boolean).join(", "))}&output=embed`
                  : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1548773.41947498!2d-73.979506!3d40.69714100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1740026389098!5m2!1sen!2sin")
              }
              className="h-56 w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          {p?.host ? (
            <AuthorCard
              href={galleryHref(p.host.id)}
              name={p.host.company_name || p.host.name}
              joined={`Joined on ${formatDate(p.host.joined_at, {
                month: "short",
                year: "numeric",
              })}`}
              image={p.host.avatar}
            />
          ) : (
            <AuthorCard />
          )}
        </aside>
      </div>
    </div>
  );
}
export default EventInner;
