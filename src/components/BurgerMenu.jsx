import React from "react";
import { UserCircleIcon } from '@heroicons/react/24/outline'

export default function BurgerMenu() {
  return (
    <div className="burger-menu" aria-label="menu button">
      <button>
      <UserCircleIcon className="size-7 text-white" />
      </button>
    </div>
  );
}
