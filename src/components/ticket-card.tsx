import { PRIORITY_MAP } from '../constants/interfaces';
import { Ticket, User } from '../constants/interfaces';

export function TicketCard({ ticket, users }: { ticket: Ticket; users: User[] }) {
  const user = users.find((u) => u.id === ticket.userId);
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="avatar">{user?.name.charAt(0)}</div>
      </div>
      <div className="ticket-title">{ticket.title}</div>
      <div className="ticket-tags">
        <div className="priority-tag">{PRIORITY_MAP[ticket.priority as keyof typeof PRIORITY_MAP].label}</div>
        {ticket.tag.map((tag) => (
          <div key={tag} className="feature-tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
