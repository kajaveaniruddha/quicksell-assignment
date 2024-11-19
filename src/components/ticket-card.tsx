import { PRIORITY_MAP, STATUS_ICONS } from '../constants/interfaces';
import { Ticket, User } from '../constants/interfaces';

export function TicketCard({ ticket, users }: { ticket: Ticket; users: User[] }) {
  const user = users.find((u) => u.id === ticket.userId);
  const PRIORITY_UTILS = PRIORITY_MAP[ticket.priority as keyof typeof PRIORITY_MAP]
  const STATUS_UTILS = STATUS_ICONS[ticket.status as keyof typeof STATUS_ICONS]
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="avatar">{user?.name.charAt(0)}</div>
      </div>
      <div className="ticket-title">{ticket.title}</div>
      <div className="ticket-tags">
        <div className="priority-tag">
          <img src={PRIORITY_UTILS?.icon} alt={PRIORITY_UTILS.label} className="status-icon" />
        </div>
        <div className='priority-tag'>
          <img src={STATUS_UTILS?.icon} alt={STATUS_UTILS.label} className="status-icon" />
        </div>
        {ticket.tag.map((tag) => (
          <div key={tag} className="feature-tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
