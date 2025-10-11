import Link from "next/link";
import { Home, StickyNote, Settings, User } from "lucide-react";

type MenuType = {
  path: string;
  icon: React.ReactNode;
};

const menus: MenuType[] = [
  { path: "/", icon: <Home size={22} /> },
  { path: "/memo", icon: <StickyNote size={22} /> },
  { path: "/mypage", icon: <User size={22} /> },
  { path: "/setting", icon: <Settings size={22} /> },
];

export default function Sidebar() {
  return (
    <div
      className="
        fixed top-6 left-6
        w-16 h-[90vh]
        flex flex-col items-center justify-between
        p-5 rounded-3xl
        backdrop-blur-xl bg-[var(--sidebar-background)]/40
        border border-white/20 shadow-2xl
      "
    >
      {/* 아이콘을 중앙에 오도록 wrapper 추가 */}
      <div className="flex flex-col flex-1 justify-center">
        <ul className="flex flex-col items-center gap-6">
          {menus.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="
                  flex items-center justify-center w-10 h-10
                  text-[var(--foreground-light)]
                  rounded-xl transition-all duration-300
                  hover:text-[var(--foreground)]
                  hover:bg-[var(--sidebar-menu-hover)]
                  hover:scale-110
                "
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 하단 라인 */}
      <div className="mb-4 w-8 h-[2px] bg-white/20 rounded-full"></div>
    </div>
  );
}
