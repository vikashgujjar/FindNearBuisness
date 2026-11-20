"use client";

import { ThumbTitle, DashCrud } from "@/app/Component/DashCrud";
import { formatDate, eventHref } from "@/app/lib/api";
let r = [
  {
    name: "title",
    label: "Event name",
    required: true,
    full: true,
  },
  {
    name: "event_date",
    label: "Date",
    type: "date",
    required: true,
  },
  {
    name: "event_time",
    label: "Time",
    placeholder: "10:00 AM",
  },
  {
    name: "address",
    label: "Address",
    full: true,
  },
  {
    name: "city",
    label: "City",
  },
  {
    name: "contact_person",
    label: "Contact person",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "website",
    label: "Website",
  },
  {
    name: "map_embed",
    label: "Map embed link",
    type: "url",
    placeholder: "https://www.google.com/maps/embed?...",
  },
  {
    name: "image",
    label: "Image",
    type: "image",
    full: true,
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    rows: 6,
  },
  {
    name: "registration_enabled",
    label: "Registration",
    type: "toggle",
    text: "Let visitors register for this event",
    default: true,
    full: true,
  },
];
let i = [
  {
    label: "Event",
    render: (e) => <ThumbTitle src={e.image} title={e.title} sub={e.city} />,
  },
  {
    label: "Date",
    render: (e) => [formatDate(e.event_date), e.event_time].filter(Boolean).join(", "),
  },
];
function MyEvents() {
  return (
    <DashCrud
      type="events"
      badge="Events"
      title="Your Events"
      noun="event"
      fields={r}
      columns={i}
      minWidth="min-w-[600px]"
      nameOf={(e) => e.title}
      previewUrl={(e) => eventHref(e.slug)}
      note="New events go live after our team approves them."
    />
  );
}
export default MyEvents;
