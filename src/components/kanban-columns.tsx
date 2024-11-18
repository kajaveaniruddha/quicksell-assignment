import { KanbanColumn } from './kanban-column-item';
import { Ticket, KanbanData } from '../constants/interfaces';

export function KanbanColumns({ groupedTickets, grouping, data }: { groupedTickets: { [key: string]: Ticket[] }; grouping: string; data: KanbanData }) {
  return (
    <div className="kanban-columns">
      {Object.entries(groupedTickets).map(([group, tickets]) => (
        <KanbanColumn key={group} group={group} tickets={tickets} grouping={grouping} users={data.users} />
      ))}
    </div>
  );
}
