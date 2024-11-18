// <------------------icons--------------------------->

import TodoIcon from "../assets/icons/To-do.svg";
import InProgressIcon from "../assets/icons/in-progress.svg";
import DoneIcon from "../assets/icons/Done.svg";
import BacklogIcon from "../assets/icons/Backlog.svg";
import HighPriorityIcon from "../assets/icons/Img - High Priority.svg";
import MedPriorityIcon from "../assets/icons/Img - Medium Priority.svg";
import LowPriorityIcon from "../assets/icons/Img - Low Priority.svg";
import NoPriorityIcon from "../assets/icons/No-priority.svg";
import UrgentPriorityIcon from "../assets/icons/SVG - Urgent Priority colour.svg";
import CancelledIcon from "../assets/icons/Cancelled.svg";
import DisplayIcon from "../assets/icons/Display.svg";
import DownIcon from "../assets/icons/down.svg";
import UrgentPriorityGreyIcon from "../assets/icons/SVG - Urgent Priority grey.svg";

export interface Ticket {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
  priority: number;
}

export interface User {
  id: string;
  name: string;
  available: boolean;
}

export interface KanbanData {
  tickets: Ticket[];
  users: User[];
}

export const PRIORITY_MAP = {
  4: { label: "Urgent", color: "#CF3A3A", icon: UrgentPriorityIcon },
  3: { label: "High", color: "#EB875A", icon: HighPriorityIcon },
  2: { label: "Medium", color: "#78C552", icon: MedPriorityIcon },
  1: { label: "Low", color: "#4EA7DE", icon: LowPriorityIcon },
  0: { label: "No priority", color: "#8D8D8D", icon: NoPriorityIcon },
};

export const STATUS_ICONS = {
  Todo: { label: "Todo", icon: TodoIcon },
  "In progress": { label: "In Progress", icon: InProgressIcon },
  Done: { label: "Done", icon: DoneIcon },
  Backlog: { label: "Backlog", icon: BacklogIcon },
  Canceled: { label: "Canceled", icon: CancelledIcon },
};
