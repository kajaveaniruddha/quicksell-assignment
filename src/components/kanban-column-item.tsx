import { Ticket, User, STATUS_ICONS, PRIORITY_MAP, ICONS } from '../constants/interfaces';
import { TicketCard } from './ticket-card';

export function KanbanColumn({ group, tickets, grouping, users }: { group: string; tickets: Ticket[]; grouping: string; users: User[] }) {

  const STATUS_UTILS = STATUS_ICONS[group as keyof typeof STATUS_ICONS]
  const PRIORITY_UTILS = PRIORITY_MAP[(group as unknown) as keyof typeof PRIORITY_MAP]

  const GROUPING_TYPE_ICON = {
    status: STATUS_UTILS?.icon,
    priority: PRIORITY_UTILS?.icon
  }
  const GROUPING_TYPE_LABEL = {
    status: STATUS_UTILS?.label,
    priority: PRIORITY_UTILS?.label
  }

  return (
    <div className="kanban-column">
      <div className="column-header">
        <div className="header-left">
          {grouping && <img src={GROUPING_TYPE_ICON[grouping as keyof typeof GROUPING_TYPE_ICON]} alt={group} className="status-icon" />}
          <span>{GROUPING_TYPE_LABEL[grouping as keyof typeof GROUPING_TYPE_LABEL]}</span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <span className="ticket-utils">
          <img src={ICONS.AddIcon} alt={"Add icon"} className="status-icon" />
          <img src={ICONS.ThreeDotMenu} alt={"3 dot menu icon"} className="status-icon" />
        </span>
      </div>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} users={users} />
        ))}
      </div>
    </div>
  );
}
