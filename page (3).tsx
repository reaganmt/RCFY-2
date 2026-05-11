"use client";

import { useState } from "react";

const seriesOptions = [
  { label: "Formula 4", count: 61 },
  { label: "Spec Miata", count: 118 },
  { label: "GT3", count: 19 },
  { label: "IMSA WeatherTech", count: 27 },
  { label: "LMP3", count: 11 },
  { label: "Rally / Gravel", count: 44 },
];

const makeOptions = [
  { label: "Radical", count: 29 },
  { label: "Ligier", count: 14 },
  { label: "Spec MX-5", count: 88 },
  { label: "Formula Ford", count: 42 },
  { label: "Porsche GT3", count: 9 },
];

const listingTypeOptions = [
  { label: "Fixed price", count: 912 },
  { label: "Make an offer", count: 388 },
  { label: "Price reduced", count: 74 },
];

const conditionOptions = [
  { label: "Race ready", count: 521 },
  { label: "Needs prep", count: 244 },
  { label: "Project / parts car", count: 89 },
];

const locationOptions = [
  { label: "Within 250 mi", count: 48 },
  { label: "National", count: 1430 },
  { label: "International", count: 207 },
];

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-[#E0DED8] pb-4 mb-4 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-[11px] font-semibold uppercase tracking-wider text-[#888780] mb-2.5 hover:text-[#1a1a1a] transition-colors"
      >
        {title}
        <span className="text-[14px] font-normal">{open ? "−" : "+"}</span>
      </button>
      {open && children}
    </div>
  );
}

function CheckRow({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="filter-row">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-3.5 h-3.5 rounded border-[#E0DED8] text-[#D85A30] accent-[#D85A30]"
        />
        <span>{label}</span>
      </div>
      <span className="text-[11px] text-[#888780] bg-[#F1EFE8] px-1.5 py-0.5 rounded-full">
        {count.toLocaleString()}
      </span>
    </label>
  );
}

export default function ListingsSidebar() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const activeCount = Object.values(checked).filter(Boolean).length;

  return (
    <aside className="w-[210px] shrink-0">
      <div className="bg-white rounded-xl border border-[#E0DED8] p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[13px] font-semibold text-[#1a1a1a]">Filters</span>
          {activeCount > 0 && (
            <button
              onClick={() => setChecked({})}
              className="text-[11px] text-[#D85A30] hover:underline"
            >
              Clear all ({activeCount})
            </button>
          )}
        </div>

        {/* Price */}
        <FilterSection title="Price">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Min $"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="input text-xs py-1.5"
            />
            <input
              type="text"
              placeholder="Max $"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="input text-xs py-1.5"
            />
          </div>
        </FilterSection>

        {/* Series */}
        <FilterSection title="Series / Class">
          {seriesOptions.map((o) => (
            <CheckRow
              key={o.label}
              label={o.label}
              count={o.count}
              checked={!!checked[o.label]}
              onChange={() => toggle(o.label)}
            />
          ))}
        </FilterSection>

        {/* Make */}
        <FilterSection title="Make">
          {makeOptions.map((o) => (
            <CheckRow
              key={o.label}
              label={o.label}
              count={o.count}
              checked={!!checked[o.label]}
              onChange={() => toggle(o.label)}
            />
          ))}
        </FilterSection>

        {/* Listing type */}
        <FilterSection title="Listing type">
          {listingTypeOptions.map((o) => (
            <CheckRow
              key={o.label}
              label={o.label}
              count={o.count}
              checked={!!checked[o.label]}
              onChange={() => toggle(o.label)}
            />
          ))}
        </FilterSection>

        {/* Condition */}
        <FilterSection title="Condition">
          {conditionOptions.map((o) => (
            <CheckRow
              key={o.label}
              label={o.label}
              count={o.count}
              checked={!!checked[o.label]}
              onChange={() => toggle(o.label)}
            />
          ))}
        </FilterSection>

        {/* Location */}
        <FilterSection title="Location">
          {locationOptions.map((o) => (
            <CheckRow
              key={o.label}
              label={o.label}
              count={o.count}
              checked={!!checked[o.label]}
              onChange={() => toggle(o.label)}
            />
          ))}
        </FilterSection>
      </div>
    </aside>
  );
}
