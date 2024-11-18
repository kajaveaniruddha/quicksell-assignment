import { useEffect, useState } from 'react';
// import { ChevronDown } from 'lucide-react';
import { KanbanColumns } from './kanban-columns';
import { DisplayMenu } from './display-menu';
import { Ticket, KanbanData } from '../constants/interfaces';
import { tmep } from './data';

export default function KanbanBoard() {
  const [data, setData] = useState<KanbanData | null>(tmep);
  const [grouping, setGrouping] = useState(() => localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(() => localStorage.getItem('ordering') || 'priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((res) => res.json())
      .then(setData);
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  if (!data) return <div className="loading">Loading...</div>;

  // Group tickets
  const groupTickets = (): { [key: string]: Ticket[] } => {
    const grouped: { [key: string]: Ticket[] } = {};
    data.tickets.forEach((ticket) => {
      const key =
        grouping === 'status'
          ? ticket.status
          : grouping === 'user'
            ? data.users.find((u) => u.id === ticket.userId)?.name || 'Unassigned'
            : ticket.priority.toString();
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(ticket);
    });

    Object.keys(grouped).forEach((key) => {
      grouped[key].sort((a, b) =>
        ordering === 'priority' ? a.priority - b.priority : b.title.localeCompare(a.title)
      );
    });

    return grouped;
  };

  return (
    <div className="kanban-board">
      <DisplayMenu grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
      <KanbanColumns groupedTickets={groupTickets()} grouping={grouping} data={data} />
    </div>
  );
}
