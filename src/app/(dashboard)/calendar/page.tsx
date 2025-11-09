import CalendarHero from '@/components/calendar/calendar-hero';
import UpcomingAgenda from '@/components/calendar/upcoming-agenda';

export default function CalendarPage() {
  return (
    <div className="space-y-10">
      <CalendarHero />
      <UpcomingAgenda />
    </div>
  );
}
