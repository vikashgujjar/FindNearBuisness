"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaXmark,
  FaTrash,
  FaPlus,
  FaArrowLeft,
  FaTriangleExclamation,
  FaPen,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { CommonDashLayout } from "@/app/Component/CommonDashLayout";
import { iconBtn, DashCard, TableWrap, StatusChip } from "@/app/ui/blocks";
import { uploadFile, mediaUrl, apiFetch, useApi } from "@/app/lib/api";
let u = ["images", "tags", "pairs", "services"];
let h = (e) => {
  var t;
  if ("features" === e.type || "hours" === e.type) return {};
  return u.includes(e.type) ? [] : "toggle" === e.type ? null !== (t = e.default) && undefined !== t && t : "";
};
let initialValues = function (e) {
  let t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    s = {};
  for (let l of e) {
    var a;
    l.section || (s[l.name] = t[l.name] ?? h(l));
  }
  return s;
};
let toPayload = (e, t) => {
  let s = {};
  for (let a of e) {
    if (a.section) continue;
    let e = t[a.name];
    "pairs" === a.type
      ? (s[a.name] = e.filter((e) => {
          var t, s;
          return e.label?.trim() && e.value?.trim();
        }))
      : "services" === a.type
        ? (s[a.name] = e.filter((e) => {
            var t;
            return e.name?.trim();
          }))
        : (s[a.name] = "" === e ? null : e);
  }
  return s;
};
function b(e) {
  let [t, s] = useState(false),
    [a, n] = useState("");
  return {
    busy: t,
    error: a,
    send: async (t) => {
      let a = [];
      n(""), s(true), null == e || e(1);
      try {
        for (let e of t) {
          if (e.size > 4194304) throw Error("Each image must be smaller than 4 MB.");
          a.push((await uploadFile(e)).path);
        }
      } catch (e) {
        n(e.message);
      } finally {
        s(false), null == e || e(-1);
      }
      return a;
    },
  };
}
let f = "btn-ghost btn-sm cursor-pointer focus-within:ring-2 focus-within:ring-brand-300";
let j = "image/jpeg,image/png,image/webp,image/gif";
function Cv(props) {
  let { id, value, onChange, onBusy, compact = false } = props,
    { busy, error, send } = b(onBusy),
    d = async (e) => {
      let t = [...e.target.files];
      if (((e.target.value = ""), !t.length)) return;
      let [s] = await send(t);
      s && onChange(s);
    };
  return (
    <div>
      <div className="flex items-center gap-3">
        {value ? (
          <img
            loading="lazy"
            decoding="async"
            src={mediaUrl(value)}
            alt=""
            className={`${compact ? "h-10 w-10" : "h-16 w-16"} shrink-0 rounded-xl object-cover ring-1 ring-slate-200`}
          />
        ) : (
          <span
            className={`${compact ? "h-10 w-10" : "h-16 w-16"} shrink-0 rounded-xl bg-mist ring-1 ring-slate-200`}
            aria-hidden
          />
        )}
        <label className={f}>
          {busy ? "Uploading…" : value ? "Change" : "Upload"}
          <input id={id} type="file" accept={j} onChange={d} disabled={busy} className="sr-only" />
        </label>
        {value && !busy && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-xs font-semibold text-rose-600 hover:underline"
          >
            Remove
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
function N(props) {
  let { id, value, onChange, onBusy } = props,
    { busy, error, send } = b(onBusy),
    d = async (e) => {
      let t = [...e.target.files];
      if (((e.target.value = ""), !t.length)) return;
      let a = await send(t);
      a.length && onChange([...value, ...a]);
    };
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {value.map((e, t) => (
          <span key={`${e}-${t}`} className="relative">
            <img
              loading="lazy"
              decoding="async"
              src={mediaUrl(e)}
              alt=""
              className="h-16 w-16 rounded-xl object-cover ring-1 ring-slate-200"
            />
            <button
              type="button"
              aria-label="Remove image"
              onClick={() => onChange(value.filter((e, s) => s !== t))}
              className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-night-900 text-[10px] text-white"
            >
              <FaXmark />
            </button>
          </span>
        ))}
        <label className={f}>
          {busy ? "Uploading…" : "Add images"}
          <input id={id} type="file" multiple accept={j} onChange={d} disabled={busy} className="sr-only" />
        </label>
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
function Cy(props) {
  let { id, value, onChange, placeholder } = props,
    [i, c] = useState(""),
    d = () => {
      let e = i
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean);
      e.length && onChange([...value, ...e.filter((e) => !value.includes(e))]), c("");
    };
  return (
    <div>
      <input
        id={id}
        className="field"
        value={i}
        placeholder={placeholder || "Type and press Enter"}
        onChange={(e) => c(e.target.value)}
        onBlur={d}
        onKeyDown={(e) => {
          ("Enter" === e.key || "," === e.key) && (e.preventDefault(), d());
        }}
      />
      {value.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {value.map((e) => (
            <span key={e} className="chip bg-brand-50 text-brand-700">
              {e}
              <button type="button" aria-label={`Remove ${e}`} onClick={() => onChange(value.filter((t) => t !== e))}>
                <FaXmark className="text-[10px]" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
function Cw(props) {
  let { value, onChange, addLabel, blank, children } = props,
    i = (e, a) =>
      onChange(
        value.map((t, s) =>
          s === e
            ? {
                ...t,
                ...a,
              }
            : t,
        ),
      );
  return (
    <div className="space-y-2">
      {value.map((e, l) => (
        <div key={l} className="flex items-center gap-2">
          {children(e, (e) => i(l, e))}
          <button
            type="button"
            aria-label="Remove row"
            onClick={() => onChange(value.filter((e, t) => t !== l))}
            className={`${iconBtn} shrink-0 hover:bg-rose-500`}
          >
            <FaTrash className="text-xs" />
          </button>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...value, blank])} className="btn-ghost btn-sm">
        <FaPlus className="text-[10px]" /> {addLabel}
      </button>
    </div>
  );
}
// Filters the admin set up for the chosen category.
const featureFilters = (values, options) => options?.categories?.find((c) => String(c.id) === String(values?.category_id))?.filters || [];
function FeaturePicker({ filters, value, onChange }) {
  return (
    <div className="space-y-4">
      {filters.map((f) => (
        <fieldset key={f.key}>
          <legend className="mb-2 text-sm font-semibold text-night-900">{f.name}</legend>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {f.options.map((o) => {
              const chosen = value[f.key] || [];
              return (
                <label key={o} className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-brand-500"
                    checked={chosen.includes(o)}
                    onChange={(e) => onChange({ ...value, [f.key]: e.target.checked ? [...chosen, o] : chosen.filter((x) => x !== o) })}
                  />
                  {o}
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}
    </div>
  );
}
const WEEK = { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" };
function HoursEditor({ value, onChange }) {
  const set = (day, part, time) => onChange({ ...value, [day]: { open: null, close: null, ...value[day], [part]: time || null } });
  const monday = value.mon?.open && value.mon?.close ? value.mon : null;
  return (
    <div className="space-y-2">
      {Object.entries(WEEK).map(([day, label]) => (
        <div key={day} className="flex items-center gap-3 text-sm text-slate-600">
          <span className="w-24 shrink-0">{label}</span>
          {["open", "close"].map((part) => (
            <input
              key={part}
              type="time"
              aria-label={`${label} ${part === "open" ? "opens" : "closes"}`}
              className="field w-auto py-2"
              value={value[day]?.[part] || ""}
              onChange={(e) => set(day, part, e.target.value)}
            />
          ))}
        </div>
      ))}
      {monday && (
        <button type="button" className="btn-ghost btn-sm" onClick={() => onChange(Object.fromEntries(Object.keys(WEEK).map((d) => [d, { ...monday }])))}>
          Use Monday’s hours for every day
        </button>
      )}
    </div>
  );
}
function S(props) {
  let t,
    { field, value, values, onChange, options, error, onBusy } = props,
    o = `vf-${field.name}`,
    { type = "text", label, placeholder, hint, full } = field,
    required = "function" == typeof field.required ? field.required(values || {}, options || {}) : field.required;
  if ("features" === type && !featureFilters(values, options).length) return null;
  if ("features" === type) t = <FeaturePicker filters={featureFilters(values, options)} value={value || {}} onChange={onChange} />;
  else if ("hours" === type) t = <HoursEditor value={value || {}} onChange={onChange} />;
  else if ("textarea" === type)
    t = (
      <textarea
        id={o}
        rows={field.rows || 4}
        className="field"
        required={required}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  else if ("select" === type) {
    let e = "function" == typeof field.options ? field.options(options || {}) : field.options;
    t = (
      <select
        id={o}
        className="field"
        required={required}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
        {(e || []).map((e) => (
          <option key={e.value} value={e.value}>
            {e.label}
          </option>
        ))}
      </select>
    );
  } else
    t =
      "toggle" === type ? (
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            id={o}
            type="checkbox"
            className="h-4 w-4 accent-brand-500"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
          />
          {field.text}
        </label>
      ) : "image" === type ? (
        <Cv id={o} value={value} onChange={onChange} onBusy={onBusy} />
      ) : "images" === type ? (
        <N id={o} value={value} onChange={onChange} onBusy={onBusy} />
      ) : "tags" === type ? (
        <Cy id={o} value={value} onChange={onChange} placeholder={placeholder} />
      ) : "pairs" === type ? (
        <Cw
          value={value}
          onChange={onChange}
          addLabel="Add row"
          blank={{
            label: "",
            value: "",
          }}
        >
          {(e, t) => {
            var s, l;
            return (
              <>
                <input
                  aria-label="Label"
                  className="field min-w-0 flex-1"
                  placeholder="Label"
                  value={e.label ?? ""}
                  onChange={(e) =>
                    t({
                      label: e.target.value,
                    })
                  }
                />
                <input
                  aria-label="Value"
                  className="field min-w-0 flex-1"
                  placeholder="Value"
                  value={e.value ?? ""}
                  onChange={(e) =>
                    t({
                      value: e.target.value,
                    })
                  }
                />
              </>
            );
          }}
        </Cw>
      ) : "services" === type ? (
        <Cw
          value={value}
          onChange={onChange}
          addLabel="Add service"
          blank={{
            name: "",
            image: null,
          }}
        >
          {(e, t) => {
            var s;
            return (
              <>
                <input
                  aria-label="Service name"
                  className="field min-w-0 flex-1"
                  placeholder="Service name"
                  value={e.name ?? ""}
                  onChange={(e) =>
                    t({
                      name: e.target.value,
                    })
                  }
                />
                <Cv
                  compact
                  value={e.image}
                  onChange={(e) =>
                    t({
                      image: e || null,
                    })
                  }
                  onBusy={onBusy}
                />
              </>
            );
          }}
        </Cw>
      ) : (
        <input
          id={o}
          type={type}
          className="field"
          required={required}
          placeholder={placeholder}
          min={field.min}
          max={field.max}
          step={field.step}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  let b = full || u.includes(type) || ["textarea", "features", "hours"].includes(type);
  return (
    <div className={b ? "sm:col-span-2" : ""}>
      <label htmlFor={o} className="field-label">
        {label}
        {required ? " *" : ""}
      </label>
      {t}
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
      {error && (
        <p className="mt-1 text-xs font-medium text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
function FormFields(props) {
  let { fields, values, setValues, options, errors, onBusy } = props;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fields.map((e) => {
        var t;
        return e.section ? (
          <h3
            key={e.section}
            className="mt-2 border-t border-slate-100 pt-4 font-bold text-night-900 first:mt-0 first:border-0 first:pt-0 sm:col-span-2"
          >
            {e.section}
          </h3>
        ) : (
          <S
            key={e.name}
            field={e}
            value={values[e.name]}
            values={values}
            options={options}
            error={errors?.[e.name]?.[0]}
            onBusy={onBusy}
            onChange={(t) =>
              setValues((s) => ({
                ...s,
                [e.name]: t,
              }))
            }
          />
        );
      })}
    </div>
  );
}
function useBusyCount() {
  let [e, t] = useState(0);
  return [e > 0, (e) => t((t) => t + e)];
}
function FormMessage(e) {
  let { error, ok } = e;
  return error ? (
    <p className="rounded-xl bg-rose-500/10 px-4 py-2.5 text-sm font-medium text-rose-600" role="alert">
      {error}
    </p>
  ) : ok ? (
    <p className="rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700" role="status">
      {ok}
    </p>
  ) : null;
}
function P(props) {
  let { fields, record, options, type, title, extra, onClose, onSaved } = props,
    [h, b] = useState(() => initialValues(fields, record || {})),
    [f, j] = useState({}),
    [v, N] = useState(""),
    [y, w] = useState(false),
    [S, P] = useBusyCount(),
    _ = useRef(null);
  useEffect(() => {
    var e;
    null === (e = _.current) ||
      undefined === e ||
      e.scrollIntoView({
        block: "nearest",
      });
  }, []);
  let R = async (e) => {
    e.preventDefault(), w(true), N(""), j({});
    try {
      let e = await apiFetch(record ? `/vendor/${type}/${record.id}` : `/vendor/${type}`, {
        method: record ? "PUT" : "POST",
        body: toPayload(fields, h),
      });
      onSaved(e.message);
    } catch (e) {
      N(e.message), j(e.errors || {}), w(false);
    }
  };
  return (
    <form ref={_} onSubmit={R} className="space-y-5 scroll-mt-28">
      <div className="flex items-center gap-3">
        <button type="button" onClick={onClose} aria-label="Back to list" className={iconBtn}>
          <FaArrowLeft className="text-xs" />
        </button>
        <p className="font-bold text-night-900">{title}</p>
      </div>
      <FormFields fields={fields} values={h} setValues={b} options={options} errors={f} onBusy={P} />
      {extra?.(h, options)}
      <FormMessage error={v} />
      <div className="flex flex-wrap gap-2">
        <button type="submit" disabled={y || S} className="btn-primary disabled:opacity-70">
          {y ? "Saving…" : S ? "Uploading image…" : record ? "Save changes" : "Submit for approval"}
        </button>
        <button type="button" onClick={onClose} className="btn-ghost">
          Cancel
        </button>
      </div>
    </form>
  );
}
function C_(props) {
  let { open, label, onAnswer } = props;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night-950/60 p-4 backdrop-blur-sm"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={() => onAnswer(false)}
        >
          <motion.div
            role="alertdialog"
            aria-modal="true"
            className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-card-hover"
            initial={{
              scale: 0.9,
              y: 20,
            }}
            animate={{
              scale: 1,
              y: 0,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-rose-500/10 text-xl text-rose-500">
              <FaTriangleExclamation />
            </span>
            <p className="mt-4 font-bold text-night-900">
              {"Delete "}
              {label}?
            </p>
            <p className="mt-1 text-sm text-slate-500">This cannot be undone.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button type="button" onClick={() => onAnswer(false)} className="btn-ghost">
                No
              </button>
              <button type="button" onClick={() => onAnswer(true)} className="btn-dark bg-rose-500 hover:bg-rose-600">
                Yes, delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
function R(e) {
  let {
      type,
      badge,
      title,
      noun,
      columns,
      fields,
      startNew,
      extra,
      note,
      action,
      previewUrl,
      nameOf,
      locked,
      minWidth = "min-w-[720px]",
    } = e,
    { data, loading, error, reload } = useApi(`/vendor/${type}`, {
      cacheable: false,
    }),
    { data: k } = useApi("/vendor/options", {
      cacheable: false,
    }),
    [C, R] = useState(startNew ? "new" : null),
    [I, L] = useState(""),
    [A, B] = useState(null),
    [V, D] = useState(""),
    F = data?.data,
    U = async (e) => {
      await reload(), R(null), L(e);
    },
    T = async (e) => {
      if ((B(null), e)) {
        D(""), L("");
        try {
          let e = await apiFetch(`/vendor/${type}/${A.id}`, {
            method: "DELETE",
          });
          await reload(), L(e.message);
        } catch (e) {
          D(e.message);
        }
      }
    };
  return C ? (
    <DashCard badge={badge} title={title}>
      <P
        key={"new" === C ? "new" : C.id}
        type={type}
        fields={fields}
        options={k}
        extra={extra}
        record={"new" === C ? null : C}
        title={"new" === C ? `New ${noun}` : `Edit ${noun}`}
        onClose={() => R(null)}
        onSaved={U}
      />
    </DashCard>
  ) : (
    <DashCard
      badge={badge}
      title={title}
      action={
        <>
          <button
            type="button"
            onClick={() => {
              L(""), R("new");
            }}
            className="btn-primary btn-sm"
          >
            <FaPlus />
            {" Add "}
            {noun}
          </button>
          {action}
        </>
      }
    >
      <div className="mb-4 empty:hidden">
        <FormMessage ok={I} error={V} />
      </div>
      <TableWrap>
        <table className={`data-table ${minWidth}`}>
          <thead>
            <tr>
              <th>No</th>
              {columns.map((e) => (
                <th key={e.label}>{e.label}</th>
              ))}
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(F || []).map((e, t) => {
              let s = locked?.(e),
                l = previewUrl?.(e);
              return (
                <tr key={e.id}>
                  <td className="font-semibold text-slate-400">{String(t + 1).padStart(2, "0")}</td>
                  {columns.map((t) => (
                    <td key={t.label}>{t.render(e)}</td>
                  ))}
                  <td>
                    <StatusChip status={e.status} />
                  </td>
                  <td>
                    <div className="flex justify-end gap-1.5">
                      {!s && (
                        <>
                          <button
                            type="button"
                            onClick={() => {
                              L(""), R(e);
                            }}
                            className={iconBtn}
                            title="Edit"
                            aria-label={`Edit ${nameOf(e)}`}
                          >
                            <FaPen className="text-xs" />
                          </button>
                          <button
                            type="button"
                            onClick={() => B(e)}
                            className={`${iconBtn} hover:bg-rose-500`}
                            title="Delete"
                            aria-label={`Delete ${nameOf(e)}`}
                          >
                            <FaTrash className="text-xs" />
                          </button>
                        </>
                      )}
                      {l && "active" === e.status && (
                        <Link
                          href={l}
                          className={iconBtn}
                          title="View on website"
                          aria-label={`View ${nameOf(e)} on website`}
                        >
                          <FaArrowUpRightFromSquare className="text-xs" />
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableWrap>
      {loading && !F && <p className="py-10 text-center text-slate-400">Loading…</p>}
      {error && (
        <p className="py-10 text-center text-sm text-rose-600" role="alert">
          {error.message}
        </p>
      )}
      {F?.length === 0 && (
        <p className="py-10 text-center text-slate-400">
          {"Nothing here yet. Add your first "}
          {noun}.
        </p>
      )}
      {note && (
        <p className="mt-6 rounded-2xl border-l-4 border-cyan-400 bg-cyan-400/10 p-4 text-sm leading-relaxed text-slate-600">
          {note}
        </p>
      )}
      <C_ open={null !== A} label={A ? `"${nameOf(A)}"` : ""} onAnswer={T} />
    </DashCard>
  );
}
function DashCrud(props) {
  return (
    <CommonDashLayout vendorOnly>
      <R {...props} />
    </CommonDashLayout>
  );
}
let ThumbTitle = (props) => {
  let { src, title, sub } = props;
  return (
    <div className="flex items-center gap-3">
      {src ? (
        <img
          loading="lazy"
          decoding="async"
          src={mediaUrl(src)}
          alt=""
          className="h-10 w-10 shrink-0 rounded-xl object-cover"
        />
      ) : (
        <span className="h-10 w-10 shrink-0 rounded-xl bg-mist" aria-hidden />
      )}
      <div className="min-w-0">
        <p className="font-semibold text-night-900">{title}</p>
        {sub && <p className="text-xs text-slate-400">{sub}</p>}
      </div>
    </div>
  );
};
export { DashCrud, toPayload, useBusyCount, FormMessage, FormFields, initialValues, ThumbTitle };
