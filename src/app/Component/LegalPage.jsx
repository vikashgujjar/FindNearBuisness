"use client";
import React from "react";
import PinLocation from "./PinLocation";
import BusinessDirectory from "./BuinessDirectory";
import { PageHero } from "../ui/page";
import { Reveal } from "../ui/motion";

const body =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

export default function LegalPage({ title, highlight, crumb }) {
  return (
    <>
      <PinLocation />
      <PageHero eyebrow="Legal" title={title} highlight={highlight} crumbs={[{ label: "Home", href: "/" }, { label: crumb }]} waveFill="#F4F5FB" />
      <div className="bg-mist pb-4">
        <Reveal className="container-x max-w-4xl">
          <article className="panel p-6 leading-relaxed text-slate-600 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Last updated · 2026</p>
            <p className="mt-4 text-justify">{body}</p>
          </article>
        </Reveal>
      </div>
      <BusinessDirectory />
    </>
  );
}
