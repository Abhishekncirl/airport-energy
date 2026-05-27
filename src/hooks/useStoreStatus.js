// Live "Open now / Closed" status for the convenience store.
//
// Opening hours:
//   Monday-Saturday: 06:00 - 21:00
//   Sunday:          07:00 - 21:00
//
// Returns { isOpen, opensAt, closesAt, todayHours, weekHours }.
// Recomputes every 60s so a card that was "Closed - opens at 6am" can flip
// to "Open now" the moment the store opens.
import { useEffect, useState } from 'react';

const CLOSE_HOUR = 21; // 9 PM, every day

function openHourForDay(day) {
  // 0 = Sunday, 1-6 = Mon-Sat
  return day === 0 ? 7 : 6;
}

function fmtHour(h) {
  // 24h -> "6:00 AM" / "9:00 PM"
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:00 ${period}`;
}

function computeStatus(now = new Date()) {
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const openHour = openHourForDay(day);

  const isOpen = (hour > openHour || (hour === openHour && minute >= 0)) && hour < CLOSE_HOUR;

  let opensAt = null; // human label of when the store next opens, only set when closed
  if (!isOpen) {
    if (hour < openHour) {
      opensAt = `today at ${fmtHour(openHour)}`;
    } else {
      // We're after close — next open is tomorrow.
      const tomorrow = (day + 1) % 7;
      const tomorrowOpen = openHourForDay(tomorrow);
      const dayName = tomorrow === 0 ? 'Sunday' : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][tomorrow];
      opensAt = `${dayName} at ${fmtHour(tomorrowOpen)}`;
    }
  }

  return {
    isOpen,
    opensAt,
    closesAt: fmtHour(CLOSE_HOUR),
    todayHours: `${fmtHour(openHour)} - ${fmtHour(CLOSE_HOUR)}`,
  };
}

export function useStoreStatus() {
  const [status, setStatus] = useState(() => computeStatus());

  useEffect(() => {
    const tick = () => setStatus(computeStatus());
    // First tick aligns to the next whole minute so the badge flips cleanly
    // on the hour, then runs every 60s.
    const msUntilNextMinute = 60_000 - (Date.now() % 60_000);
    let interval;
    const timeout = setTimeout(() => {
      tick();
      interval = setInterval(tick, 60_000);
    }, msUntilNextMinute);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return status;
}
