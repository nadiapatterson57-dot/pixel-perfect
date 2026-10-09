export const WEDDING_DATE = new Date("2026-12-19T14:00:00+01:00");
export const VENUE =
  "Plot 24, Block 2B, Behind Rainoil Fuel Station, Abijo G.R.A, Ibeju-Lekki, Lagos";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE)}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent("Abijo GRA, Ibeju-Lekki, Lagos")}&output=embed`;
export const PHONES = ["+2348164055770", "+2349063289578"];
export const formatPhone = (p: string) => p.replace(/^\+234(\d{3})(\d{3})(\d{4})$/, "+234 $1 $2 $3");
export const WHATSAPP_MSG =
  "Hello MIDE & MARY, I would like to confirm my attendance at your Holy Matrimony on 19th December 2026.";
export const whatsappUrl = (msg = WHATSAPP_MSG) =>
  `https://wa.me/${PHONES[0]!.replace("+", "")}?text=${encodeURIComponent(msg)}`;
