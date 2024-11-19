import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { ICONS } from '../constants/interfaces';

export function DisplayMenu({ grouping, setGrouping, ordering, setOrdering }: any) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="display-menu">
      <button className="display-button" onClick={() => setShowMenu(!showMenu)}>
        <img src={ICONS.DisplayIcon} alt="display-icon" />
        <span>Display</span>
        {!showMenu ? <ChevronDown /> : <ChevronUp />}
      </button>
      {showMenu && (
        <div className="display-dropdown">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={ordering} onChange={(e) => setOrdering(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
