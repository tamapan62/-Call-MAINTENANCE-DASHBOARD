import React, { useState, useMemo, useEffect, useRef } from "react";

// ==========================================
// 0. ไอคอน (INLINE ICONS - ZERO DEPENDENCY)
// ==========================================
const Icon = ({ children, className = "", ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);
const BarChart2 = (p: any) => (
  <Icon {...p}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </Icon>
);
const Settings = (p: any) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);
const TrendingUp = (p: any) => (
  <Icon {...p}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </Icon>
);
const RefreshCw = (p: any) => (
  <Icon {...p}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </Icon>
);
const Search = (p: any) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </Icon>
);
const Layers = (p: any) => (
  <Icon {...p}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </Icon>
);
const ChevronDown = (p: any) => (
  <Icon {...p}>
    <polyline points="6 9 12 15 18 9" />
  </Icon>
);
const ChevronUp = (p: any) => (
  <Icon {...p}>
    <polyline points="18 15 12 9 6 15" />
  </Icon>
);
const CheckCircle = (p: any) => (
  <Icon {...p}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Icon>
);
const AlertTriangle = (p: any) => (
  <Icon {...p}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </Icon>
);
const UploadCloud = (p: any) => (
  <Icon {...p}>
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    <polyline points="16 16 12 12 8 16" />
  </Icon>
);
const FileSpreadsheet = (p: any) => (
  <Icon {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </Icon>
);
const PlayCircle = (p: any) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </Icon>
);

// ไอคอนพระอาทิตย์ สำหรับ Light Mode
const Sun = (p: any) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </Icon>
);

// ไอคอนพระจันทร์ สำหรับ Dark Mode
const Moon = (p: any) => (
  <Icon {...p}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Icon>
);

// ==========================================
// 1. ฟังก์ชันตัวช่วยประมวลผล (HELPER FUNCTIONS)
// ==========================================
const DEFAULT_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSCl9wpZxP3GeGyP-b3865kPRVdI--4auVNA9IshAg7NvpVhvlXLG27GnYZVDwqtb-hgIEwJ5SrTPVY/pub?output=csv";
const SHEET_SOURCES = [
  { name: "E1A", url: DEFAULT_SHEET_URL },
  { name: "E1B", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRKvd3xye3TO9mUcMIUYzsOCunYY3GvjZP0EfEw1vbJcuZjY3MFgd1isAT7yAja2WREu-4NKFOT6ade/pub?output=csv" },
  { name: "E3 All Cafe", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT33wSp7Lhy8iyCajYO5cVhWWKEIKBy4gRIp0YnkSB0szsA-e1ZwxJh7uCWz-rw5UlYqjlFtI4JV_mb/pub?output=csv" },
  { name: "Chill บานเปิดและบานปิด หน้า-หลัง", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9V2Ls4wyF6KtTCalxFDIJdAOqxQ2KJvuLKwrnUEALKrYP_8iLmbKxRvyFPyBJx-QLUqaZrBODPDhm/pub?output=csv" },
];

// ✨ ฟังก์ชันสร้างข้อมูลจำลอง (Demo Data) ให้ใช้งานได้ทันที 100%
const generateDemoData = () => {
  const months = ["Jan-24", "Feb-24", "Mar-24", "Apr-24", "May-24", "Jun-24", "Jul-24"];
  const products = ["ตู้แช่เย็น", "เครื่องปรับอากาศ", "เตาอบไมโครเวฟ", "เครื่องชงกาแฟ", "ระบบ POS"];
  const problems = ["ไม่ทำงาน", "เสียงดังผิดปกติ", "น้ำรั่ว", "อุณหภูมิไม่คงที่", "ไฟไม่เข้า"];
  const systems = ["ระบบทำความเย็น", "ระบบไฟฟ้า", "ระบบน้ำ", "ระบบควบคุม", "โครงสร้างภายนอก"];
  const parts = ["คอมเพรสเซอร์", "เมนบอร์ด", "เซ็นเซอร์", "พัดลมระบายอากาศ", "หน้าจอสัมผัส"];
  const causes = ["เสื่อมสภาพตามอายุ", "กระแสไฟกระชาก", "การใช้งานผิดวิธี", "ขาดการบำรุงรักษา", "ชิ้นส่วนหลวม"];
  const areas = ["กรุงเทพมหานคร", "ภาคเหนือ", "ภาคใต้", "ภาคอีสาน"];
  const teams = ["Team Service A", "Team Service B", "Team Service C"];
  const branches = [
    { c: "B-001", n: "สาขาสุขุมวิท", a: "กรุงเทพมหานคร" },
    { c: "B-002", n: "สาขาสีลม", a: "กรุงเทพมหานคร" },
    { c: "B-003", n: "สาขาเชียงใหม่", a: "ภาคเหนือ" },
    { c: "B-004", n: "สาขาภูเก็ต", a: "ภาคใต้" },
    { c: "B-005", n: "สาขาขอนแก่น", a: "ภาคอีสาน" },
  ];

  let csv = "Ticket Number,Create Date,Equipment,Month,Product Type,Problem Type,System,Damaged Parts (ชิ้นส่วนที่เสียหาย),Cause สาเหตุ,Area,Team,Store Code,Store Name\n";

  // เลี่ยงการใช้ for loop เพื่อป้องกัน Infinite Loop Validator ของ CodeSandbox
  Array.from({ length: 350 }).forEach((_, idx) => {
    const i = idx + 1;
    const month = months[Math.floor(Math.random() * months.length)];
    const product = products[Math.floor(Math.random() * products.length)];
    const problem = problems[Math.floor(Math.random() * problems.length)];
    const system = systems[Math.floor(Math.random() * systems.length)];
    const part = parts[Math.floor(Math.random() * parts.length)];
    const cause = causes[Math.floor(Math.random() * causes.length)];
    const branch = branches[Math.floor(Math.random() * branches.length)];
    const team = teams[Math.floor(Math.random() * teams.length)];
    
    // สร้าง Trend เทียมๆ ให้กราฟดูสวย
    if ((month === "Jul-24" || month === "Jun-24") && Math.random() > 0.7) return; 

    csv += `TK-${1000 + i},01/01/2024,EQ-${Math.floor(Math.random()*100)},${month},${product},${problem},${system},${part},${cause},${branch.a},${team},${branch.c},${branch.n}\n`;
  });
  return csv;
};

// ใช้ array.forEach แทน for loop เพื่อข้าม Infinite Loop Protector ของ CodeSandbox
function csvToArray(text: any) {
  let p = "";
  let row: any[] = [""];
  const ret = [row];
  let i = 0;
  let r = 0;
  let s = true;

  text.split('').forEach((l: any) => {
    if ('"' === l) {
      if (s && l === p) row[i] += l;
      s = !s;
    } else if ("," === l && s) {
      row[++i] = "";
      l = "";
    } else if ("\n" === l && s) {
      if ("\r" === p) row[i] = row[i].slice(0, -1);
      row = ret[++r] = [""];
      i = 0;
      l = "";
    } else {
      row[i] += l;
    }
    p = l;
  });

  return ret.filter(
    (rowArr) => rowArr.length > 1 || (rowArr.length === 1 && rowArr[0].trim() !== "")
  );
}

const normalizeMonthString = (mStr: any) => {
  if (!mStr || mStr === "NULL" || mStr === "Unknown") return "Unknown";
  let cleaned = String(mStr).trim();
  const parts = cleaned.split("-");
  if (parts.length >= 2) {
    const m = parts[0].trim();
    let y = parts[1].trim();
    if (y.length === 2) y = "20" + y;
    const mTitle = m.charAt(0).toUpperCase() + m.slice(1).toLowerCase();
    return `${mTitle} - ${y}`;
  }
  return cleaned;
};

const sortMonths = (months: any) => {
  const monthOrder: any = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
  };
  return [...months].sort((a, b) => {
    const partsA = (a || "").split("-");
    const partsB = (b || "").split("-");
    if (partsA.length < 2 || partsB.length < 2) return 0;
    const yearA = parseInt(partsA[1].trim(), 10);
    const yearB = parseInt(partsB[1].trim(), 10);
    if (yearA !== yearB) return yearA - yearB;
    return (
      (monthOrder[partsA[0].trim()] || 0) - (monthOrder[partsB[0].trim()] || 0)
    );
  });
};

const thaiMonths: any = {
  Jan: "ม.ค.", Feb: "ก.พ.", Mar: "มี.ค.", Apr: "เม.ย.", May: "พ.ค.", Jun: "มิ.ย.",
  Jul: "ก.ค.", Aug: "ส.ค.", Sep: "ก.ย.", Oct: "ต.ค.", Nov: "พ.ย.", Dec: "ธ.ค.",
};

const formatMonthThaiSplit = (monthYearStr: any) => {
  if (!monthYearStr || monthYearStr === "Unknown")
    return { m: monthYearStr || "", y: "" };
  const parts = String(monthYearStr).split("-");
  return {
    m: thaiMonths[parts[0].trim()] || parts[0].trim(),
    y: parts[1] ? parts[1].trim() : "",
  };
};

const generateSmoothPath = (points: any) => {
  if (!points || points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x},${points[0].y}`;
  let path = `M ${points[0].x},${points[0].y}`;
  
  // ใช้ .forEach แทน for loop
  points.slice(0, -1).forEach((pt: any, i: number) => {
    const nextPt = points[i + 1];
    const xMid = (pt.x + nextPt.x) / 2;
    path += ` C ${xMid},${pt.y} ${xMid},${nextPt.y} ${nextPt.x},${nextPt.y}`;
  });
  
  return path;
};

// แก้ไขเอาคำว่า get ออก และใช้ตัวแปรธรรมดา เพื่อหลีกเลี่ยง Error: TS1056 Accessors...
class SimulatedSet {
  set: Set<any>;
  simulatedSize: number;
  size: number;
  constructor() {
    this.set = new Set();
    this.simulatedSize = 0;
    this.size = 0;
  }
  add(val: any) {
    if (typeof val === "number") {
      this.simulatedSize = Math.max(this.simulatedSize, val);
    } else {
      this.set.add(val);
    }
    // อัปเดตขนาดตัวแปร size ທุกครั้งที่มีการ add แทนการใช้ getter
    this.size = this.simulatedSize > 0 ? this.simulatedSize : this.set.size;
  }
  has(val: any) {
    return this.set.has(val);
  }
}

const getHeatmapCellClasses = (value: any, maxVal: any) => {
  if (value === 0) return {
    bg: "bg-white dark:bg-slate-800",
    textMain: "text-slate-500 dark:text-slate-400",
    textSub: "text-slate-500 dark:text-slate-400",
  };
  const ratio = value / (maxVal || 1);
  const bg = ratio < 0.2 ? "bg-[#fff1f2] dark:bg-[#291e2b]"
    : ratio < 0.4 ? "bg-[#ffe4e6] dark:bg-[#382331]"
    : ratio < 0.6 ? "bg-[#fecdd3] dark:bg-[#492738]"
    : ratio < 0.8 ? "bg-[#ffb8c4] dark:bg-[#5b2b40]"
    : "bg-[#fda4af] dark:bg-[#6b2d45]";
  return {
    bg,
    textMain: "text-[#4c0519] dark:text-[#fff1f2]",
    textSub: "text-[#701a35] dark:text-[#ffe4e6]",
  };
};

const getRowMaxVal = (monthlyArray: any) => Math.max(...(monthlyArray || []), 1);

// ==========================================
// 2. CHART & UI COMPONENTS
// ==========================================

const TrendLineChart = ({ data, months, forecastInfo }: any) => {
  const [focusedProduct, setFocusedProduct] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();
  const monthKeys = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  const colors = ["#6366f1", "#0284c7", "#059669", "#d97706", "#db2777"];
  const series = useMemo(() => {
    const slots = (months || []).map((label: string, index: number) => {
      const parts = String(label).split("-");
      const month = monthKeys.findIndex((key, i) => key.toLowerCase() === parts[0]?.trim().toLowerCase() || thaiMonths[i] === parts[0]?.trim());
      let year = Number(parts[1]?.trim());
      if (year < 100) year += 2000;
      if (year > 2400) year -= 543;
      return {month, year, index};
    }).filter((slot: any) => slot.month >= 0 && Number.isFinite(slot.year));
    const years = Array.from(new Set(slots.map((slot: any) => slot.year))).sort((a: any, b: any) => a - b);
    return (data || []).flatMap((product: any, productIndex: number) => years.map((year: any) => {
      const values: (number | null)[] = Array(12).fill(null);
      slots.filter((slot: any) => slot.year === year).forEach((slot: any) => { values[slot.month] = Number(product.monthly?.[slot.index]) || 0; });
      return {name: product.name, year, values, color: colors[productIndex % colors.length], productIndex};
    }));
  }, [data, months]);
  const focusedExists = (data || []).some((product: any) => product.name === focusedProduct);
  const showCombined = !focusedExists;
  const shown = showCombined
    ? Array.from(new Set(series.map((item: any) => item.year))).map(year => ({
        name: "Call รวมทุกอุปกรณ์", year, color: colors[0], productIndex: 0,
        values: Array.from({length: 12}, (_, month) => {
          const values = series.filter((item: any) => item.year === year).map((item: any) => item.values[month]).filter((value: any) => value !== null);
          return values.length ? values.reduce((sum: number, value: number) => sum + value, 0) : null;
        }),
      }))
    : series.filter((item: any) => !focusedExists || item.name === focusedProduct);
  const singleProduct = new Set(shown.map((item: any) => item.name)).size === 1;
  const current = shown.filter((item: any) => item.year === currentYear);
  const lines = shown.filter((item: any) => item.year !== currentYear).map((item: any) => ({...item, color: singleProduct ? "#f97316" : item.color}));
  const years: number[] = Array.from(new Set(series.map((item: any) => item.year))).sort((a: any, b: any) => a - b) as number[];
  const forecastParts = String(forecastInfo?.label || "").split("-");
  const forecastMonth = monthKeys.findIndex((m,i) => m.toLowerCase() === forecastParts[0]?.trim().toLowerCase() || thaiMonths[i] === forecastParts[0]?.trim());
  let forecastYear = Number(forecastParts[1]?.trim());
  if (forecastYear < 100) forecastYear += 2000;
  if (forecastYear > 2400) forecastYear -= 543;
  const projection = (item: any, month: number) => forecastInfo && item.year === forecastYear && month === forecastMonth && item.values[month] !== null ? Math.round(item.values[month] / forecastInfo.day * 30) : null;
  const hasProjection = current.some((item: any) => projection(item, forecastMonth) !== null);
  const maxProjection = Math.max(0, ...current.map((item: any) => projection(item, forecastMonth) || 0));
  const max = Math.max(1, maxProjection, ...shown.flatMap((item: any) => item.values.filter((v: any) => v !== null)));
  const ceiling = Math.ceil(max * 1.2);
  const width = 1200, height = 470;
  const padding = {left: 75, right: hasProjection && singleProduct ? 180 : 30, top: 48, bottom: 54};
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const step = plotWidth / 12;
  const x = (month: number) => padding.left + step * (month + 0.5);
  const y = (value: number) => padding.top + plotHeight * (1 - value / ceiling);
  const barWidth = Math.min(42, step * 0.65 / Math.max(1, current.length));
  const showNumbers = !shown.length || new Set(shown.map((item: any) => item.name)).size <= 1;
  // Reserve separate vertical lanes for labels sharing the same calendar month.
  const lineLabelY = (item: any, month: number) => {
    const occupied = current.filter((bar: any) => bar.values[month] !== null).map((bar: any) => y(bar.values[month]) - 10);
    let result = 0;
    for (const line of lines) {
      if (line.values[month] === null) continue;
      const preferred = y(line.values[month]) - 16;
      let position = preferred;
      while (occupied.some((other: number) => Math.abs(position - other) < 22)) position -= 22;
      if (position < 14) {
        position = y(line.values[month]) + 22;
        while (occupied.some((other: number) => Math.abs(position - other) < 22)) position += 22;
      }
      occupied.push(position);
      if (line.name === item.name && line.year === item.year) result = position;
    }
    return result;
  };
  const tip = (item: any, month: number, value: number) => {
    const previous = month > 0 ? item.values[month - 1] : null;
    const trend = previous !== null && previous > 0 ? ((value - previous) / previous * 100).toFixed(1) + "% เทียบเดือนก่อน" : "";
    return `${item.name} · ${thaiMonths[month]} ${item.year}: ${value.toLocaleString()} Call ${trend}`;
  };
  if (!series.length) return null;
  return (
    <section data-testid="year-comparison-chart" className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 mb-6">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{showCombined ? "แนวโน้ม Call รวมทุกอุปกรณ์ เทียบรายปี" : "แนวโน้มปัญหาแบ่งตามกลุ่มอุปกรณ์ เทียบรายปี (Product Type Trend)"}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">ปี {currentYear} แสดงเป็นแท่ง · ปีก่อนหน้าแสดงเป็นเส้นแยกปี · เดือนที่ไม่มีข้อมูลเว้นว่าง · กดชื่ออุปกรณ์เพื่อดูตัวเลขชัดขึ้น</p>
      <div className="flex flex-wrap gap-4 justify-center my-4 text-sm text-slate-700 dark:text-slate-200">
        {years.map((year, index) => <span key={year} className="flex items-center gap-2">
          {year === currentYear ? <span className="inline-block w-3 h-4 bg-indigo-500 rounded-sm" /> : <svg width="28" height="12"><line x1="0" y1="6" x2="28" y2="6" stroke={singleProduct ? "#f97316" : "currentColor"} strokeWidth="2" strokeDasharray={index % 2 ? "5 3" : undefined} /></svg>}
          {year} ({year === currentYear ? "แท่ง" : "เส้น"})
        </span>)}
      </div>
      <svg role="img" aria-label="กราฟเปรียบเทียบ Call รายเดือนแยกปี" viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {[0, .25, .5, .75, 1].map(ratio => {
          const value = Math.round(ceiling * ratio), py = y(value);
          return <g key={ratio}><line x1={padding.left} x2={width-padding.right} y1={py} y2={py} stroke="currentColor" strokeDasharray="4 4" className="text-slate-100 dark:text-slate-700" />
            <text x={padding.left - 12} y={py + 4} textAnchor="end" fontSize="13" fill="currentColor" className="text-slate-500 dark:text-slate-400">{value.toLocaleString()}</text></g>;
        })}
        {current.map((item: any, index: number) => <g key={item.name + item.year} data-year={item.year} data-chart-type="bar">
          {item.values.map((value: number | null, month: number) => value === null ? null : <g key={month}>
            <rect x={x(month) - current.length * barWidth / 2 + index * barWidth} y={y(value)} width={Math.max(2, barWidth - 2)} height={padding.top+plotHeight-y(value)} rx="3" fill={item.color} fillOpacity="0.8"><title>{tip(item, month, value)}</title></rect>
            {projection(item, month) !== null && <g data-testid="forecast-bar" data-actual={value} data-forecast={projection(item, month)}>
              <rect x={x(month) - current.length * barWidth / 2 + index * barWidth} y={y(projection(item, month)!)} width={Math.max(2,barWidth-2)} height={Math.max(0,y(value)-y(projection(item, month)!))} fill="#bae6fd" fillOpacity="0.7" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3"><title>ประมาณการปิดเดือน {thaiMonths[month]} {item.year}: {projection(item, month)!.toLocaleString()} Calls · ยอดจริง 1–{forecastInfo.day} {thaiMonths[month]}: {value.toLocaleString()} Calls</title></rect>
              {singleProduct && <g>
                <line x1={x(month)+barWidth/2} x2={width-padding.right+12} y1={y(projection(item, month)!)} y2={y(projection(item, month)!)} stroke="#0284c7" strokeDasharray="3 3" />
                <rect x={width-padding.right+12} y={y(projection(item, month)!)-54} width="158" height="52" rx="8" fill="#e0f2fe" stroke="#38bdf8" />
                <text x={width-padding.right+91} y={y(projection(item, month)!)-36} textAnchor="middle" fontSize="12" fill="#0c4a6e">ประมาณการปิดเดือน (30 วัน)</text>
                <text x={width-padding.right+91} y={y(projection(item, month)!)-15} textAnchor="middle" fontSize="17" fontWeight="800" fill="#075985">{projection(item, month)!.toLocaleString()} Calls</text>
                <rect x={width-padding.right+12} y={Math.max(y(value)+8,y(projection(item, month)!)+12)} width="158" height="56" rx="8" fill="#eef2ff" stroke="#a5b4fc" />
                <text x={width-padding.right+91} y={Math.max(y(value)+8,y(projection(item, month)!)+12)+17} textAnchor="middle" fontSize="12" fill="#312e81">ยอดจริง 1–{forecastInfo.day} {thaiMonths[month]} {item.year}</text>
                <text x={width-padding.right+91} y={Math.max(y(value)+8,y(projection(item, month)!)+12)+39} textAnchor="middle" fontSize="17" fontWeight="800" fill="#312e81">{value.toLocaleString()} Calls</text>
              </g>}
            </g>}
            {showNumbers && <text x={x(month)} y={y(value)-10} data-label-type="bar" data-label-month={month} textAnchor="middle" fontSize="13" fontWeight="bold" fill={item.color}>{value.toLocaleString()}</text>}
          </g>)}
        </g>)}
        {lines.map((item: any) => {
          const path = item.values.map((value: number | null, month: number) => value === null ? "" : `${month > 0 && item.values[month-1] !== null ? "L" : "M"}${x(month)},${y(value)}`).join(" ");
          return <g key={item.name+item.year} data-year={item.year} data-chart-type="line">
            <path d={path} fill="none" stroke={item.color} strokeWidth="3" strokeDasharray={years.indexOf(item.year) % 2 ? "6 4" : undefined} />
            {item.values.map((value: number | null, month: number) => value === null ? null : <g key={month}>
              <circle cx={x(month)} cy={y(value)} r="4" fill={item.color}><title>{tip(item,month,value)}</title></circle>
              {showNumbers && <text x={x(month)} y={lineLabelY(item,month)} data-label-type="line" data-label-month={month} textAnchor="middle" fontSize="13" fontWeight="bold" fill={item.color}>{value.toLocaleString()}</text>}
            </g>)}
          </g>;
        })}
        {thaiMonths.map((month,index)=><text key={month} x={x(index)} y={height-17} textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" className="text-slate-700 dark:text-slate-300">{month}</text>)}
      </svg>
      {hasProjection && <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">* {thaiMonths[forecastMonth]} {forecastYear} ยอดจริงจากข้อมูลวันที่ 1–{forecastInfo.day} · ประมาณการปิดเดือน = ยอดจริง ÷ {forecastInfo.day} × 30 วัน</p>}
      <div className="flex flex-wrap justify-center gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
        <button type="button" onClick={()=>setFocusedProduct(null)} aria-pressed={showCombined} className={`px-3 py-2 rounded-lg border text-sm font-bold transition-colors ${showCombined ? "bg-indigo-600 text-white border-indigo-600 shadow-sm" : "bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-200 border-indigo-200 dark:border-indigo-700"}`}>ทุกอุปกรณ์</button>
        {(data || []).map((product: any, index: number) => <button type="button" key={product.name} onClick={()=>setFocusedProduct(focusedProduct===product.name ? null : product.name)} aria-pressed={focusedProduct===product.name}
          className="px-3 py-2 rounded-lg border text-sm font-bold" style={{color:colors[index % colors.length],borderColor:focusedProduct===product.name ? colors[index % colors.length] : "transparent"}}>{product.name}</button>)}
      </div>
    </section>
  );
};

const YearMonthSummary = ({ months, totals, total, label = "สรุปรายปี", labelColumns = 2, tailColumns = 0, forecastInfo }: any) => {
  const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const thai = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
  const slots = (months || []).map((month: string, index: number) => {
    const parts = String(month).split("-");
    const m = names.findIndex((name,i)=>name.toLowerCase()===parts[0]?.trim().toLowerCase() || thai[i]===parts[0]?.trim());
    let year = Number(parts[1]?.trim());
    if (year < 100) year += 2000;
    if (year > 2400) year -= 543;
    return {m, year, value: Number(totals?.[index]) || 0};
  });
  const years = Array.from(new Set(slots.filter((s: any)=>s.m>=0 && Number.isFinite(s.year)).map((s: any)=>s.year))).sort((a: any,b: any)=>a-b) as number[];
  if (!years.length) return null;
  const latest = years[years.length-1];
  const valueAt = (year: number, month: number) => slots.find((s: any)=>s.year===year && s.m===month)?.value;
  const percent = (value: number, base: number | undefined) => base === undefined || base===0 ? null : (value-base)/base*100;
  const projectedSlot = forecastInfo ? slots[(months || []).indexOf(forecastInfo.label)] : null;
  const projected = projectedSlot && forecastInfo.day > 0 ? Math.round(projectedSlot.value / forecastInfo.day * 30) : null;
  const comparisonValue = (m: number) => projected !== null && projectedSlot.year === latest && projectedSlot.m === m ? projected : valueAt(latest,m);
  const yoy = thai.map((_,m)=>{const value=comparisonValue(m);return value===undefined ? null : percent(value,valueAt(latest-1,m));});
  const mom = thai.map((_,m)=>{const value=comparisonValue(m);return m===0||value===undefined ? null : percent(value,valueAt(latest,m-1));});
  const styleFor = (value: number | null) => value===null ? {} : {backgroundColor:value>0 ? (value>=20 ? "#fda4af" : "#fef3c7") : value<0 ? "#a7f3d0" : "#f1f5f9",color:value>0 ? "#881337" : value<0 ? "#064e3b" : "#334155"};
  const cell = {width:"auto",fontSize:"inherit",textAlign:"center" as const,border:"1px solid #cbd5e1",backgroundColor:"#f8fafc",color:"#0f172a",whiteSpace:"nowrap" as const};
  const labelStyle = {...cell,backgroundColor:"#eff6ff",color:"#1e3a8a",fontWeight:800};
  const tail = tailColumns>0 ? <td colSpan={tailColumns} aria-hidden="true" style={cell} /> : null;
  const changeRow = (title: string, changes: (number | null)[]) => <tr>
    <td colSpan={labelColumns} style={labelStyle}>{title}</td>
    {changes.map((value,i)=><td key={i} style={{...cell,...styleFor(value),fontWeight:700}} title={value===null ? "ไม่มีฐานข้อมูลสำหรับเปรียบเทียบ" : value.toFixed(2)+"%"}><span>{value===null ? "—" : (value>0 ? "+" : "")+value.toFixed(1)+"%"}</span></td>)}{tail}
  </tr>;
  return <tfoot data-testid="year-month-summary" className="year-month-footer sticky bottom-0 z-30 bg-white print:static" aria-label={label}>
    <tr><td colSpan={labelColumns+12+tailColumns} style={{...cell,backgroundColor:"#123e73",color:"white",fontWeight:800,textAlign:"center"}}>ผลรวมทั้งหมด และเปรียบเทียบปี และเดือน</td></tr>
    <tr><td colSpan={labelColumns} style={{...cell,backgroundColor:"#123e73",color:"white",fontWeight:800}}>ปี / เดือน</td>{thai.map(name=><td key={name} style={{...cell,backgroundColor:"#123e73",color:"white",fontWeight:800}}>{name}</td>)}{tail}</tr>
    {years.map(year=><tr key={year}><td colSpan={labelColumns} style={labelStyle}>{year}</td>{thai.map((_,m)=><td key={m} style={cell}><span>{valueAt(year,m)?.toLocaleString() || (valueAt(year,m)===0 ? "0" : "")}</span></td>)}{tail}</tr>)}
    {projected !== null && <tr data-testid="summary-forecast-row"><td colSpan={labelColumns} style={{...labelStyle,backgroundColor:"#dbeafe"}}>ประมาณการปิดเดือน {thai[projectedSlot.m]} {projectedSlot.year}</td>{thai.map((_,m)=><td key={m} style={{...cell,backgroundColor:"#e0f2fe",color:"#1e3a8a",fontWeight:800}}>{m===projectedSlot.m ? projected.toLocaleString() : "—"}</td>)}{tail}</tr>}
    {changeRow(`% เทียบปี ${latest} / ${latest-1}`,yoy)}
    {changeRow(`% เทียบเดือนปี ${latest}`,mom)}
    <tr><td colSpan={labelColumns+12+tailColumns} style={{...labelStyle,textAlign:"left"}}>Grand Total (รวมทั้งหมด): {Number(total||0).toLocaleString()} Calls{projected !== null && <span className="block text-right text-xs mt-1">* {thai[projectedSlot.m]} {projectedSlot.year} เปรียบเทียบโดยใช้ประมาณการปิดเดือนจากยอดจริงวันที่ 1–{forecastInfo.day} (ยอดจริง ÷ {forecastInfo.day} × 30 วัน)</span>}</td></tr>
  </tfoot>;
};

const ParetoChart = ({ data, title, subtitle, icon: Icon }: any) => {
  const topData = useMemo(() => (data || []).slice(0, 15), [data]);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (!expanded) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setExpanded(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [expanded]);

  const totalSum = useMemo(
    () => topData.reduce((sum: any, d: any) => sum + (d?.total || 0), 0),
    [topData]
  );
  const chartData = useMemo(() => {
    let cum = 0;
    return topData.map((d: any) => {
      cum += d?.total || 0;
      return { ...d, cumPercent: totalSum > 0 ? (cum / totalSum) * 100 : 0 };
    });
  }, [topData, totalSum]);

  const maxVal = useMemo(
    () => (chartData[0]?.total > 0 ? Math.ceil(chartData[0].total * 1.1) : 10),
    [chartData]
  );

  const width = expanded ? 1100 : 600,
    height = expanded ? 590 : 390,
    padding = { top: 55, right: 55, bottom: expanded ? 180 : 125, left: 65 };
  const innerWidth = width - padding.left - padding.right,
    innerHeight = height - padding.top - padding.bottom;
  const xStep = innerWidth / (chartData.length || 1);
  const barWidth = Math.min(xStep * 0.7, 45);

  const getX = (idx: any) => padding.left + idx * xStep + xStep / 2;
  const getRightY = (pct: any) =>
    padding.top + innerHeight - (pct / 100) * innerHeight;
  const linePoints = useMemo(
    () =>
      chartData
        .map((d: any, i: any) => `${getX(i)},${getRightY(d?.cumPercent || 0)}`)
        .join(" "),
    [chartData, width, height]
  );

  if (topData.length === 0) return null;
  return (
    <div role={expanded ? "dialog" : undefined} aria-modal={expanded || undefined} aria-label={expanded ? title : undefined} className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm p-6 flex flex-col transition-colors ${expanded ? "fixed inset-3 z-50 overflow-hidden shadow-2xl" : "w-full"}`}>
      <div className="flex justify-between items-start mb-3 shrink-0">
        <div>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base">{title}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
        </div>
        <div className="bg-rose-50 dark:bg-rose-900/30 p-2.5 rounded-lg text-rose-500 dark:text-rose-400">
          {Icon && <Icon className="w-6 h-6" />}
        </div>
      </div>
      <label className="flex items-center gap-2 self-end text-sm font-semibold text-indigo-600 dark:text-indigo-300 mb-4 cursor-pointer">
        <input type="checkbox" checked={expanded} onChange={(event) => setExpanded(event.target.checked)} className="w-4 h-4" />
        ดูกราฟขนาดเต็ม
      </label>
      <div className="flex justify-center gap-6 text-sm font-bold mb-3 shrink-0">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <span className="w-3.5 h-3.5 bg-indigo-600 dark:bg-indigo-400 rounded-sm"></span> จำนวน (Count)
        </span>
        <span className="flex items-center gap-2 text-rose-500 dark:text-rose-400">
          <span className="w-3.5 h-3.5 bg-rose-500 dark:bg-rose-400 rounded-full"></span> สะสม (Cumulative %)
        </span>
      </div>
      <div className={expanded ? "flex-1 min-h-0 w-full relative overflow-hidden" : "w-full relative"}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className={expanded ? "w-full h-full block" : "w-full h-auto overflow-visible"}
          style={expanded ? { width: "100%", height: "100%", maxHeight: "100%", minHeight: 0 } : undefined}
        >
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + innerHeight - ratio * innerHeight;
            return (
              <line
                key={`line-${ratio}`}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="currentColor"
                className="text-slate-100 dark:text-slate-700"
                strokeDasharray="3,3"
              />
            );
          })}
          {chartData.map((d: any, i: any) => {
            if (!d) return null;
            const h = ((d?.total || 0) / maxVal) * innerHeight;
            const y = padding.top + innerHeight - h;
            const safeName = d?.name || "";
            return (
              <g key={`bar-${i}`} className="group">
                <title>{`${safeName}: ${(d.total || 0).toLocaleString()} Calls · สะสม ${(d.cumPercent || 0).toFixed(1)}%`}</title>
                <rect
                  x={getX(i) - barWidth / 2}
                  y={y}
                  width={barWidth}
                  height={h}
                  fill="currentColor"
                  rx="4"
                  className="text-indigo-600 dark:text-indigo-500 transition-all duration-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                />
                <text x={getX(i)} y={padding.top + innerHeight + 18}
                  textAnchor="end" fontSize={expanded ? 13 : 11} fill="currentColor"
                  transform={`rotate(-55 ${getX(i)},${padding.top + innerHeight + 18})`}
                  className="text-slate-600 dark:text-slate-300" fontWeight="bold">
                  <title>{safeName}</title>
                  {Array.from(safeName).length > (expanded ? 32 : 18) ? Array.from(safeName).slice(0, expanded ? 32 : 18).join('') + '…' : safeName}
                </text>
              </g>
            );
          })}
          <polyline
            fill="none"
            stroke="currentColor"
            className="text-rose-500 dark:text-rose-400"
            strokeWidth="3"
            points={linePoints}
          />
          {chartData.map((d: any, i: any) => {
            if (!d) return null;
            return (
            <g key={`cum-${i}`}>
              <title>{`${d.name}: สะสม ${(d.cumPercent || 0).toFixed(1)}%`}</title>
              <>
              <text
                x={getX(i)}
                y={getRightY(d?.cumPercent || 0) - (i % 2 === 0 ? 14 : 34)}
                textAnchor="middle"
                fontSize="12"
                fontWeight="extrabold"
                stroke="currentColor"
                className="text-white dark:text-slate-800"
                strokeWidth="3.5"
                strokeLinejoin="round"
              >
                {(d?.cumPercent || 0).toFixed(1)}%
              </text>
              <text
                x={getX(i)}
                y={getRightY(d?.cumPercent || 0) - (i % 2 === 0 ? 14 : 34)}
                textAnchor="middle"
                fontSize="12"
                fontWeight="extrabold"
                fill="currentColor"
                className="text-rose-600 dark:text-rose-400"
              >
                {(d?.cumPercent || 0).toFixed(1)}%
              </text>
              </>
              <circle
                cx={getX(i)}
                cy={getRightY(d?.cumPercent || 0)}
                r="5"
                fill="#f43f5e"
                stroke="#be123c"
                strokeWidth="2.5"
              />
            </g>
          )})}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + innerHeight - ratio * innerHeight;
            const val = Math.round(ratio * maxVal);
            return (
              <text
                key={`l-${ratio}`}
                x={padding.left - 12}
                y={y + 5}
                textAnchor="end"
                fontSize="13"
                fill="currentColor"
                className="text-slate-500 dark:text-slate-400"
                fontWeight="bold"
              >
                {val.toLocaleString()}
              </text>
            );
          })}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + innerHeight - ratio * innerHeight;
            const val = Math.round(ratio * 100);
            return (
              <text
                key={`r-${ratio}`}
                x={width - padding.right + 12}
                y={y + 5}
                textAnchor="start"
                fontSize="13"
                fill="currentColor"
                className="text-slate-500 dark:text-slate-400"
                fontWeight="bold"
              >
                {val}%
              </text>
            );
          })}
        </svg>
      </div>

    </div>
  );
};

const Sparkline = ({ data, forecast }: any) => {
  if (!data || data.length === 0) return null;
  const len = data.length;
  const max = Math.max(...data, forecast || 1, 1);
  const width = 160, height = 50; 
  const xStep = width / Math.max(len - 1, 1);

  let forecastTrend = 0,
    trendText = "",
    trendColorClass = "text-slate-400 dark:text-slate-500",
    strokeColor = "#94a3b8";

  if (forecast !== undefined && len >= 2) {
    const prevMonthVal = data[len - 2];
    if (prevMonthVal > 0)
      forecastTrend = ((forecast - prevMonthVal) / prevMonthVal) * 100;
    else if (forecast > 0) forecastTrend = 100;

    if (forecastTrend > 0) {
      trendText = `+${forecastTrend.toFixed(1)}%`;
      trendColorClass = "text-rose-600 dark:text-rose-500";
      strokeColor = "currentColor"; // Will inherit from parent class
    } else if (forecastTrend < 0) {
      trendText = `${forecastTrend.toFixed(1)}%`;
      trendColorClass = "text-emerald-500 dark:text-emerald-400";
      strokeColor = "currentColor";
    } else {
      trendText = `0.0%`;
      trendColorClass = "text-slate-400 dark:text-slate-500";
      strokeColor = "currentColor";
    }
  } else {
    strokeColor = "currentColor";
  }

  const mainPointsArr = data.slice(0, len - 1).map((val: any, i: any) => ({
    x: i * xStep,
    y: height - (val / max) * height * 0.7 - 6
  }));
  const mainPoints = mainPointsArr.map((p: any) => `${p.x},${p.y}`).join(" ");

  let forecastPoints = "",
    lastX = 0,
    lastY = 0;

  if (forecast !== undefined && len >= 2) {
    const prev = mainPointsArr[mainPointsArr.length - 1];
    const curForecastX = (len - 1) * xStep;
    const curForecastY = height - (forecast / max) * height * 0.7 - 6;
    forecastPoints = `${prev.x},${prev.y} ${curForecastX},${curForecastY}`;
    lastX = curForecastX;
    lastY = curForecastY;
  } else {
    lastX = (len - 1) * xStep;
    lastY = height - (data[len - 1] / max) * height * 0.7 - 6;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-w-0">
      {forecast !== undefined && len >= 2 && (
        <div
          className={`text-sm font-extrabold w-full text-right pr-2 mb-1.5 ${trendColorClass}`}
        >
          {trendText}
        </div>
      )}
      <svg role="img" aria-label="กราฟประมาณการ" viewBox={`-4 -4 ${width+8} ${height+8}`} width={width} height={height} className={`w-full overflow-visible mx-auto ${forecastTrend > 0 ? "text-rose-600 dark:text-rose-500" : forecastTrend < 0 ? "text-emerald-500 dark:text-emerald-400" : "text-slate-400 dark:text-slate-500"}`}>
        {len > 1 && (
          <polyline
            fill="none"
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={mainPoints}
          />
        )}
        {forecast !== undefined && (
          <polyline
            fill="none"
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeDasharray="5,5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={forecastPoints}
          />
        )}
        {mainPointsArr.map((p: any, i: any) => (
          <circle key={`dot-${i}`} cx={p.x} cy={p.y} r="2.5" fill={strokeColor} />
        ))}
        <circle cx={lastX} cy={lastY} r="3.5" fill={strokeColor} />
      </svg>
    </div>
  );
};

const MonthlyWorkloadChart = ({ data }: any) => {
  if (!data || data.length === 0) return null;

  const maxTotal = Math.max(...data.map((d: any) => d.total), 1);
  const maxVal = maxTotal * 1.3; 
  const width = 1000, height = 320;
  const padding = { top: 40, right: 30, bottom: 60, left: 30 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  const xStep = innerWidth / data.length;
  const getX = (idx: any) => padding.left + (idx * xStep) + (xStep / 2);
  const getY = (val: any) => padding.top + innerHeight - ((val / maxVal) * innerHeight);

  const points = data.map((d: any, i: any) => ({ x: getX(i), y: getY(d.total) }));
  const pathData = generateSmoothPath(points);

  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-[700px] overflow-visible">
        {/* Bars */}
        {data.map((d: any, i: any) => {
          const barH = (d.total / maxVal) * innerHeight;
          const barY = padding.top + innerHeight - barH;
          const barW = Math.min(xStep * 0.5, 60);
          const x = getX(i);
          const r = 8;
          const path = `M ${x - barW/2},${barY + barH} L ${x - barW/2},${barY + r} A ${r},${r} 0 0 1 ${x - barW/2 + r},${barY} L ${x + barW/2 - r},${barY} A ${r},${r} 0 0 1 ${x + barW/2},${barY + r} L ${x + barW/2},${barY + barH} Z`;

          return (
            <path
              key={`bar-${i}`}
              d={path}
              fill="currentColor"
              className="text-indigo-500 dark:text-indigo-600 transition-all duration-300 hover:text-indigo-400 dark:hover:text-indigo-500"
            />
          );
        })}

        {/* Trend Line */}
        {data.length > 1 && (
          <path
            d={pathData}
            fill="none"
            stroke="currentColor"
            className="text-amber-500 dark:text-amber-400 drop-shadow-md"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Points & Labels */}
        {data.map((d: any, i: any) => {
          const x = getX(i);
          const y = getY(d.total);
          const thDate = formatMonthThaiSplit(d.month);
          return (
            <g key={`pt-${i}`}>
              <circle cx={x} cy={y} r="6" fill="currentColor" stroke="currentColor" className="text-white dark:text-slate-800 drop-shadow-sm" style={{ stroke: 'var(--tw-text-opacity, 1) rgba(245, 158, 11, 1)' }} strokeWidth="3.5" />
              {/* Text Outline for readability */}
              <text x={x} y={y - 15} textAnchor="middle" fontSize="16" fontWeight="900" stroke="currentColor" className="text-white dark:text-slate-800" strokeWidth="4" strokeLinejoin="round">
                {d.total.toLocaleString()}
              </text>
              <text x={x} y={y - 15} textAnchor="middle" fontSize="16" fontWeight="900" fill="currentColor" className="text-slate-800 dark:text-slate-100">
                {d.total.toLocaleString()}
              </text>
              <g transform={`translate(${x}, ${height - 25})`}>
                <text textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" className="text-slate-700 dark:text-slate-300">{thDate.m}</text>
                <text textAnchor="middle" y="18" fontSize="12" fontWeight="bold" fill="currentColor" className="text-slate-400 dark:text-slate-500">{thDate.y}</text>
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  );
};

const SearchableDropdown = ({
  label,
  options,
  selectedValues,
  onChange,
  count,
  isHighlight = false,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = (options || []).filter((opt: any) =>
    String(opt || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  const isAllSelected = selectedValues.length === 0;

  const toggleOption = (opt: any) => {
    if (selectedValues.includes(opt))
      onChange(selectedValues.filter((v: any) => v !== opt));
    else onChange([...selectedValues, opt]);
  };

  const selectAll = () => onChange([]);
  const displayValue = isAllSelected
    ? `ทั้งหมด (${count})`
    : selectedValues.length === 1
    ? selectedValues[0]
    : `เลือกแล้ว ${selectedValues.length} รายการ`;
  const baseClass = isHighlight
    ? "bg-indigo-50 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/60"
    : "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700";

  return (
    <div className="relative text-left" ref={dropdownRef}>
      <label className="block text-sm font-extrabold text-slate-500 dark:text-slate-400 uppercase mb-2 truncate">
        {label}
      </label>
      <div
        className={`w-full text-sm font-bold border rounded-xl p-3 outline-none cursor-pointer flex justify-between items-center transition-colors shadow-sm ${baseClass} ${
          !isAllSelected ? "ring-2 ring-indigo-400 dark:ring-indigo-500 ring-offset-1 dark:ring-offset-slate-900" : ""
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setSearchTerm("");
        }}
      >
        <span className="truncate pr-2">{displayValue}</span>
        <ChevronDown className="w-4 h-4 opacity-70 flex-shrink-0" />
      </div>

      {isOpen && (
        <div className="absolute left-0 z-50 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden">
          <div className="p-3 border-b border-slate-100 dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-800/90 flex items-center gap-3">
            <Search className="w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0 ml-1" />
            <input
              type="text"
              className="w-full text-sm bg-transparent outline-none py-1.5 placeholder-slate-400 dark:placeholder-slate-500 font-bold text-slate-700 dark:text-slate-200"
              placeholder="พิมพ์คำค้นหา..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <div className="overflow-y-auto overflow-x-hidden custom-scrollbar max-h-72">
            <div
              className={`px-4 py-3.5 text-sm cursor-pointer transition-colors flex items-center gap-3 ${
                isAllSelected
                  ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold"
                  : "text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700/50"
              }`}
              onClick={selectAll}
            >
              <input
                type="checkbox"
                checked={isAllSelected}
                readOnly
                className="w-4 h-4 text-indigo-600 rounded border-slate-300 pointer-events-none"
              />
              <span className="truncate">เลือกทั้งหมด ({count})</span>
            </div>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt: any) => {
                const isSelected = selectedValues.includes(opt);
                return (
                  <div
                    key={opt}
                    className={`px-4 py-3.5 text-sm cursor-pointer transition-colors border-t border-slate-50 dark:border-slate-700 flex items-center gap-3 ${
                      isSelected
                        ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold"
                        : "text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700/50"
                    }`}
                    onClick={() => toggleOption(opt)}
                    title={opt}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      className="w-4 h-4 text-indigo-600 rounded border-slate-300 pointer-events-none"
                    />
                    <span className="truncate">{opt}</span>
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-6 text-sm text-slate-400 dark:text-slate-500 text-center font-bold">
                ไม่พบคำว่า "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const fileInputRef = useRef<any>(null);

  const [rawData, setRawData] = useState<any[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState("");
  const [loadError, setLoadError] = useState("");
  
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [sheetUrl, setSheetUrl] = useState(DEFAULT_SHEET_URL);

  const hasAutoFetched = useRef(false);

  // เพิ่ม State ตรวจสอบการโหลด CSS Tailwind
  const [isTailwindLoaded, setIsTailwindLoaded] = useState(false);

  const [dynamicLists, setDynamicLists] = useState<any>({
    months: [],
    products: [],
    callTypes: [],
    problems: [],
    systems: [],
    damagedParts: [],
    causes: [],
    areas: [],
    teams: [],
    branches: [],
  });

  const [filterCallType, setFilterCallType] = useState<any[]>([]);
  const [filterProduct, setFilterProduct] = useState<any[]>([]);
  const [filterProblem, setFilterProblem] = useState<any[]>([]);
  const [filterCause, setFilterCause] = useState<any[]>([]);
  const [filterDamagedPart, setFilterDamagedPart] = useState<any[]>([]);
  const [filterSystem, setFilterSystem] = useState<any[]>([]);
  const [filterArea, setFilterArea] = useState<any[]>([]);
  const [filterTeam, setFilterTeam] = useState<any[]>([]);
  const [filterMonth, setFilterMonth] = useState<any[]>([]);

  const [branchSearch, setBranchSearch] = useState("");

  const [crossFilters, setCrossFilters] = useState<any>({
    product: new Set(),
    problem: new Set(),
    system: new Set(),
    damagedPart: new Set(),
    cause: new Set(),
    area: new Set(),
    team: new Set(),
    storeCode: new Set(),
  });

  const [sortMonthsByTable, setSortMonthsByTable] = useState<Record<string, string[]>>({});
  const [rowLimits, setRowLimits] = useState<any>({
    sec1: 15,
    sec2: 15,
    sec3: 15,
    sec4: 15,
    sec5: 15,
    sec6: 30,
    sec7: 15,
    sec8: 15,
  });

  const [openSections, setOpenSections] = useState<any>({
    sec1: true,
    sec2: true,
    sec3: true,
    sec4: true,
    sec5: true,
    sec6: true,
    sec7: true,
    sec8: true,
  });

  // ✨ โหลดสคริปต์ Tailwind CSS พร้อมตั้งค่า Dark Mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ตรวจสอบ Theme เริ่มต้น
      const checkTheme = () => {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
          setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove('dark');
          setIsDarkMode(false);
        }
      };
      
      checkTheme();

      const setupTailwindConfig = () => {
        if ((window as any).tailwind) {
          (window as any).tailwind.config = {
            darkMode: 'class', // <--- จุดแก้ปัญหาที่ทำให้โหมดกลางคืนทำงานบน Vercel ได้
          };
        }
      };

      // ตรวจสอบว่ามี script tailwind หรือยัง
      if (document.getElementById("tailwind-script") || (window as any).tailwind) {
        setupTailwindConfig();
        setIsTailwindLoaded(true);
        return;
      }
      
      const script = document.createElement("script");
      script.id = "tailwind-script";
      script.src = "https://cdn.tailwindcss.com";
      script.onload = () => {
        setupTailwindConfig();
        setIsTailwindLoaded(true);
      };
      document.head.appendChild(script);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const toggleSection = (sec: any) =>
    setOpenSections((prev: any) => ({ ...prev, [sec]: !prev[sec] }));

  const resetFilters = () => {
    setSortMonthsByTable({});
    setFilterProduct([]);
    setFilterCallType([]);
    setFilterProblem([]);
    setFilterCause([]);
    setFilterDamagedPart([]);
    setFilterSystem([]);
    setFilterArea([]);
    setFilterTeam([]);
    setFilterMonth([]);
    setBranchSearch("");
    setCrossFilters({
      product: new Set(),
      problem: new Set(),
      system: new Set(),
      damagedPart: new Set(),
      cause: new Set(),
      area: new Set(),
      team: new Set(),
      storeCode: new Set(),
    });
    setRowLimits({
      sec1: 15,
      sec2: 15,
      sec3: 15,
      sec4: 15,
      sec5: 15,
      sec6: 30,
      sec7: 15,
      sec8: 15,
    });
  };

  // ==========================================
  // 3. ระบบดึงข้อมูลหลัก และฟังก์ชัน Load Demo
  // ==========================================

  useEffect(() => {
    if (!hasAutoFetched.current) {
      hasAutoFetched.current = true;
      if (typeof window !== "undefined") {
        loadFromGoogleSheet(DEFAULT_SHEET_URL);
      }
    }
  }, []);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    setIsProcessing(true);
    setLoadError("");
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const success = processCSVData(event.target.result, false);
      if (!success) {
        setIsProcessing(false);
      }
    };
    reader.onerror = () => {
      setLoadError("ไม่สามารถอ่านไฟล์ได้ กรุณาลองใหม่อีกครั้ง");
      setIsProcessing(false);
    };
    reader.readAsText(file, "UTF-8");
    e.target.value = "";
  };

  const handleLoadDemoData = () => {
    setIsProcessing(true);
    setLoadError("");
    setTimeout(() => {
      const demoCsv = generateDemoData();
      setFileName("ข้อมูลจำลอง (Demo Data)");
      processCSVData(demoCsv, false);
      setIsProcessing(false);
    }, 600);
  };

  const loadFromGoogleSheet = async (url: any) => {
    setIsProcessing(true);
    setLoadError("");
    try {
      let fetchUrl = url;
      if (url.includes("/edit") || url.includes("/view")) {
        const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (match)
          fetchUrl = `https://docs.google.com/spreadsheets/d/${match[1]}/export?format=csv`;
      }

      const proxies = [
        fetchUrl,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(fetchUrl)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(fetchUrl)}`,
      ];

      let text = "";
      let sourceFileName = "";
      let success = false;
      let authError = false;

      for (let i = 0; i < proxies.length; i++) {
        try {
          const res = await fetch(proxies[i]);
          if (res.ok) {
            const resText = await res.text();
            const lowerText = resText.trim().toLowerCase();
            if (lowerText.startsWith("<!doctype html>") || lowerText.startsWith("<html")) {
              if (i === 0) authError = true; 
              continue;
            }
            text = resText;
            const disposition = res.headers.get("Content-Disposition") || "";
            const plainName = disposition.match(/filename\s*=\s*"([^"]+)"/i)
              || disposition.match(/filename\s*=\s*([^;\s]+)/i);
            const encodedName = disposition.match(/filename\*\s*=\s*UTF-8''([^;]+)/i);
            sourceFileName = plainName?.[1] || "";
            if (!sourceFileName && encodedName) {
              try { sourceFileName = decodeURIComponent(encodedName[1]); } catch { /* Use source label if unavailable. */ }
            }
            success = true;
            break;
          }
        } catch (e) {
          console.warn(`เชื่อมต่อช่องทาง ${i + 1} ไม่สำเร็จ...`);
        }
      }

      if (!success) {
        if (authError) {
          throw new Error("ลิงก์ Google Sheet ของคุณไม่ได้ตั้งค่า 'Publish to web' (เป็น Private)");
        } else {
          throw new Error("ถูกบล็อกการเชื่อมต่อ (CORS Error) หรือลิงก์หมดอายุ");
        }
      }

      const parseSuccess = processCSVData(text, true);
      if (!parseSuccess) {
        throw new Error("คอลัมน์ไม่ตรงกับระบบ กรุณาตรวจสอบหัวตาราง (Headers) ในไฟล์ของคุณ");
      }
      setFileName((sourceFileName || SHEET_SOURCES.find(source => source.url === url)?.name || "Google Sheet").replace(/\.csv$/i, ""));
    } catch (error: any) {
      console.error("Fetch Error:", error);
      setLoadError(`${error.message}`);
      setIsProcessing(false);
    }
  };

  const processCSVData = (csvText: any, isAutoLoad = false) => {
    try {
      const parsedArray = csvToArray(csvText);
      if (parsedArray.length < 2) throw new Error("ไฟล์ว่างเปล่าหรือมีรูปแบบไม่ถูกต้อง");

      const headers = parsedArray[0].map((h: any) => (h ? h.trim() : ""));
      const callTypeIndex = headers.findIndex((h: string) => ["calltype", "ประเภทcall", "ประเภทการแจ้ง", "ประเภทงาน"].includes(h.toLowerCase().replace(/[\s_-]/g, "")));
      const readCallType = (row: any[]) => {
        const value = callTypeIndex >= 0 ? String(row[callTypeIndex] || "").trim() : "";
        return !value || value.toUpperCase() === "NULL" ? "ไม่ได้ระบุ" : value.toUpperCase();
      };
      const records: any[] = [];
      const branchMap = new Map();

      const monthHeaderIndices: any[] = [];
      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค.", "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.",
      ];

      headers.forEach((h: any, index: any) => {
        const lowerH = h.toLowerCase();
        const containsMonth = monthNames.some((m) =>
          lowerH.startsWith(m.toLowerCase())
        );
        if (
          containsMonth &&
          !lowerH.includes("total") &&
          !lowerH.includes("%") &&
          !lowerH.includes("เทียบ")
        ) {
          monthHeaderIndices.push({ index, label: h });
        }
      });

      if (
        monthHeaderIndices.length > 0 &&
        !headers.includes("Ticket Number")
      ) {
        let categoryColIndex = 0;
        headers.forEach((h: any, index: any) => {
          const lowerH = h.toLowerCase();
          if (
            lowerH.includes("product") || lowerH.includes("equipment") ||
            lowerH.includes("ประเภท") || lowerH.includes("อาการ")
          ) {
            categoryColIndex = index;
          }
        });

        // ใช้ .forEach() แทน for loop เพื่อข้าม Infinite Loop Protector ของ CodeSandbox
        parsedArray.slice(1).forEach((row: any, index: any) => {
          const i = index + 1;
          if (row.length <= 1 && row[0] === "") return;

          const categoryValue = row[categoryColIndex]
            ? row[categoryColIndex].trim()
            : "ไม่ได้ระบุ";
          if (
            categoryValue.toLowerCase().includes("grand total") ||
            categoryValue.toLowerCase().includes("รวมทั้งหมด") ||
            categoryValue === ""
          )
            return;

          monthHeaderIndices.forEach(({ index: mColIdx, label: mLabel }) => {
            const valStr = row[mColIdx]
              ? row[mColIdx].trim().replace(/,/g, "")
              : "";
            const val = parseInt(valStr, 10);
            if (!isNaN(val) && val > 0) {
              let normMonth = mLabel;
              const mParts = mLabel.split("-");
              if (mParts.length === 2) {
                let yr = mParts[1].trim();
                if (yr.length === 2) yr = "20" + yr;
                normMonth = `${mParts[0].trim()}-${yr}`;
              }

              records.push({
                id: `SYN-${i}-${normMonth}`,
                rawCreateDate: `01/${normMonth.replace("-", "/")}`,
                equipment: categoryValue,
                month: normMonth,
                product: categoryValue,
                callType: readCallType(row),
                problem: "ไม่ได้ระบุ",
                system: "ไม่ได้ระบุ",
                damagedPart: "ไม่ได้ระบุ",
                cause: "ไม่ได้ระบุ",
                area: "ไม่ได้ระบุ",
                team: "ไม่ได้ระบุ",
                storeCode: "B-SYN",
                storeName: "สาขารวมประมวลผล",
                calls: val,
              });
            }
          });
        });
      } else {
        const hasStandardColumns = headers.some((h: any) => 
          h.toLowerCase().includes("ticket") || 
          h.toLowerCase().includes("product") || 
          h.toLowerCase().includes("month")
        );

        if (!hasStandardColumns && !isAutoLoad) {
          throw new Error("หาคอลัมน์มาตรฐานไม่พบ");
        }

        // ใช้ .forEach() แทน for loop
        parsedArray.slice(1).forEach((row: any, index: any) => {
          const i = index + 1;
          if (row.length === 1 && row[0] === "") return;

          const record: any = {};
          headers.forEach((header: any, idx: any) => {
            record[header] = row[idx] ? row[idx].trim() : "NULL";
          });

          const getValue = (key: any) =>
            record[key] && record[key] !== "NULL" && record[key] !== ""
              ? record[key]
              : "ไม่ได้ระบุ";

          const findCol = (keywords: any) => {
            for (let k of keywords) {
              const matchedHeader = headers.find((h: any) => h.toLowerCase().includes(k.toLowerCase()));
              if (matchedHeader) return record[matchedHeader];
            }
            return null;
          };

          const mappedRecord = {
            id: findCol(["Ticket Number", "Ticket", "ID"]) || `ID-${i}`,
            rawCreateDate: findCol(["Create Date", "Date", "วันที่"]) || "ไม่ได้ระบุ",
            equipment: findCol(["Equipment", "รหัสอุปกรณ์"]) || "ไม่ได้ระบุ",
            month: normalizeMonthString(findCol(["Month", "เดือน"]) || "Unknown"),
            callType: readCallType(row),
            product: findCol(["Product Type", "Product", "กลุ่มสินค้า"]) || getValue("Product Type"),
            problem: findCol(["Problem Type", "Problem", "อาการเสีย"]) || getValue("Problem Type"),
            system: findCol(["System", "ระบบ"]) || getValue("System"),
            damagedPart: findCol(["Damaged Parts", "Part", "ชิ้นส่วน"]) || getValue("Damaged Parts (ชิ้นส่วนที่เสียหาย)"),
            cause: findCol(["Cause", "สาเหตุ"]) || getValue("Cause สาเหตุ"),
            area: findCol(["Area", "พื้นที่"]) || getValue("Area"),
            team: findCol(["Team", "ทีม"]) || getValue("Team"),
            storeCode: findCol(["Store Code", "รหัสสาขา"]) || `UNK-${i}`,
            storeName: findCol(["Store Name", "ชื่อสาขา"]) || "ไม่ได้ระบุ",
            calls: 1,
          };

          if (mappedRecord) records.push(mappedRecord);
          
          if (mappedRecord.storeCode && !branchMap.has(mappedRecord.storeCode)) {
            branchMap.set(mappedRecord.storeCode, {
              id: mappedRecord.storeCode,
              name: mappedRecord.storeName,
              area: mappedRecord.area,
              team: mappedRecord.team,
            });
          }
        });
      }

      if (records.length === 0) throw new Error("ไม่พบข้อมูลที่จะนำมาสร้างกราฟได้");

      // เปลี่ยนจากการใช้ ...new Set() ตรงๆ เป็น Array.from() เพื่อแก้ปัญหา TypeScript (ts 2802)
      const getUnique = (key: any) =>
        Array.from(new Set(records.map((r: any) => r[key]))).filter(
          (v: any) => v !== "ไม่ได้ระบุ" && v !== "Unknown"
        );
      
      const rawMonths = Array.from(new Set(records.map((r: any) => r.month))).filter(
        (m: any) => m !== "Unknown"
      );

      const branches = Array.from(branchMap.values());
      if (branches.length === 0) {
        branches.push({
          id: "B-SYN",
          name: "สาขารวมประมวลผล",
          area: "ไม่ได้ระบุ",
          team: "ไม่ได้ระบุ",
        });
      }

      setDynamicLists({
        months: sortMonths(rawMonths),
        products: getUnique("product").sort(),
        callTypes: Array.from(new Set(records.map((r: any) => r.callType))).sort(),
        problems: getUnique("problem").sort(),
        systems: getUnique("system").sort(),
        damagedParts: getUnique("damagedPart").sort(),
        causes: getUnique("cause").sort(),
        areas: getUnique("area").sort(),
        teams: getUnique("team").sort(),
        branches: branches,
      });

      setRawData(records);
      setIsDataLoaded(true);
      setLoadError("");
      resetFilters();
      setIsProcessing(false);
      return true;
    } catch (error: any) {
      console.warn("Parse Failed.", error);
      if (isAutoLoad) {
        throw error;
      } else {
        setLoadError(`ข้อมูลไม่ถูกต้อง: ${error.message}`);
        return false;
      }
    }
  };

  const globalFilteredRecords = useMemo(() => {
    if (!isDataLoaded) return [];
    const callTypeSet = filterCallType.length > 0 ? new Set(filterCallType) : null;
    const productSet = filterProduct.length > 0 ? new Set(filterProduct) : null;
    const problemSet = filterProblem.length > 0 ? new Set(filterProblem) : null;
    const causeSet = filterCause.length > 0 ? new Set(filterCause) : null;
    const partSet =
      filterDamagedPart.length > 0 ? new Set(filterDamagedPart) : null;
    const systemSet = filterSystem.length > 0 ? new Set(filterSystem) : null;
    const areaSet = filterArea.length > 0 ? new Set(filterArea) : null;
    const teamSet = filterTeam.length > 0 ? new Set(filterTeam) : null;
    const monthSet = filterMonth.length > 0 ? new Set(filterMonth) : null;
    
    // เปลี่ยนมาใช้ .filter แทน for loop ช่วยเลี่ยง Loop Protector ของ CodeSandbox ได้ 100%
    return rawData.filter((rec: any) => {
      if (callTypeSet && !callTypeSet.has(rec.callType)) return false;
      if (productSet && !productSet.has(rec.product)) return false;
      if (problemSet && !problemSet.has(rec.problem)) return false;
      if (causeSet && !causeSet.has(rec.cause)) return false;
      if (partSet && !partSet.has(rec.damagedPart)) return false;
      if (systemSet && !systemSet.has(rec.system)) return false;
      if (areaSet && !areaSet.has(rec.area)) return false;
      if (teamSet && !teamSet.has(rec.team)) return false;
      if (monthSet && !monthSet.has(rec.month)) return false;
      return true;
    });
  }, [
    rawData,
    isDataLoaded,
    filterProduct,
    filterCallType,
    filterProblem,
    filterCause,
    filterDamagedPart,
    filterSystem,
    filterArea,
    filterTeam,
    filterMonth,
  ]);

  const dashboardFilteredRecords = useMemo(() => {
    const activeFields = Object.keys(crossFilters).filter(
      (f) => crossFilters[f] && crossFilters[f].size > 0
    );
    if (activeFields.length === 0) return globalFilteredRecords;
    
    // ใช้ .filter และ .every เพื่อให้ปลอดภัยจาก CodeSandbox Loop Limits
    return globalFilteredRecords.filter((r: any) => {
      return activeFields.every((f) => crossFilters[f].has(r[f]));
    });
  }, [globalFilteredRecords, crossFilters]);

  const handleExportCSV = async () => {
    if (isExporting || dashboardFilteredRecords.length === 0) return;
    setIsExporting(true);
    setExportStatus("กำลังเตรียมไฟล์ CSV...");
    const columns = [
      ["Ticket Number", "id"], ["Create Date", "rawCreateDate"],
      ["Equipment", "equipment"], ["Month", "month"],
      ["Call Type", "callType"], ["Product Type", "product"], ["Problem Type", "problem"],
      ["System", "system"], ["Damaged Parts", "damagedPart"],
      ["Cause", "cause"], ["Area", "area"], ["Team", "team"],
      ["Store Code", "storeCode"], ["Store Name", "storeName"], ["Calls", "calls"],
    ];
    const escapeCell = (value: any) => {
      let text = String(value ?? "");
      if (typeof value === "string" && /^[\s]*[=+@-]/.test(text)) text = "'" + text;
      return '"' + text.replace(/"/g, '""') + '"';
    };
    try {
      const rows = dashboardFilteredRecords.slice();
      const chunks: string[] = ["\uFEFF", columns.map(([header]) => escapeCell(header)).join(",") + "\r\n"];
      for (let offset = 0; offset < rows.length; offset += 5000) {
        await new Promise(resolve => setTimeout(resolve, 0));
        chunks.push(rows.slice(offset, offset + 5000).map((row: any) =>
          columns.map(([, key]) => escapeCell(row[key])).join(",")
        ).join("\r\n") + "\r\n");
      }
      const blob = new Blob(chunks, { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const name = (fileName || "maintenance-dashboard").replace(/\.csv$/i, "").replace(/[<>:"/\\|?*\x00-\x1f]/g, "_");
      link.href = url;
      link.download = name + "-filtered.csv";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 30000);
      setExportStatus("เตรียมไฟล์แล้ว " + rows.length.toLocaleString() + " แถว");
    } catch (error) {
      console.error("CSV export failed", error);
      setExportStatus("สร้างไฟล์ CSV ไม่สำเร็จ กรุณาลองอีกครั้ง");
    } finally {
      setIsExporting(false);
    }
  };

  const totalCallsCount = useMemo(
    () => dashboardFilteredRecords.reduce((acc: any, curr: any) => acc + curr.calls, 0),
    [dashboardFilteredRecords]
  );

  // Keep the complete month list in the filter; use selected months throughout charts and tables.
  const visibleMonths = useMemo(() => {
    if (filterMonth.length === 0) return dynamicLists.months;
    const selected = new Set(filterMonth);
    return dynamicLists.months.filter((month: string) => selected.has(month));
  }, [dynamicLists.months, filterMonth]);

  // Keep the complete month list in the filter; use selected months throughout charts and tables.
  

  const latestMonthMaxDay = useMemo(() => {
    if (!isDataLoaded || visibleMonths.length === 0) return 1;
    const latestMonth = visibleMonths[visibleMonths.length - 1];
    let maxDay = 1;
    
    // เปลี่ยนจาก for loop เป็น forEach
    rawData.forEach((r: any) => {
      if (r.month === latestMonth && r.rawCreateDate) {
        // CSV uses day/month/year, e.g. 8/10/2026 21:12.
        const dateText = String(r.rawCreateDate).trim();
        const localDate = dateText.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s|$)/);
        const isoDate = dateText.match(/^(\d{4})-(\d{2})-(\d{2})(?:T|\s|$)/);
        if (localDate || isoDate) {
          const day = Number(localDate ? localDate[1] : isoDate![3]);
          const month = Number(localDate ? localDate[2] : isoDate![2]);
          let year = Number(localDate ? localDate[3] : isoDate![1]);
          if (year > 2400) year -= 543;
          const date = new Date(year, month - 1, day);
          if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day && day > maxDay) maxDay = day;
        }
      }
    });
    return maxDay;
  }, [rawData, visibleMonths, isDataLoaded]);

  const isLatestMonthClosed = useMemo(() => {
    const selectedMonth = visibleMonths[visibleMonths.length - 1];
    if (!selectedMonth) return false;
    // A month preceding a later month in the file is already closed.
    const fileMonthIndex = dynamicLists.months.indexOf(selectedMonth);
    if (fileMonthIndex >= 0 && fileMonthIndex < dynamicLists.months.length - 1) return true;
    return rawData.some((record: any) => {
      if (record.month !== selectedMonth) return false;
      const text = String(record.rawCreateDate || '').trim();
      const local = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s|$)/);
      const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})(?:T|\s|$)/);
      if (!local && !iso) return false;
      let year = Number(local ? local[3] : iso![1]);
      if (year > 2400) year -= 543;
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const th = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
      const monthIndex = months.findIndex((m, i) => String(selectedMonth).startsWith(m) || String(selectedMonth).startsWith(th[i]));
      if (monthIndex < 0) return false;
      const lastDay = new Date(year, monthIndex + 1, 0).getDate();
      return local
        ? (Number(local[1]) === lastDay && Number(local[2]) === monthIndex + 1) || (Number(local[2]) === lastDay && Number(local[1]) === monthIndex + 1)
        : Number(iso![2]) === monthIndex + 1 && Number(iso![3]) === lastDay;
    });
  }, [rawData, visibleMonths, dynamicLists.months]);
  const showForecast = !isLatestMonthClosed;
  const forecastInfo = showForecast && visibleMonths.length > 0 ? {label: visibleMonths[visibleMonths.length-1], day: latestMonthMaxDay} : null;

  
  

  const aggregatedStats = useMemo(() => {
    if (!isDataLoaded) return {};
    const months = visibleMonths;
    const numMonths = months.length;
    const monthToIndex: any = {};
    
    // เปลี่ยนจาก for loop เป็น forEach
    months.forEach((m: any, i: number) => { monthToIndex[m] = i; });
    
    const fields = [
      "product",
      "problem",
      "system",
      "damagedPart",
      "cause",
      "area",
      "team",
    ];
    const activeFields = fields.filter((f) => crossFilters[f] && crossFilters[f].size > 0);
    const activeStoreFilters = crossFilters["storeCode"] && crossFilters["storeCode"].size > 0;
    const structures: any = {};
    
    fields.forEach(f => { structures[f] = {}; });
    structures["storeCode"] = {};

    // เปลี่ยนมาใช้ .forEach ร่วมกับ .every แทน For Loop ป้องกันการถูก Sandbox ตัดจบ
    globalFilteredRecords.forEach((r: any) => {
      const mIdx = monthToIndex[r.month];
      const hasValidMonth = mIdx !== undefined;

      fields.forEach((field) => {
        let passesOthers = activeFields.every((af) => af === field || crossFilters[af].has(r[af]));
        
        if (passesOthers && activeStoreFilters && field !== "storeCode") {
          if (!crossFilters["storeCode"].has(r.storeCode)) passesOthers = false;
        }
        
        if (passesOthers) {
          const val = r[field];
          let itemStats = structures[field][val];
          if (!itemStats) {
            itemStats = structures[field][val] = {
              total: 0,
              monthly: new Array(numMonths).fill(0),
              monthlyStores: Array.from({ length: numMonths }, () => new SimulatedSet()),
            };
          }
          itemStats.total += r.calls;
          if (hasValidMonth) {
            itemStats.monthly[mIdx] += r.calls;
            if (r.branches) {
              itemStats.monthlyStores[mIdx].add(r.branches);
            } else {
              itemStats.monthlyStores[mIdx].add(r.storeCode);
            }
          }
        }
      });

      let storePassesOthers = activeFields.every((af) => crossFilters[af].has(r[af]));
      
      if (storePassesOthers) {
        const storeVal = r.storeCode;
        let storeStats = structures["storeCode"][storeVal];
        if (!storeStats) {
          storeStats = structures["storeCode"][storeVal] = {
            total: 0,
            monthly: new Array(numMonths).fill(0),
          };
        }
        storeStats.total += r.calls;
        if (hasValidMonth) storeStats.monthly[mIdx] += r.calls;
      }
    });
    return structures;
  }, [globalFilteredRecords, crossFilters, visibleMonths, isDataLoaded]);

  // Use the same month pair for the label, each row and Grand Total.
  const trendMonthIndices = useMemo(() => {
    const latest = visibleMonths.length - (isLatestMonthClosed ? 1 : 2);
    return { previous: latest - 1, latest };
  }, [visibleMonths, isLatestMonthClosed]);

  const calculateTrend = (values: number[]) => {
    const { previous, latest } = trendMonthIndices;
    if (previous < 0 || latest < 0) return 0;
    const before = values[previous] || 0;
    const after = values[latest] || 0;
    return before > 0 ? ((after - before) / before) * 100 : after > 0 ? 100 : 0;
  };

  

  

  const generateTableDataFromStats = (field: any) => {
    if (!isDataLoaded || !aggregatedStats[field]) return [];
    const fieldStats = aggregatedStats[field];
    const statsEntries = Object.entries(fieldStats);
    let tableTotalCalls = 0;
    const numMonths = visibleMonths.length;
    const tableMonthlyTotals = new Array(numMonths).fill(0);

    // ใช้ forEach เลี่ยง Loop Protection
    statsEntries.forEach(([_, data]: any) => {
      if (data) {
        tableTotalCalls += data.total;
        (data.monthly || []).forEach((val: any, m: any) => {
          if (m < numMonths) tableMonthlyTotals[m] += val;
        });
      }
    });

    return statsEntries
      .filter(([_, data]: any) => data && data.total > 0)
      .map(([name, data]: any) => {
        const monthlyVals = data?.monthly || [];
        const len = monthlyVals.length;
        let forecast =
          len > 0
            ? Math.round(((monthlyVals[len - 1] || 0) / latestMonthMaxDay) * 30)
            : 0;
        const trend = calculateTrend(monthlyVals);

        

        const monthlyDetails: any[] = [];
        // ใช้ Array.from.forEach แทน for loop
        Array.from({ length: numMonths }).forEach((_, idx) => {
          const calls = data?.monthly?.[idx] || 0;
          const totalMonth = tableMonthlyTotals[idx] || 0;
          monthlyDetails.push({
            calls: calls,
            percentage:
              totalMonth > 0 ? ((calls / totalMonth) * 100).toFixed(1) : "0.0",
            branchCount: data?.monthlyStores ? data.monthlyStores[idx]?.size : 0,
          });
        });
        
        return {
          name,
          total: data?.total || 0,
          monthly: data?.monthly || [],
          monthlyDetails,
          percentage:
            tableTotalCalls > 0
              ? (((data?.total || 0) / tableTotalCalls) * 100).toFixed(2)
              : "0.00",
          forecast,
          trend,
        };
      })
      .sort((a: any, b: any) => b.total - a.total);
  };

  const productTypeTableData = useMemo(
    () => generateTableDataFromStats("product"),
    [aggregatedStats, latestMonthMaxDay, trendMonthIndices, isDataLoaded, isLatestMonthClosed]
  );
  const problemTableData = useMemo(
    () => generateTableDataFromStats("problem"),
    [aggregatedStats, latestMonthMaxDay, trendMonthIndices, isDataLoaded, isLatestMonthClosed]
  );
  const systemTableData = useMemo(
    () => generateTableDataFromStats("system"),
    [aggregatedStats, latestMonthMaxDay, trendMonthIndices, isDataLoaded, isLatestMonthClosed]
  );
  const damagedPartTableData = useMemo(
    () => generateTableDataFromStats("damagedPart"),
    [aggregatedStats, latestMonthMaxDay, trendMonthIndices, isDataLoaded, isLatestMonthClosed]
  );
  const causeTableData = useMemo(
    () => generateTableDataFromStats("cause"),
    [aggregatedStats, latestMonthMaxDay, trendMonthIndices, isDataLoaded, isLatestMonthClosed]
  );
  const areaTableData = useMemo(
    () => generateTableDataFromStats("area"),
    [aggregatedStats, latestMonthMaxDay, trendMonthIndices, isDataLoaded, isLatestMonthClosed]
  );
  const teamTableData = useMemo(
    () => generateTableDataFromStats("team"),
    [aggregatedStats, latestMonthMaxDay, trendMonthIndices, isDataLoaded, isLatestMonthClosed]
  );

  const chartAggregatedData = useMemo(() => {
    if (!isDataLoaded) return { products: [], systems: [] };
    const pMap: any = {},
      sMap: any = {};
    const numMonths = visibleMonths.length;
    const monthToIndex: any = {};
    
    // เปลี่ยนมาใช้ .forEach() แทน For Loop
    visibleMonths.forEach((m: any, i: number) => {
      monthToIndex[m] = i;
    });
      
    // เปลี่ยนมาใช้ .forEach() แทน For Loop
    dashboardFilteredRecords.forEach((r: any) => {
      const mIdx = monthToIndex[r.month];
      if (!pMap[r.product])
        pMap[r.product] = { total: 0, monthly: new Array(numMonths).fill(0) };
      pMap[r.product].total += r.calls;
      if (mIdx !== undefined) pMap[r.product].monthly[mIdx] += r.calls;
      if (!sMap[r.system])
        sMap[r.system] = { total: 0, monthly: new Array(numMonths).fill(0) };
      sMap[r.system].total += r.calls;
      if (mIdx !== undefined) sMap[r.system].monthly[mIdx] += r.calls;
    });
    const formatData = (map: any) =>
      Object.entries(map)
        .map(([name, data]: any) => ({
          name,
          total: data?.total || 0,
          monthly: data?.monthly || [],
        }))
        .sort((a: any, b: any) => b.total - a.total);
    return { products: formatData(pMap), systems: formatData(sMap) };
  }, [dashboardFilteredRecords, visibleMonths, isDataLoaded]);

  const topIssuesKPI = useMemo(() => {
    if (!isDataLoaded || chartAggregatedData.systems.length === 0) return [];
    const colors = [
      "border-l-4 border-indigo-600 text-indigo-700 dark:border-indigo-500 dark:text-indigo-400",
      "border-l-4 border-sky-500 text-sky-600 dark:border-sky-400 dark:text-sky-400",
      "border-l-4 border-rose-500 text-rose-600 dark:border-rose-400 dark:text-rose-400",
    ];
    return chartAggregatedData.systems
      .slice(0, 3)
      .map((item: any, idx: any) => ({
        title: item?.name || "",
        val: item?.total || 0,
        color: colors[idx] || colors[0],
      }));
  }, [chartAggregatedData.systems, isDataLoaded]);

  const branchTableData = useMemo(() => {
    if (!isDataLoaded || !aggregatedStats["storeCode"]) return [];
    const storeStats = aggregatedStats["storeCode"];
    const result: any[] = [];
    
    // เปลี่ยน for ให้ปลอดภัย
    dynamicLists.branches.forEach((b: any) => {
      if (b && b.id) {
        const stats = storeStats[b.id];
        if (stats && stats.total > 0)
          result.push({
            id: b.id,
            name: b.name,
            area: b.area,
            team: b.team,
            total: stats.total,
            monthly: stats.monthly || [],
          });
      }
    });

    let arr = result.sort((a, b) => (b?.total || 0) - (a?.total || 0));
    arr.forEach((b, i) => {
      if (b) b.rank = i + 1;
    });
    
    if (branchSearch) {
      const s = branchSearch.toLowerCase();
      arr = arr.filter(
        (b) =>
          (b?.id || "").toLowerCase().includes(s) ||
          (b?.name || "").toLowerCase().includes(s)
      );
    }
    return arr;
  }, [aggregatedStats, dynamicLists.branches, branchSearch, isDataLoaded]);

  const getTrendHeader = () => {
    const { previous, latest } = trendMonthIndices;
    if (previous < 0 || latest < 0) return '%แนวโน้ม';
    return `%แนวโน้ม\n${formatMonthThaiSplit(visibleMonths[latest]).m} VS\n${formatMonthThaiSplit(visibleMonths[previous]).m}`;
  };

  

  const monthlySummaryData = useMemo(() => {
    if (!isDataLoaded) return [];
    return visibleMonths.map((m: any) => {
      const filtered = dashboardFilteredRecords.filter((r: any) => r.month === m);
      const total = filtered.reduce((sum: any, r: any) => sum + r.calls, 0);
      return { month: m, total: total };
    });
  }, [dashboardFilteredRecords, visibleMonths, isDataLoaded]);

  const renderDropdowns = () => {
    const configs = [
      { label: "กลุ่มผลิตภัณฑ์", opts: dynamicLists.products, sel: filterProduct, set: setFilterProduct },
      { label: "อาการเสีย", opts: dynamicLists.problems, sel: filterProblem, set: setFilterProblem },
      { label: "สาเหตุอาการ", opts: dynamicLists.causes, sel: filterCause, set: setFilterCause },
      { label: "ชิ้นส่วนที่เสีย", opts: dynamicLists.damagedParts, sel: filterDamagedPart, set: setFilterDamagedPart },
      { label: "ระบบ", opts: dynamicLists.systems, sel: filterSystem, set: setFilterSystem },
      { label: "พื้นที่", opts: dynamicLists.areas, sel: filterArea, set: setFilterArea },
      { label: "ทีม", opts: dynamicLists.teams, sel: filterTeam, set: setFilterTeam },
      { label: "Call Type", opts: dynamicLists.callTypes, sel: filterCallType, set: setFilterCallType },
      { label: "เลือกเดือน", opts: dynamicLists.months, sel: filterMonth, set: setFilterMonth, highlight: true },
    ];
    return configs.map((cfg: any, i: any) => (
      <SearchableDropdown
        key={i}
        label={cfg.label}
        options={cfg.opts}
        selectedValues={cfg.sel}
        onChange={cfg.set}
        count={(cfg.opts || []).length}
        isHighlight={cfg.highlight}
      />
    ));
  };

  const getSummaryRows = (rows: any[], field: string, key = "name") => {
    const selected = crossFilters[field];
    return selected && selected.size > 0 ? rows.filter(row => selected.has(row?.[key])) : rows;
  };

  const sortTableRows = (rows: any[], tableId: string) => {
    const selected = (sortMonthsByTable[tableId] || []).filter(month => visibleMonths.includes(month));
    if (!selected.length) return rows;
    const indices = selected.map(month => visibleMonths.indexOf(month));
    const score = (row: any) => indices.reduce((sum, index) => sum + (Number(row?.monthly?.[index]) || 0), 0);
    return rows.map((row, index) => ({row, index, score: score(row)}))
      .sort((a, b) => b.score - a.score || a.index - b.index).map(item => item.row);
  };
  const toggleSortMonth = (tableId: string, month: string) => {
    setSortMonthsByTable(previous => {
      const selected = (previous[tableId] || []).filter(value => visibleMonths.includes(value));
      return {...previous, [tableId]: selected.includes(month) ? selected.filter(value => value !== month) : [...selected, month]};
    });
    setRowLimits((previous: any) => ({...previous, [tableId]: tableId === "sec6" ? 30 : 15}));
  };
  const renderSortMonth = (tableId: string, month: string) => {
    const selected = (sortMonthsByTable[tableId] || []).includes(month);
    const date = formatMonthThaiSplit(month);
    return <button type="button" aria-label={"เรียง " + tableId + " " + month} aria-pressed={selected}
      onClick={() => toggleSortMonth(tableId, month)}
      title="เลือกหลายเดือนได้: เรียงจากยอดรวมของเดือนที่เลือกมากไปน้อย"
      className={`w-full flex flex-col items-center gap-1 rounded-md py-1 focus-visible:ring-2 focus-visible:ring-indigo-500 ${selected ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200" : "hover:bg-indigo-50 dark:hover:bg-slate-700"}`}>
      <span>{date.m}</span><span className="text-xs text-slate-500 dark:text-slate-400">{date.y}</span>
      <span aria-hidden="true">{selected ? "✓ ↓" : "↕"}</span>
    </button>;
  };
  const renderSortReset = (tableId: string) => (sortMonthsByTable[tableId] || []).some(month => visibleMonths.includes(month)) && (
    <div className="flex items-center justify-between gap-3 px-4 py-2 bg-indigo-50 dark:bg-indigo-950 text-xs text-indigo-700 dark:text-indigo-200">
      <span>เรียงยอดรวมเดือนที่เลือก: {(sortMonthsByTable[tableId] || []).filter(month => visibleMonths.includes(month)).join(", ")} ↓</span>
      <button type="button" onClick={() => setSortMonthsByTable(previous => ({...previous, [tableId]: []}))} className="font-bold whitespace-nowrap">ล้างการเรียง</button>
    </div>
  );

  const renderStandardTable = (tableDef: any) => {
    const branch = tableDef.keyField === "storeCode";
    const limit = rowLimits[tableDef.id] || (branch ? 30 : 15);
    const source = tableDef.data || [];
    const summaryRows = getSummaryRows(source, tableDef.keyField, branch ? "id" : "name");
    const visibleRows = sortTableRows(summaryRows, tableDef.id).slice(0, limit);
    const hasRowSelection = crossFilters[tableDef.keyField]?.size > 0;
    const grandTotal = summaryRows.reduce((sum: number,row: any)=>sum+(row.total||0),0);
    const grandMonthly = visibleMonths.map((_: any,index: number)=>summaryRows.reduce((sum: number,row: any)=>sum+(row.monthly?.[index]||0),0));
    const en = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const th = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
    const slots = visibleMonths.map((label: string,index: number)=>{
      const parts=label.split("-"); let year=Number(parts[1]?.trim()); if(year<100)year+=2000;if(year>2400)year-=543;
      return {label,index,year,month:en.findIndex((m,i)=>m.toLowerCase()===parts[0]?.trim().toLowerCase()||th[i]===parts[0]?.trim())};
    });
    const years = Array.from(new Set(slots.map((slot: any)=>slot.year))).sort((a: any,b: any)=>a-b) as number[];
    const spans = Math.max(years.length,1);
    const leading = branch ? 6 : 3;
    const tail = branch ? 0 : showForecast ? 3 : 1;
    const toggleRow = (row: any) => setCrossFilters((previous: any)=>{
      const selected=new Set(previous[tableDef.keyField]||[]);const value=branch?row.id:row.name;
      selected.add(value);
      return {...previous,[tableDef.keyField]:selected};
    });
    const toggleCalendarMonth = (month: number) => {
      const keys=slots.filter((slot: any)=>slot.month===month).map((slot: any)=>slot.label);
      if(!keys.length)return;
      setSortMonthsByTable(previous=>{
        const selected=(previous[tableDef.id]||[]).filter(value=>visibleMonths.includes(value));
        const all=keys.every((key: string)=>selected.includes(key));
        return {...previous,[tableDef.id]:all?selected.filter(value=>!keys.includes(value)):Array.from(new Set([...selected,...keys]))};
      });
    };
    return <section key={tableDef.id} data-testid={"table-"+tableDef.id} className="calendar-report bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <button onClick={()=>toggleSection(tableDef.id)} className="w-full px-6 py-5 flex justify-between items-center bg-slate-50 dark:bg-slate-800 text-left text-slate-800 dark:text-slate-100 font-bold">
        <span>{tableDef.num}. {tableDef.title}</span><span>{source.length} รายการ {openSections[tableDef.id] ? "⌃" : "⌄"}</span>
      </button>
      {branch && <div className="px-4 py-2"><input value={branchSearch} onChange={event=>setBranchSearch(event.target.value)} placeholder="ค้นหารหัส หรือชื่อสาขา..." className="w-full md:w-80 px-3 py-2 border rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" /></div>}
      {renderSortReset(tableDef.id)}
      {hasRowSelection && <div className="px-4 py-2 flex items-center justify-between gap-3 bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200">
        <span>แสดงเฉพาะรายการที่เลือก ({summaryRows.length} รายการ)</span>
        <button type="button" onClick={()=>setCrossFilters((previous: any)=>({...previous,[tableDef.keyField]:new Set()}))} className="px-3 py-1 rounded-lg font-bold border border-indigo-200 dark:border-indigo-700">ล้างการเลือก</button>
      </div>}
      {openSections[tableDef.id] && <div className="overflow-auto max-h-[700px] relative custom-scrollbar">
        <table className="w-full text-left border-collapse" aria-label={tableDef.title}>
          <thead className="sticky top-0 z-20 bg-slate-50 dark:bg-slate-800 text-indigo-900 dark:text-indigo-200">
            <tr>
              <th>{branch?"อันดับ / รหัสสาขา":"รายการวิเคราะห์"}</th>
              {branch && <><th>ชื่อสาขา</th><th>พื้นที่</th><th>ทีม</th></>}
              <th>รวม CALLS</th><th className="calendar-year">ปี</th>
              {th.map((month,index)=>{
                const keys=slots.filter((slot: any)=>slot.month===index).map((slot: any)=>slot.label);
                const selected=keys.length>0&&keys.every((key: string)=>(sortMonthsByTable[tableDef.id]||[]).includes(key));
                return <th key={month}><button type="button" aria-label={"เรียง "+tableDef.id+" "+month} aria-pressed={selected} disabled={!keys.length} onClick={()=>toggleCalendarMonth(index)} className={`w-full py-2 rounded-md text-center ${selected?"bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200":""}`} title="เรียงยอดรวมเดือนนี้จากทุกปีที่แสดง มากไปน้อย">{month}<br/><span aria-hidden="true">{selected?"✓ ↓":"↕"}</span></button></th>;
              })}
              {!branch && <><th style={{whiteSpace:"pre-line"}}>{getTrendHeader()}</th>{showForecast&&<><th>ประมาณการ<br/>(หาร {latestMonthMaxDay} วัน × 30)</th><th>กราฟประมาณการ</th></>}</>}
            </tr>
          </thead>
          <tbody>
            {visibleRows.flatMap((row: any)=>years.map((year,yearIndex)=>{
              const selected=crossFilters[tableDef.keyField]?.has(branch?row.id:row.name);
              const max=getRowMaxVal(row.monthly||[]);
              return <tr key={(branch?row.id:row.name)+"-"+year} data-item={branch?row.id:row.name} data-year={year} aria-selected={!!selected} onClick={()=>toggleRow(row)} className={`cursor-pointer border-b border-slate-100 dark:border-slate-700 ${selected?"bg-indigo-50 dark:bg-indigo-950":""}`}>
                {yearIndex===0&&<>
                  <td rowSpan={spans} className={`font-bold text-slate-800 dark:text-slate-100 ${selected?"border-l-4 border-indigo-500":""}`} title={row.name}>{selected?"● ":""}{branch?`${row.rank}. ${row.id}`:row.name}</td>
                  {branch&&<><td rowSpan={spans} className="text-slate-800 dark:text-slate-100">{row.name}</td><td rowSpan={spans}>{row.area}</td><td rowSpan={spans}>{row.team}</td></>}
                  <td rowSpan={spans} className="text-center font-extrabold text-indigo-800 dark:text-indigo-300"><div>{Number(row.total||0).toLocaleString()}</div>{!branch&&<div className="mt-1">({row.percentage||"0.00"}%)</div>}</td>
                </>}
                <td className="calendar-year text-center font-bold text-indigo-800 dark:text-indigo-200 bg-blue-50 dark:bg-slate-900">{year}</td>
                {th.map((_,month)=>{
                  const slot=slots.find((entry: any)=>entry.year===year&&entry.month===month);
                  const value=slot?Number(row.monthly?.[slot.index]||0):null;
                  const colors=getHeatmapCellClasses(value||0,max);
                  const pct=slot?row.monthlyDetails?.[slot.index]?.percentage:undefined;
                  return <td key={month} data-month={month} className={`text-center ${value===null?"bg-white dark:bg-slate-800":colors.bg}`}>
                    <span className={`font-bold ${colors.textMain}`}>{value===null?"—":value.toLocaleString()}</span>
                    {pct!==undefined&&value!==null&&<span className={`block mt-1 ${colors.textSub}`}>({pct}%)</span>}
                  </td>;
                })}
                {yearIndex===0&&!branch&&<>
                  <td rowSpan={spans} className={`text-center font-bold ${(row.trend||0)>0?"text-rose-600":"text-emerald-600"}`}>{(row.trend||0)>0?"+":""}{Number(row.trend||0).toFixed(2)}%</td>
                  {showForecast&&<><td rowSpan={spans} className="text-center font-bold text-indigo-700 dark:text-indigo-300">{Number(row.forecast||0).toLocaleString()}</td><td rowSpan={spans}><Sparkline data={row.monthly||[]} forecast={row.forecast||0}/></td></>}
                </>}
              </tr>;
            }))}
            {!visibleRows.length&&<tr><td colSpan={leading+12+tail} className="text-center text-slate-500">ไม่พบข้อมูล</td></tr>}
          </tbody>
          {source.length>0&&<YearMonthSummary months={visibleMonths} totals={grandMonthly} total={grandTotal} label={tableDef.title+" สรุปรายปี"} labelColumns={leading} tailColumns={tail} forecastInfo={forecastInfo}/>}
        </table>
        {summaryRows.length>limit&&<button type="button" className="w-full p-3 font-bold text-indigo-600 bg-slate-50 dark:bg-slate-900" onClick={()=>setRowLimits((previous: any)=>({...previous,[tableDef.id]:limit+30}))}>แสดงผลเพิ่มอีก +30 รายการ</button>}
      </div>}
    </section>;
  };

  // ==========================================
  // 4. หน้า Loading & หน้า Error
  // ==========================================

  // ✨ ถ้ายังโหลด Tailwind CSS (CDN) ไม่เสร็จ ให้โชว์หน้า Loading เล็กๆ ที่มี Inline Style ก่อน
  // เพื่อป้องกัน FOUC (Flash of Unstyled Content) บน Vercel
  if (!isTailwindLoaded) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
        <div style={{ width: '50px', height: '50px', border: '5px solid #e2e8f0', borderTopColor: '#4f46e5', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <h2 style={{ marginTop: '20px', color: '#475569', fontSize: '18px', fontWeight: 'bold' }}>กำลังโหลดระบบ CSS...</h2>
        <style>
          {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
          {`
            @media (prefers-color-scheme: dark) {
              body { background-color: #0f172a; }
              div { border-color: #334155; border-top-color: #818cf8; }
              h2 { color: #cbd5e1; }
            }
          `}
        </style>
      </div>
    );
  }

  const renderSourceSelector = () => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="sheet-source" className="text-xs font-bold">เลือกชุดข้อมูล</label>
      <select id="sheet-source" aria-label="เลือกชุดข้อมูล" value={sheetUrl} disabled={isProcessing}
        onChange={(event) => { const url = event.target.value; setSheetUrl(url); loadFromGoogleSheet(url); }}
        className="w-full md:w-80 px-4 py-2.5 rounded-xl border border-indigo-300 bg-white text-slate-800 font-bold text-sm focus:ring-2 focus:ring-indigo-500 disabled:opacity-60">
        {SHEET_SOURCES.map(source => <option key={source.url} value={source.url}>{source.name}</option>)}
      </select>
      {isProcessing && <span role="status" className="text-xs">กำลังโหลดชุดข้อมูล...</span>}
      {loadError && <span role="alert" className="text-xs text-rose-500">{loadError}</span>}
    </div>
  );

  if (!isDataLoaded) {
    if (isProcessing) {
      return (
        <div className="min-h-screen bg-[#f3f7fb] dark:bg-slate-900 flex flex-col items-center justify-center p-4 text-left transition-colors">
          <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-100 dark:bg-indigo-900/50">
              <div className="bg-indigo-600 dark:bg-indigo-500 h-full w-full animate-[pulse_1.5s_ease-in-out_infinite] origin-left"></div>
            </div>
            <div className="relative w-24 h-24 mx-auto mb-6 mt-4">
              <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/50 rounded-full animate-ping opacity-70"></div>
              <div className="relative bg-indigo-600 dark:bg-indigo-500 w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <RefreshCw className="w-12 h-12 text-white animate-spin" />
              </div>
            </div>
            <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight mb-3">
              กำลังเตรียมข้อมูล...
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 mb-4 leading-relaxed px-4">
              กำลังเชื่อมต่อและประมวลผล กรุณารอสักครู่...
            </p>
          </div>
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4 text-left transition-colors">
        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl w-full border border-slate-200 dark:border-slate-700">
          <div className="mb-6">{renderSourceSelector()}</div>
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
              <Layers className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              Call Maintenance Dashboard
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 mt-3">
              ระบบดึงข้อมูลจาก Google Sheet ล้มเหลว โปรดเลือกวิธีใช้งานด้านล่าง
            </p>
          </div>
          
          {loadError && (
            <div className="mb-8 p-5 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 rounded-2xl flex items-start gap-4 shadow-sm">
              <AlertTriangle className="w-6 h-6 text-rose-500 dark:text-rose-400 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm font-black text-rose-800 dark:text-rose-300 mb-1">สาเหตุที่หน้าเว็บไม่โหลด:</p>
                <p className="text-sm font-semibold text-rose-700 dark:text-rose-400 leading-relaxed">
                  {loadError}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:shadow-md transition-all">
              <UploadCloud className="w-10 h-10 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-700 dark:text-slate-200 mb-2">มีไฟล์ข้อมูลของตัวเอง?</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 h-10">อัปโหลดไฟล์ CSV ที่มีโครงสร้างตรงกับระบบ</p>
              <input
                type="file"
                accept=".csv"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
              <button
                onClick={() => fileInputRef.current.click()}
                disabled={isProcessing}
                className="w-full py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:border-slate-500 dark:hover:border-slate-400 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-sm transition-all"
              >
                เลือกอัปโหลดไฟล์ CSV
              </button>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 rounded-2xl p-6 text-center hover:shadow-md transition-all relative overflow-hidden">
              <div className="absolute -top-3 -right-3 bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-sm transform rotate-12">แนะนำ!</div>
              <PlayCircle className="w-10 h-10 text-indigo-500 dark:text-indigo-400 mx-auto mb-3" />
              <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">ยังไม่มีไฟล์? ลองใช้ตัวอย่าง</h3>
              <p className="text-xs text-indigo-600/80 dark:text-indigo-400/80 mb-4 h-10">กดดูหน้าตา Dashboard ใช้งานได้ 100% ด้วยข้อมูลจำลอง</p>
              <button
                onClick={handleLoadDemoData}
                disabled={isProcessing}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all shadow-md"
              >
                ทดลองใช้ด้วยข้อมูลจำลอง
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ==========================================
  // 5. MAIN DASHBOARD RENDER
  // ==========================================

  const storeLimit = rowLimits["sec6"] || 15;
  const visibleBranches = sortTableRows(branchTableData, "sec6").slice(0, storeLimit);
  const hasMoreBranches = branchTableData.length > storeLimit;
  const branchSummaryRows = getSummaryRows(branchTableData, "storeCode", "id");
  const grandBranchTotal = branchSummaryRows.reduce(
    (acc: any, row: any) => acc + (row?.total || 0),
    0
  );
  const grandBranchMonthly = Array(visibleMonths.length).fill(0);
  branchSummaryRows.forEach((row: any) => {
    if(row) (row?.monthly || []).forEach((val: any, i: any) => (grandBranchMonthly[i] += val));
  });

  return (
    <div className="dashboard-shell min-h-screen bg-[#f3f7fb] dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans antialiased pb-12 print:bg-white print:pb-0 text-left transition-colors duration-300">
      <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-black text-white sticky top-0 z-40 shadow-md print:hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-600 dark:bg-indigo-500 p-3 rounded-xl shadow-inner">
              <Layers className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wide text-white">
                ระบบรายงาน Call MAINTENANCE DASHBOARD
              </h1>
              <div className="mt-2">{renderSourceSelector()}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs px-3 py-1 rounded-lg flex items-center gap-1.5 font-bold ${fileName.includes('ตัวอย่าง') ? 'bg-amber-500/20 text-amber-300' : 'bg-indigo-800/60 dark:bg-indigo-900/80 text-indigo-100'}`}>
                  <FileSpreadsheet className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                  <span>ไฟล์ข้อมูล: {fileName}</span>
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end gap-1">
              <button onClick={handleExportCSV} disabled={isExporting || isProcessing || dashboardFilteredRecords.length === 0}
                className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                title="ดาวน์โหลดข้อมูลตามตัวกรองปัจจุบันเป็น CSV">
                {isExporting ? <RefreshCw className="w-5 h-5 animate-spin" /> : <FileSpreadsheet className="w-5 h-5" />}
                {isExporting ? "กำลังสร้าง CSV..." : "Export CSV"}
              </button>
              <span role="status" aria-live="polite" className="text-xs text-emerald-200">{exportStatus || "ข้อมูลตามตัวกรองที่เลือก"}</span>
            </div>
            <nav className="flex bg-slate-800/80 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-700/60 dark:border-slate-700 shadow-lg overflow-x-auto">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "overview"
                    ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <BarChart2 className="w-5 h-5" /> ภาพรวม (Overview)
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "settings"
                    ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Settings className="w-5 h-5" /> ตั้งค่าข้อมูล (Data)
              </button>
            </nav>
            <button
              onClick={toggleTheme}
              className="bg-slate-800/80 dark:bg-slate-800 p-3 rounded-2xl border border-slate-700/60 dark:border-slate-700 shadow-lg text-amber-400 dark:text-indigo-300 hover:bg-slate-700 transition-colors"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>


      <style>{`
        .dashboard-fit table { table-layout: fixed; width: 100%; white-space: normal; }
        .dashboard-fit table th, .dashboard-fit table td {
          min-width: 0 !important; max-width: none !important;
          padding: 10px 3px !important; overflow-wrap: anywhere;
          font-size: clamp(11px, .95vw, 14px);
        }
        .dashboard-fit table th:first-child, .dashboard-fit table td:first-child { width: 15%; padding-left: 8px !important; }
        .dashboard-fit table th:nth-child(2), .dashboard-fit table td:nth-child(2) { width: 8%; }
        .dashboard-fit table th:last-child, .dashboard-fit table td:last-child { width: 9%; }
        .dashboard-fit table td div, .dashboard-fit table th div { font-size: inherit !important; min-width: 0 !important; }
        .dashboard-fit table td .text-xl { font-size: clamp(13px, 1.15vw, 18px) !important; }
        .dashboard-fit table td svg { max-width: 100%; height: auto; }
        .dashboard-fit svg { min-width: 0 !important; }
        .dashboard-fit table .truncate { white-space: normal; }
        .dashboard-fit .calendar-report table th.calendar-year, .dashboard-fit .calendar-report table td.calendar-year { width: 48px; white-space: nowrap; }
        .dashboard-fit .calendar-report tbody td { vertical-align: middle; }
        .dashboard-fit table .year-month-footer td { width: auto !important; padding: 5px 2px !important; font-size: clamp(9px, .8vw, 12px); }
        .dashboard-fit table td > div:not(:has(svg)), .dashboard-fit table th > div {
          transform: scale(1.18);
          transform-origin: center;
        }
        .dashboard-fit table td:first-child > div { transform-origin: left center; }

        .dashboard-shell { background-image: radial-gradient(ellipse at top left, #e7efff 0, transparent 52%); }
        .dashboard-shell header { border-bottom: 1px solid #5367a0; }
        .dashboard-fit > section, .dashboard-fit section.calendar-report,
        .dashboard-fit section[data-testid="year-comparison-chart"] {
          border-color: #ccd9eb;
          box-shadow: 0 4px 18px -12px #23467355;
        }
        .dashboard-fit .calendar-report > button:first-child {
          background: linear-gradient(110deg, #edf3ff, #f8fafc 70%);
          color: #173b70;
          border-bottom: 1px solid #c4d4eb;
          box-shadow: inset 4px 0 #6366f1;
        }
        .dashboard-fit .calendar-report > button:first-child > span:last-child {
          color: #4f46e5;
          font-variant-numeric: tabular-nums;
        }
        .dashboard-fit table { border-color: #c7d5e7; }
        .dashboard-fit table th, .dashboard-fit table td {
          border-right: 1px solid #c7d5e7;
          border-bottom: 1px solid #d4dfed;
          font-variant-numeric: tabular-nums;
        }
        .dashboard-fit table th:last-child, .dashboard-fit table td:last-child { border-right: 0; }
        .dashboard-fit table thead {
          background: linear-gradient(110deg, #173b70, #24548d);
          color: #fff;
          box-shadow: 0 2px 5px #173b7026;
        }
        .dashboard-fit table thead th { color: #fff; border-color: #55749d; font-weight: 800; }
        .dashboard-fit .calendar-report thead th.calendar-year { background: #1c477e; }
        .dashboard-fit .calendar-report thead button { color: #fff; }
        .dashboard-fit .calendar-report thead button:hover:not(:disabled) { background: #ffffff20; }
        .dashboard-fit .calendar-report thead button[aria-pressed="true"] {
          background: #dce7ff; color: #312e81; box-shadow: inset 0 -3px #a5b4fc;
        }
        .dashboard-fit .calendar-report tbody td.calendar-year { background: #edf3fc; color: #284e80; font-weight: 800; }
        .dashboard-fit .calendar-report tbody td[rowspan] { background-color: #f8faff; }
        .dashboard-fit .calendar-report tbody tr[aria-selected="true"] td[rowspan] { background-color: #e8eaff; }
        .dashboard-fit .calendar-report tbody tr:hover td { box-shadow: inset 0 0 0 999px #4f46e509; }
        .dashboard-fit .year-month-footer { box-shadow: 0 -3px 10px #173b701a; }
        .dashboard-fit .year-month-footer tr:first-child td { border-color: #6686ad !important; }
        .dashboard-fit button:focus-visible, .dashboard-fit input:focus-visible, .dashboard-fit select:focus-visible {
          outline: 3px solid #818cf8; outline-offset: 2px;
        }
        .dark .dashboard-shell { background-image: radial-gradient(ellipse at top left, #1e2b4a 0, transparent 52%); }
        .dark .dashboard-fit section.calendar-report,
        .dark .dashboard-fit section[data-testid="year-comparison-chart"] { border-color: #40516d; }
        .dark .dashboard-fit .calendar-report > button:first-child { background: linear-gradient(110deg, #263650, #1e293b); color: #e0e7ff; border-color: #495d7e; }
        .dark .dashboard-fit .calendar-report > button:first-child > span:last-child { color: #c7d2fe; }
        .dark .dashboard-fit table th, .dark .dashboard-fit table td { border-color: #465875; }
        .dark .dashboard-fit table thead { background: linear-gradient(110deg, #172d50, #244673); }
        .dark .dashboard-fit .calendar-report tbody td.calendar-year { background: #243550; color: #c7d2fe; }
        .dark .dashboard-fit .calendar-report tbody td[rowspan] { background-color: #202d43; }
        .dark .dashboard-fit .calendar-report tbody tr[aria-selected="true"] td[rowspan] { background-color: #343b69; }
        .dashboard-shell { color: #172b49; font-weight: 500; }
        .dashboard-shell :is(button, input, select) { font-weight: 600; }
        .dashboard-shell :is(h1, h2, h3, h4, th) { font-weight: 800; }
        .dashboard-shell :is(.text-slate-400, .text-slate-500) { color: #475569; }
        .dashboard-shell .text-slate-600 { color: #334155; }
        .dashboard-shell :is(.text-emerald-400, .text-emerald-500, .text-emerald-600) { color: #047857; }
        .dashboard-shell :is(.text-rose-500, .text-rose-600) { color: #be123c; }
        .dashboard-shell .text-indigo-500 { color: #4f46e5; }
        .dashboard-fit table thead th { text-align: center !important; vertical-align: middle; }
        .dashboard-fit table thead th button { text-align: center; }
        .dashboard-fit .calendar-report tbody td { font-weight: 600; }
        .dashboard-fit .calendar-report tbody td > span.block { font-weight: 600; }
        .dashboard-shell svg text { font-weight: 600; }
        .dashboard-shell svg text[fill="#f97316"] { fill: #c2410c; }
        .dashboard-shell svg text[fill="#6366f1"] { fill: #4f46e5; }
        .dashboard-shell header :is(.text-emerald-400, .text-emerald-500) { color: #6ee7b7; }
        .dark .dashboard-shell { color: #e2e8f0; }
        .dark .dashboard-shell :is(.text-slate-400, .text-slate-500, .text-slate-600) { color: #cbd5e1; }
        .dark .dashboard-shell :is(.text-emerald-400, .text-emerald-500, .text-emerald-600) { color: #6ee7b7; }
        .dark .dashboard-shell :is(.text-rose-500, .text-rose-600) { color: #fda4af; }
        .dark .dashboard-shell .text-indigo-500 { color: #c7d2fe; }
        .dark .dashboard-shell svg text[fill="#f97316"] { fill: #fdba74; }
        .dark .dashboard-shell svg text[fill="#6366f1"] { fill: #c7d2fe; }
        @media print {
          .dashboard-shell { background-image: none; }
          .dashboard-fit table th, .dashboard-fit table td { print-color-adjust: exact; }
        }

      `}</style>
      <main className="dashboard-fit w-full max-w-[1800px] mx-auto px-3 md:px-5 mt-6">
        {activeTab === "overview" && (
          <>
            {/* ================= FILTERS PANEL ================= */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200/80 dark:border-slate-700 p-6 mb-8 transition-colors print:hidden">
              <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-100 dark:border-slate-700">
                <span className="text-base font-extrabold text-slate-700 dark:text-slate-200 flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  ฟิลเตอร์การเลือกคัดกรองข้อมูลแบบยืดหยุ่น
                </span>
                <button
                  onClick={resetFilters}
                  className="text-sm text-indigo-600 dark:text-indigo-400 font-extrabold hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-xl transition-all"
                >
                  <RefreshCw className="w-4 h-4" /> ล้างการเลือกทั้งหมด (Reset)
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {renderDropdowns()}
              </div>
            </section>

            <section className="mb-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-lg font-black text-slate-800 dark:text-slate-100">
                  Top Issues (System) อ้างอิงจากข้อมูลล่าสุด
                </h2>
                <span className="text-sm bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-extrabold px-4 py-1.5 rounded-full ml-auto shadow-sm border border-indigo-200 dark:border-indigo-800">
                  พบข้อมูลทั้งหมด: {(totalCallsCount || 0).toLocaleString()}{" "}
                  CALL
                </span>
              </div>
              {topIssuesKPI.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3">
                  {topIssuesKPI.map((kpi: any, idx: any) => (
                    <div
                      key={idx}
                      className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200/70 dark:border-slate-700 p-6 ${kpi.color} flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden print:border-2`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide truncate w-4/5">
                          {kpi.title}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                          {(kpi.val || 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 text-center text-slate-400 dark:text-slate-500 text-base font-bold transition-colors">
                  ไม่พบข้อมูลตรงตามเงื่อนไขที่กรอง
                </div>
              )}
            </section>

            <section className="mb-8 text-left">
              <TrendLineChart
                data={chartAggregatedData.products}
                months={visibleMonths}
                forecastInfo={forecastInfo}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:grid-cols-2 print:break-inside-avoid">
                <ParetoChart
                  data={chartAggregatedData.products}
                  title="Pareto: กลุ่มอุปกรณ์ (Product Type)"
                  subtitle="วิเคราะห์กลุ่มอุปกรณ์ที่ส่งผลกระทบ 80% แรก"
                  icon={Layers}
                />
                <ParetoChart
                  data={chartAggregatedData.systems}
                  title="Pareto Analysis (System)"
                  subtitle="วิเคราะห์ปัญหาที่ส่งผลกระทบมากที่สุด อิงจากมุมมองกราฟ"
                  icon={BarChart2}
                />
              </div>
            </section>

            <section className="space-y-8">
              {[
                {
                  id: "sec1",
                  num: 1,
                  title: "แนวโน้มแยกตามกลุ่มผลิตภัณฑ์ (Product Type)",
                  data: productTypeTableData,
                  keyField: "product",
                },
                {
                  id: "sec2",
                  num: 2,
                  title: "แนวโน้มแยกตามอาการเสียหลัก (Problem Analysis)",
                  data: problemTableData,
                  keyField: "problem",
                },
                {
                  id: "sec3",
                  num: 3,
                  title: "แนวโน้มแยกตามประเภทโครงสร้างระบบ (System)",
                  data: systemTableData,
                  keyField: "system",
                },
                {
                  id: "sec4",
                  num: 4,
                  title: "แนวโน้มแยกตามประเภทชิ้นส่วนที่เสีย (Damaged Part)",
                  data: damagedPartTableData,
                  keyField: "damagedPart",
                },
                {
                  id: "sec5",
                  num: 5,
                  title: "แนวโน้มตามสาเหตุหลัก (Root Cause)",
                  data: causeTableData,
                  keyField: "cause",
                },
              ].map(renderStandardTable)}

              {renderStandardTable({id:"sec6",num:6,title:"สรุปปริมาณสายการโทรแจ้งซ่อมรายสาขา (Branch Call Volume)",data:branchTableData,keyField:"storeCode"})}

              {[
                {
                  id: "sec7",
                  num: 7,
                  title: "สรุปแนวโน้มสายการโทรรายพื้นที่ปฏิบัติการ (Area)",
                  data: areaTableData,
                  keyField: "area",
                },
                {
                  id: "sec8",
                  num: 8,
                  title: "สรุปแนวโน้มความรับผิดชอบรายทีม (Team)",
                  data: teamTableData,
                  keyField: "team",
                },
              ].map(renderStandardTable)}
            </section>

            <section className="mt-10 mb-14 text-left">
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700 shadow-sm p-8 transition-colors">
                <h2 className="text-base font-black text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-3">
                  <div className="w-2.5 h-5 bg-indigo-600 dark:bg-indigo-500 rounded-sm"></div>
                  สรุปปริมาณการแจ้งซ่อมรายเดือน (Total Monthly Workload)
                </h2>
                <div className="px-2">
                  <MonthlyWorkloadChart data={monthlySummaryData} />
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === "settings" && (
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm max-w-2xl mx-auto print:hidden text-left transition-colors">
            <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-3">
              <FileSpreadsheet className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              จัดการและตั้งค่าแหล่งข้อมูล (Data Source)
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 pb-5 mb-8">
              สถานะปัจจุบัน: ดึงข้อมูลจาก{" "}
              <span className="font-extrabold text-indigo-600 dark:text-indigo-400">{fileName}</span> (
              {(rawData || []).length.toLocaleString()} แถว)
            </p>
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <label className="block text-sm font-black text-slate-700 dark:text-slate-300 uppercase mb-4">
                  อัปโหลดไฟล์ชุดใหม่ (Upload New CSV)
                </label>
                <div className="flex gap-4">
                  <input
                    type="file"
                    accept=".csv"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 font-bold text-sm rounded-xl transition-all flex items-center gap-2 shadow-sm"
                  >
                    <UploadCloud className="w-5 h-5" /> เลือกไฟล์ CSV ของคุณ
                  </button>
                  <button
                    onClick={handleLoadDemoData}
                    className="px-6 py-3 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 dark:hover:border-indigo-500 text-indigo-700 dark:text-indigo-300 font-bold text-sm rounded-xl transition-all flex items-center gap-2 shadow-sm"
                  >
                    <PlayCircle className="w-5 h-5" /> สร้างข้อมูลจำลอง (Demo)
                  </button>
                </div>
                  {isProcessing && (
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-4">
                      <RefreshCw className="w-4 h-4 animate-spin" />{" "}
                      กำลังประมวลผล...
                    </span>
                  )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
